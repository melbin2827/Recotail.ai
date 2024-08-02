import { Button } from "@mui/material";
import Aside from "./dashboard/Aside";
import CodeInput from "./dashboard/CodeInput";
import RefreshToken from "./dashboard/RefreshToken";
import "./Dashboard.css";

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';



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

  const handleAmazonVerification = () => {
    // Directly change window location to the backend OAuth route
    window.location.href = 'http://localhost:4000/auth/amznOuth';
  };
  
  return (

    <div className="add-store">
      <Aside />
      
      
      <section className="nav-wrapper-wrapper">
        <div className="nav-wrapper">
          <header className="nav">
            <div className="list-item-link">
              <img className="png-icon" loading="lazy" alt="" src="/1png@2x.png"/>
              <div className="backgroundshadow-dash" />
            </div>
          </header>
          <div className="home-store-link-parent">
            <div className="home-store-link">
              <a className="item-link">Home</a>
              <div className="home-store-items">/</div>
              <a className="add-store1">Add Store</a>
            </div>
          <div class="amazon-form">  
            <form className="backgroundshadowdash1">
              <div className="heading-wrapper">
                <h3 className="heading-5">Amazon Account Configuration</h3>
              </div>
              <div className="config-form">
                <div className="verify-instruction-wrapper">
                  <div className="verify-instruction">
                    <div className="please-click-here-to-verify-yo-wrapper">
                      <div className="please-click-here">
                        * Please click here to verify your account.
                      </div>
                    </div>
                    <Button
                      className="button"
                      disableElevation
                      variant="contained"
                      onClick={handleAmazonVerification}
                      sx={{
                        textTransform: "none",
                        color: "#530bae",
                        fontSize: "15",
                        background: "#e7e7ff",
                        border: "#e7e7ff solid 1px",
                        borderRadius: "6px",
                        "&:hover": { background: "#e7e7ff" },
                        width: 114.4,
                        height: 38.5,
                      }}
                    >
                      Click Here
                    </Button>
                  </div>
                </div>
                <div className="separator" />
              </div>
              <div className="o-auth-code-wrapper">
                <div className="o-auth-code">
                  <div className="code-label">
                    <CodeInput
                      labelAMAZONOAUTHCODE="AMAZON OAUTH CODE"
                      enterAmazonOauthCPlacehol=" Enter Amazon Oauth Code"
                    />
                    <RefreshToken
                      labelAMAZONREFRESHTOKEN="AMAZON REFRESH TOKEN"
                      containerPlaceholder="Enter Amazon Refresh Token"
                    />
                  </div>
                  <div className="code-label">
                    <CodeInput
                      propGap="0.593rem"
                      labelAMAZONOAUTHCODE="AMAZON SELLING PARTNER ID"
                      enterAmazonOauthCPlacehol="Enter Amazon Selling Partner Id"
                      propWidth="13.938rem"
                    />
                    <RefreshToken
                      propHeight="4.056rem"
                      propPadding="unset"
                      labelAMAZONREFRESHTOKEN="AMAZON SHOP NAME"
                      containerPlaceholder="Enter Amazon Shop Name"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};


