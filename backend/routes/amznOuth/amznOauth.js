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
const stateToken = crypto.randomUUID();

router.get('/', (req, res) => {
  console.log('Oauth');
  const oauthUrl = `https://sellercentral.amazon.com/apps/authorize/consent?application_id=${appID}&state=${stateToken}&version=beta`;
  res.redirect(oauthUrl); // Redirect to Amazon's OAuth page
});

router.post('/callback', async(req, res) => {
  console.log('amzn auth callbacl', req.query);
  try{
    const {spapiOauthCode,state,sellingPartnerId} = req.query;
    if(state != stateToken){
      console.error("state token does not match");
      return res.status(400).send("state token does not match");
    }
    const {refreshToken, accessToken} = await axios.post(`https://api.amazon.com/auth/o2/token?grant_type=authorization_code&code=${spapiOauthCode}&redirect_uri=${redirectUrl}&client_id=${clientId}&client_secret=${clientSecret}`);
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'x-amz-access-token': accessToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const shopInfo = await axios.get(`sellingpartnerapi-na.amazon.com/sellers/v1/marketplaceParticipations`,{headers});
    console.log(shopInfo.data);
    res.send(shopInfo.data);
  }
  catch(err){
    console.log(err);
  }
});

export default router;






















router;