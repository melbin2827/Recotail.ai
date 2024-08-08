import express from 'express';
const router = express.Router();
import User from "../../models/user.js";
import jwt from "jsonwebtoken";


router.post('/', async (req, res) => {
  const { email, name } = req.body;

  try {
    // Check for existing user (using await)
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'User with this email already exists 1' });
    }

    // Create new user
    const user = new User({
      email,
      name,
    });
    console.log(user);
    await user.save();

    console.log('User created:', user);

    // Generate JWT and set cookie
    const token = jwt.sign({ _id: user._id, email: user.email, name: user.name, shopList: user.shopList }, process.env.JWT_SECRET);
    res
      .status(201)
      .cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
      })
      .send({ message: 'User created' });

  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      // Duplicate key error (email already exists)
      res.status(400).send({ message: 'User with this email already exists 2' });
    } else {
      // Other errors
      console.error('Error creating user:', error);
      res.status(500).send({ message: 'Internal server error' });
    }
  }
});

export default router;
