import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AmazonCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const selling_partner_id = queryParams.get('selling_partner_id');
    const spapi_oauth_code = queryParams.get('spapi_oauth_code');
    const state = queryParams.get('state');

    // Log the query parameters for debugging
    console.log('selling_partner_id:', selling_partner_id);
    console.log('spapi_oauth_code:', spapi_oauth_code);
    console.log('state:', state);

    // Send request to backend to get refresh token
    const url = `http://localhost:4000/auth/amznOuth/callback?spapi_oauth_code=${spapi_oauth_code}&state=${state}&selling_partner_id=${selling_partner_id}`;
    console.log(url);

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/auth/amznOuth/handleCallback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        
        // Log the received data for debugging
        console.log('Received data:', data);

        if (data.amazon_selling_partner_id && data.refresh_token) {
          // Log the refresh token before redirecting
          console.log('Refresh token:', data.refresh_token);
          
          // Redirect to dashboard with state
          navigate('/dashboard', { state: { amazon_selling_partner_id: data.amazon_selling_partner_id, refresh_token: data.refresh_token } });
        } else {
          console.error('Failed to get Amazon tokens');
          navigate('/error');  // Assuming you have an error page
        }
      } catch (error) {
        console.error('Error fetching Amazon tokens:', error);
        navigate('/error');  // Assuming you have an error page
      }
    };

    fetchData();
  }, [location.search, navigate]);

  return (
    <div>
      Processing your Amazon Credentials...
    </div>
  );
};

export default AmazonCallback;
