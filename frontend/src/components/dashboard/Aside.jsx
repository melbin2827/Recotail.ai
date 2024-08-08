import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Collapse } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import FbaReimbursementIcon from '@mui/icons-material/Payment';
import FbaFulfillmentIcon from '@mui/icons-material/Category';
import FbaInventoryIcon from '@mui/icons-material/Inventory';
import FbaInboundIcon from '@mui/icons-material/MoveToInbox';
// import FbaRemovalsIcon from '@mui/icons-material/RemoveCircleOutline';
import PaymentIcon from '@mui/icons-material/Payment';
import BillingIcon from '@mui/icons-material/AccountBalanceWallet';
// import CardsIcon from '@mui/icons-material/CreditCard';
import IconsIcon from '@mui/icons-material/AllInbox';
import ArticleIcon from '@mui/icons-material/Article';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import MobiledataOffIcon from '@mui/icons-material/MobiledataOff';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import AddIcon from '@mui/icons-material/Add';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
// import LayoutsIcon from '@mui/icons-material/WorkOutline';
// import AccountSettingsIcon from '@mui/icons-material/Settings';
// import AuthenticationsIcon from '@mui/icons-material/Lock';
// import MiscIcon from '@mui/icons-material/MoreHoriz';
// import BoxiconsIcon from '@mui/icons-material/Extension';
import './Aside.css'; // Import the CSS file
// import { Article } from '@mui/icons-material';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" className="sidebar">
      <div className="sidebar-header">
        <img src="./link--svg.svg" alt="Logo" className="logo" />
      </div>
      <List className='all-menu'>
        <ListItem button component={Link} to="/dashboard" className='active'>
          <ListItemIcon className='link-icon'><DashboardIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={handleClick} className='menu-link'>
          <ListItemIcon className='link-icon'><BookmarkRemoveIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="FBA Reimbursement" />
        </ListItem>
        {/* <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/fba-reimbursement/overview">
              <ListItemText primary="Overview" className="submenu link-text" />
            </ListItem>
            <ListItem button component={Link} to="/fba-reimbursement/claims">
              <ListItemText primary="Claims" className="submenu link-text" />
            </ListItem>
            <ListItem button component={Link} to="/fba-reimbursement/appeals">
              <ListItemText primary="Appeals" className="submenu link-text" />
            </ListItem>
          </List>
        </Collapse> */}
        <ListItem button component={Link} to="/fba-fulfillment" className='menu-link'>
          <ListItemIcon className='link-icon'><FbaFulfillmentIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="FBA Fulfillment" />
        </ListItem>
        <ListItem button component={Link} to="/ledger-detail" className='menu-link'>
          <ListItemIcon className='link-icon'><ArticleIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="Ledger Detail" />
        </ListItem>
        <ListItem button component={Link} to="/fba-inventory" className='menu-link'>
          <ListItemIcon><FbaInventoryIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="FBA Inventory" />
        </ListItem>
        <ListItem button component={Link} to="/fba-fulfillment-inbound" className='menu-link'>
          <ListItemIcon><FbaInboundIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="FBA Fulfillment Inbound" />
        </ListItem>
        <ListItem button component={Link} to="/fba-fulfillment-removal-shipment" className='menu-link'>
          <ListItemIcon><RemoveShoppingCartIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="FBA Fulfillment Removal Shipment" />
        </ListItem>
        <ListItem button component={Link} to="/fba-fulfillment-removal-order" className='menu-link'>
          <ListItemIcon><MobiledataOffIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="FBA Fulfillment Removal Order" />
        </ListItem>
        <ListItem button component={Link} to="/fba-lost-damaged-customer-returns" className='menu-link'>
          <ListItemIcon><PlaylistRemoveIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="FBA Lost & Damaged Customer Returns" />
        </ListItem>
        <ListItem button component={Link} to="/fba-inbound-shipments" className='menu-link'>
          <ListItemIcon><IconsIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="FBA Inbound Shipments" />
        </ListItem>
        <ListItem button component={Link} to="/fba-removals" className='menu-link'>
          <ListItemIcon><RemoveDoneIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="FBA Removals" />
        </ListItem>
        <ListItem button component={Link} to="/fba-weight-dimensions" className='menu-link'>
          <ListItemIcon><MonitorWeightIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="FBA Weight Dimensions" />
        </ListItem>
        <ListItem button component={Link} to="/add-store" className='menu-link'>
          <ListItemIcon><AddIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="Add Store" />
        </ListItem>
        <ListItem button component={Link} to="/payment" className='menu-link'>
          <ListItemIcon><PaymentIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="Payment" />
        </ListItem>
        <ListItem button component={Link} to="/billing" className='menu-link'>
          <ListItemIcon><BillingIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="Billing" />
        </ListItem>
        {/* <ListItem button component={Link} to="/cards" className='menu-link'>
          <ListItemIcon><CardsIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="Cards" />
        </ListItem>
        
        <ListItem button component={Link} to="/layouts" className='menu-link'>
          <ListItemIcon><LayoutsIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="Layouts" />
        </ListItem>
        <ListItem button component={Link} to="/account-settings" className='menu-link'>
          <ListItemIcon><AccountSettingsIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="Account Settings" />
        </ListItem>
        <ListItem button component={Link} to="/authentications" className='menu-link'>
          <ListItemIcon><AuthenticationsIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="Authentications" />
        </ListItem>
        <ListItem button component={Link} to="/misc" className='menu-link'>
          <ListItemIcon><MiscIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="Misc" />
        </ListItem>
        <ListItem button component={Link} to="/boxicons" className='menu-link'>
          <ListItemIcon><BoxiconsIcon /></ListItemIcon>
          <ListItemText className='link-text' primary="Boxicons" />
        </ListItem> */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
