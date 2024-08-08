import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Aside from "./Aside";
import { API_BASE_URL } from '../../config'; 
import CodeInput from "./CodeInput";
// import RefreshToken from "./dashboard/RefreshToken";
import "./Dashboard.css";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function Dashboard() {
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const email = location.state?.email;
  const amazon_selling_partner_id = location.state?.amazon_selling_partner_id || '';
  const refresh_token = location.state?.refresh_token || '';

  // State for managing the dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (email) {
      fetch(`${API_BASE_URL}/user/${email}`)
        .then(response => response.json())
        .then(data => setUserName(data.name))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [email]);

  const handleAmazonVerification = () => {
    window.location.href = `${API_BASE_URL}/auth/amznOuth`;
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // State for the selected option in the dropdown
  const [selectedOption, setSelectedOption] = useState('DEFAULT');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="add-store">
      <Aside />

      <section className="nav-wrapper-wrapper">
        <div className="nav-wrapper">
          <header className="nav header">
            <div className="list-item-link">
              <IconButton className='profile-icon' edge="end" color="inherit" aria-label="account" onClick={handleMenuClick}>
                <AccountCircleIcon />
              </IconButton>

              {/* Dropdown Menu */}
              <Menu id="account-menu" anchorEl={anchorEl} open={open} onClose={handleMenuClose} MenuListProps={{
                  'aria-labelledby': 'account-button',
                }}
              >
                <MenuItem className="p-link" onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem className="p-link" onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem className="p-link" onClick={handleMenuClose}>Logout</MenuItem>
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
                  <h3 className="heading-5">Amazon Account Configuration <CheckBoxIcon /></h3>
                </div>
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                  Your Amazon Credentials have been verified
                </Alert>
                <div className="o-auth-code-wrapper">
                  <div className="o-auth-code">
                    <div className="code-label">
                      <CodeInput labelAMAZONOAUTHCODE="Amazon Shop Name" enterAmazonOauthCPlacehol=" Enter Amazon Shop Name"/>
                      </div>
                      <div className="code-labl">
                      <label className='label-amazon' htmlFor="vendorSeller" style={{  }}>Vendor/Seller</label>
                      <select id="vendorSeller" className='select-option' value={selectedOption} onChange={handleOptionChange} style={{ width: '100%', padding: '0.5rem' }}>
                        <option value="DEFAULT">Select one</option>
                        <option value="VENDOR">Vendor</option>
                        <option value="SELLER">Seller</option>
                      </select>
                    </div>
                  </div> 
                </div>
                <div className="config-form">
                  <div className="verify-instruction-wrapper">
                    <div className="verify-instruction">
                      <div className="please-click-here-to-verify-yo-wrapper">
                        <div className="please-click-here">
                          * Please click here to verify your account.
                        </div>
                      </div>
                      <Button className="button b1" disableElevation variant="contained" onClick={handleAmazonVerification}
                        sx={{
                          textTransform: "none", color: "#530bae", fontSize: "15", background: "#e7e7ff", border: "#e7e7ff solid 1px", borderRadius: "6px",
                          "&:hover": { background: "#e7e7ff" }, width: 114.4, height: 38.5,
                        }}
                      >
                        Click Here
                      </Button>
                    </div>
                  </div>
                </div>
                {/* <div className="o-auth-code-wrapper">
                  <div className="o-auth-code"> 
                    <div className="code-label">
                    <RefreshToken labelAMAZONREFRESHTOKEN="Amazon Selling Partner Id" containerPlaceholder={amazon_selling_partner_id}/>
                    <RefreshToken propHeight="4.056rem" propPadding="unset" labelAMAZONREFRESHTOKEN="Amazon Refresh Token" containerPlaceholder={refresh_token} />
                    </div>  
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}