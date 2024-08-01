import express from 'express';
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();

const redirectUrl = "http://localhost:4000/auth/amznOauth/redirect";
const appID = process.env.APPLICATION_ID;

router.get('/', (req, res) => {
  console.log(req.query);
  console.log("amzn Oauth");
  res.redirect(`https://sellercentral.amazon.com/apps/authorize/consent?application_id=${appID}&version=beta&redirect_uri=${redirectUrl}`);
});

router.get('/redirect', (req, res) => {
  console.log(req.query);
  res.send("Amazon OAuth process completed");
});

export default router;






















router;