import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Aside from "./dashboard/Aside";
import CodeInput from "./dashboard/CodeInput";
import RefreshToken from "./dashboard/RefreshToken";
import "./Dashboard.css";

export default function Dashboard() {
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const email = location.state?.email;

  // State for managing the dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:4000/user/${email}`)
        .then(response => response.json())
        .then(data => setUserName(data.name))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [email]);

  const handleAmazonVerification = () => {
    window.location.href = 'http://localhost:4000/auth/amznOuth';
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="add-store">
      <Aside />

      <section className="nav-wrapper-wrapper">
        <div className="nav-wrapper">
          <header className="nav header">
            <div className="list-item-link">
              {/* <img className="png-icon" loading="lazy" alt="" src="/1png@2x.png" />
              <div className="backgroundshadow-dash" /> */}

              {/* Dropdown menu trigger */}
              <IconButton className='profile-icon' edge="end" color="inherit" aria-label="account" onClick={handleMenuClick}>
                <AccountCircleIcon />
              </IconButton>

              {/* Dropdown Menu */}
              <Menu id="account-menu" anchorEl={anchorEl} open={open} onClose={handleMenuClose} MenuListProps={{
                  'aria-labelledby': 'account-button',
                }}
              >
                <MenuItem class="p-link" onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem class="p-link" onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem class="p-link" onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </div>
          </header>
          <div className="home-store-link-parent">
            <div className="home-store-link">
              <a className="item-link">Home</a>
              <div className="home-store-items">/</div>
              <a className="add-store1">Add Store</a>
            </div>
            <div className="amazon-form">
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
                      <Button className="button" disableElevation variant="contained" onClick={handleAmazonVerification}
                        sx={{
                          textTransform: "none", color: "#530bae", fontSize: "15", background: "#e7e7ff", border: "#e7e7ff solid 1px", borderRadius: "6px",
                          "&:hover": { background: "#e7e7ff" }, width: 114.4, height: 38.5,
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
                      <CodeInput labelAMAZONOAUTHCODE="AMAZON OAUTH CODE" enterAmazonOauthCPlacehol=" Enter Amazon Oauth Code"/>
                      <RefreshToken labelAMAZONREFRESHTOKEN="AMAZON REFRESH TOKEN" containerPlaceholder="Enter Amazon Refresh Token"/>
                    </div>
                    <div className="code-label">
                      <CodeInput propGap="0.593rem" labelAMAZONOAUTHCODE="AMAZON SELLING PARTNER ID" enterAmazonOauthCPlacehol="Enter Amazon Selling Partner Id" propWidth="13.938rem"/>
                      <RefreshToken propHeight="4.056rem" propPadding="unset" labelAMAZONREFRESHTOKEN="AMAZON SHOP NAME" containerPlaceholder="Enter Amazon Shop Name"/>
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
}
