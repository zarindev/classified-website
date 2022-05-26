import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DehazeIcon from '@material-ui/icons/Dehaze';
import LineWeightIcon from '@material-ui/icons/LineWeight';


import "./Navbar.css";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="main-nav">
      <div className="category-btn">
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className="icon-button"
        >
          <DehazeIcon className="icon-style"/> Categories
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div className=" topnav" id="myTopnav">
        <ul className="nav-menus menu-btns">
          <li className="nav-style">HOME</li>
          <li className="nav-style">ABOUT US</li>
          <li className="nav-style">ALL CATEGORIES</li>
          <li className="nav-style">BLOG</li>
          <li className="nav-style">PAGES</li>
          <li className="nav-style">CONTACT US</li>
        </ul>
        <div className="mobile-menu-btn"><LineWeightIcon /></div>
        
      </div>
      
    </div>
    <ul className="">
          <li className="">HOME</li>
          <li className="">ABOUT US</li>
          <li className="">ALL CATEGORIES</li>
          <li className="">BLOG</li>
          <li className="">PAGES</li>
          <li className="">CONTACT US</li>
        </ul>
    </div>
  );
};

export default Navbar;
