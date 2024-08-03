import express from 'express';
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();

const redirectUrl = "http://localhost:4000/auth/amznOauth/redirect";
const appID = "amzn1.sp.solution.591b8b7e-4d05-44ba-9259-8e4fb0a4669d";

router.get('/', (req, res) => {
  console.log('Oauth');
  const oauthUrl = `https://sellercentral.amazon.com/apps/authorize/consent?application_id=${appID}&state=1234509876&version=beta`;
  res.redirect(oauthUrl); // Redirect to Amazon's OAuth page
});

router.post('/callback', (req, res) => {
  console.log('amzn auth callbacl', req.query);
  const {spapi_oauth_code,state,selling_partner_id} = req.query;
  const {refresh_token, access_token} = await axios.post(`https://api.amazon.com/auth/o2/token?grant_type=authorization_code&code=${spapi_oauth_code}&redirect_uri=recotail.ai&client_id=${}&client_secret=${}`)
});

export default router;






















router;