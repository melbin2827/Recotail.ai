import express from 'express';
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import crypto from "crypto";

const redirectUrl = process.env.AMZN_REDIRECT_URL;
const appID = process.env.APPLICATION_ID;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
let stateToken = crypto.randomUUID();

router.get('/', (req, res) => {
  console.log('Oauth');
  const oauthUrl = `https://sellercentral.amazon.com/apps/authorize/consent?application_id=${appID}&state=${stateToken}&version=beta`;
  res.redirect(oauthUrl); // Redirect to Amazon's OAuth page
});

router.post('/callback', async(req, res) => {
  try{
    const {spapi_oauth_code,state,selling_partner_id} = req.query;
    if(state != stateToken){
      console.error("state token does not match");
      return res.status(400).send("State token does not match");
    }

    // get refresh token using spapi_oauth_code
    const {refreshToken, accessToken} = await axios.post(`https://api.amazon.com/auth/o2/token?grant_type=authorization_code&code=${spapi_oauth_code}&client_id=${clientId}&client_secret=${clientSecret}`);
    if(!refreshToken){
      console.error("fail to get access token");
      return res.status(400).send("Fail to get access token");
    }
    
    res.json({
      oauth_code: spapi_oauth_code,
      amazonselling_partner_id: selling_partner_id,
      refresh_token: refreshToken
    }).status(200);
  }
  catch(err){
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

export default router;

