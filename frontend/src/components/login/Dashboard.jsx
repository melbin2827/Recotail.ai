import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import fetch from 'node-fetch';


export default function Dashboard() {
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:4000/user/${email}`)
        .then(response => response.json())
        .then(data => setUserName(data.name))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [email]);

  const response = await fetch('http://localhost:4000/auth/amznOuth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, recaptchaResponse: value })
  });

  return (
    <div>
      <h1>Welcome to your Dashboard{userName ? `, ${userName}` : '!'}</h1>
      <button onClick={handleAmazonVerification}>Amazon Verification</button>
    </div>
  );
}
