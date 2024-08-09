import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip, Avatar, Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Aside from "./Aside";
import { API_BASE_URL } from '../../config'; 
import CodeInput from "./CodeInput";
import "./Dashboard.css";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function Dashboard() {
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const email = location.state?.email;
  const amazon_selling_partner_id = location.state?.amazon_selling_partner_id || '';
  const refresh_token = location.state?.refresh_token || '';

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
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleMenuClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>{userName.charAt(0).toUpperCase()}</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleMenuClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
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
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                  Your Amazon Credentials have been verified
                </Alert>
                <div className="o-auth-code-wrapper">
                  <div className="o-auth-code">
                    <div className="code-label">
                      <CodeInput labelAMAZONOAUTHCODE="Amazon Shop Name*" enterAmazonOauthCPlacehol=" Enter Amazon Shop Name"/>
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
