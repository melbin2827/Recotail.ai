import express from 'express';
const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import crypto from 'crypto';

const appID = process.env.APPLICATION_ID;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

let stateTokenGlobal;

router.get('/', (req, res) => {
  const stateToken = crypto.randomUUID();
  stateTokenGlobal = stateToken;  // Store state token in a global variable
  console.log('Generated stateToken:', stateToken);  // Log for debugging
  const oauthUrl = `https://sellercentral.amazon.com/apps/authorize/consent?application_id=${appID}&state=${stateToken}&version=beta`;
  res.redirect(oauthUrl);  // Redirect to Amazon's OAuth page
});

router.post('/callback', async (req, res) => {
  try {
    const { url } = req.body;
    const parsedUrl = new URL(url);
    const spapi_oauth_code = parsedUrl.searchParams.get('spapi_oauth_code');
    const state = parsedUrl.searchParams.get('state');
    const selling_partner_id = parsedUrl.searchParams.get('selling_partner_id');

    console.log('Received state:', state);  // Log for debugging
    console.log('Global stateToken:', stateTokenGlobal);  // Log for debugging

    if (state !== stateTokenGlobal) {
      console.error('State token does not match');
      return res.status(400).json({ error: 'State token does not match' });
    }

    // Prepare data for the token request
    const data = new URLSearchParams({
      grant_type: 'authorization_code',
      code: spapi_oauth_code,
      client_id: clientId,
      client_secret: clientSecret,
    });

    // Get refresh token using spapi_oauth_code
    const response = await axios.post('https://api.amazon.com/auth/o2/token', data.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { refresh_token } = response.data;
    if (!refresh_token) {
      console.error('Failed to get refresh token');
      return res.status(400).json({ error: 'Failed to get refresh token' });
    }

    // Clear the global state token (optional)
    stateTokenGlobal = null;

    // Send the tokens back to the frontend
    console.log(selling_partner_id);
    console.log(refresh_token);
    res.json({ amazon_selling_partner_id: selling_partner_id, refresh_token });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
