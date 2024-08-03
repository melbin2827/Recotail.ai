import {
  TextField,
  Button,
} from "@mui/material";
import "./NameFrame.css";

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { API_BASE_URL } from '../../../config'; // Import the base URL

export default function NameFrame({ className = "" }) {
  const [name, setName] = useState('');
  const location = useLocation();
  const email = location.state?.email;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch(`${API_BASE_URL}/input-name`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name })
    });

    const result = await response.json();
    if (response.ok) {
      navigate('/dashboard', { state: { email } });
    } else {
      alert(result.message);
    }
  };

  return (
    <div className={`image-parent ${className}`}>
      <img className="image-icon2" loading="lazy" alt="" src="/image1.svg" />
      <img className="image-icon3" loading="lazy" alt="" src="/image-11.svg" />
      <div className="backgroundshadow1">
        <img className="container-icon" alt="" src="/container.svg" />
        <form onSubmit={handleSubmit}>
        <div className="frame-parent">
          <div className="heading-4-what-should-we-cal-parent">
            <h3 className="heading-41">Your Company Name</h3>
            <TextField
              className="input1"
              placeholder="Enter your Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          </div>
          <Button
            className="backgroundborder"
            type="submit"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#530bae",
              fontSize: "15",
              background: "#e7e7ff",
              border: "#e7e7ff solid 1px",
              borderRadius: "6px",
              "&:hover": { background: "#e7e7ff" },
              height: 38.5,
            }}
          >
            Continue
          </Button>
        </div>
        </form>
      </div>
    </div>
  );
};
