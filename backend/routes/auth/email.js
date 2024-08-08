import express from 'express';
const router = express.Router();
import User from '../../models/user.js';
import fetch from "node-fetch";
import sgMail from "@sendgrid/mail";
import jwt from "jsonwebtoken";


// Temporary storage for OTPs and emails
const otpStorage = {};
let tempEmail = '';

// Endpoint to send OTP
router.post('/otp', async (req, res) => {
  const { email, recaptchaResponse } = req.body;

  // Verify reCAPTCHA
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaResponse}`;
  const recaptchaResponseJson = await fetch(recaptchaVerifyUrl, { method: 'POST' }).then(res => res.json());

  // console.log('reCAPTCHA Verification Response:', recaptchaResponseJson); // Debugging log

  if (!recaptchaResponseJson.success) {
    return res.status(400).send({ message: 'reCAPTCHA verification failed' });
  }

  else{
    // Generate a 5-character OTP
    const otp = String(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);

    // Store the OTP temporarily
    otpStorage[email] = otp;
    tempEmail = email;
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Email content with OTP
    const msg = {
      to: email,
      from: process.env.EMAIL_USER, // Use your verified sender email
      subject: 'OTP Verification',
      text: `Your OTP is ${otp}`
    };
    
    try {
      await sgMail.send(msg);
      console.log('OTP sent to:', email);
      res.send({ message: 'OTP sent!' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error sending OTP email' });
    }
  }
});

// Endpoint to verify OTP
router.post('/verify-otp', async (req, res) => {
  const { otp,  } = req.body;
  const email = tempEmail;

  console.log(otpStorage);
  console.log(otpStorage[email])

  // Validate the OTP
  if (otpStorage[email] != otp) {
    return res.status(400).send({ message: 'Invalid OTP' });
  }
  
  // Remove the OTP from temporary storage
  delete otpStorage[email];
  tempEmail = '';
  
  // Check if the email already exists in the database
  let user = await User.findOne({ email });

  if(!user){
    res.send({ message: 'Email Verified', isNewUser: true });
  }

  else{const token = jwt.sign({_id: user._id, email: user.email, name: user.name, shopLlist: user.shopList  }, process.env.JWT_SECRET);
    console.log('User found:', user);
    
    res
      .status(200)
      .cookie('token', token,{
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
      })
      .send({ message: 'Email Verified', isNewUser: false });
  }
});

export default router;