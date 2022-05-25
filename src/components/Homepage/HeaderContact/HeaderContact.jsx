import React from 'react';
import brandLogo from '../../../assets/images/logo-strobe.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button, Menu, MenuItem } from '@material-ui/core';
import './HeaderContact.css';

function HeaderContact() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className='contact-nav-container'>
        <div className='brand-logo'>
            <img src={brandLogo} alt="" className='brand-img'/>
        </div>
        <nav className='contact-navs'>
            <ul className='contact-info-nav'>
                <li className='para-nav'><p style={{"whiteSpace": "nowrap"}}>FOLLOW US:</p></li>
                <li className='icon'><FacebookIcon/></li>
                <li className='icon'><TwitterIcon/></li>
                <li className='icon'><InstagramIcon/></li>
                <li className='icon'><YouTubeIcon/></li>
                <li className='icon'><LinkedInIcon/></li>
                <li className='icon'><PinterestIcon/></li>
            </ul>
            <div className='vertical-line'></div>
            <ul className='contact-reg-nav'>
              <li className='icon-reg'>Login</li>
              <li className='icon-reg'>Register</li>
              <li className='icon-reg'>Submit Ad</li>
              <li className='dropdown-menu'><Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
  <AccountCircleIcon className='user-dropdown'/>
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose}>My account</MenuItem>
  <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu></li>
            </ul>
        </nav>
    </div>
    {/* For mobile and tablet device */}
    <div >
    
    </div>
    </div>
  )
}

export default HeaderContact;