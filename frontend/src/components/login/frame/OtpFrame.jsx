import { TextField } from "@mui/material";
import "./OtpFrame.css";
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { API_BASE_URL } from '../../../config'; // Correct import path

export default function OtpFrame({ className = "" }) {
  const [otp, setOtp] = useState('');
  const location = useLocation();
  const email = location.state?.email;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch(`${API_BASE_URL}/auth/email/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ otp })
    });

    const result = await response.json();
    if (response.ok) {
      if (result.isNewUser) {
        navigate('/name', { state: { email } });
      } else {
        navigate('/dashboard', { state: { email } });
      }
    } else {
      alert(result.message);
    }
  };
  
  const formatEmail = (email) => {
    const [username, domain] = email.split('@');
    const firstPart = username.substring(0, 4);
    return `${firstPart}...@${domain}`;
  };
  const displayEmail = email ? formatEmail(email) : '';

  return (
    <div className={`main ${className}`}>
      <div className="wrapper-image">
        <img className="image-icon" loading="lazy" alt="" src="/image.svg" />
      </div>
      <img className="image-icon1" loading="lazy" alt="" src="/image-1.svg" />
      <div className="backgroundshadow">
        <form onSubmit={handleSubmit}>
          <div className="heading-4-verify-otp-parent">
            <h3 className="heading-4">Verify OTP 🔒</h3>
            <div className="sent-to-abcgmailcom text-primary">
              Sent to {displayEmail}
            </div>
            <TextField
              className="input"
              placeholder="Enter your OTP"
              value={otp}
              variant="outlined"
              onChange={(e) => setOtp(e.target.value)}
              required
              sx={{
                "& fieldset": { borderColor: "#d9dee3" },
                "& .MuiInputBase-root": {
                  height: "39px",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  fontSize: "15px",
                },
                "& .MuiInputBase-input": { color: "#b4bdc6" },
              }}
            />
            <button className="otp-btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
