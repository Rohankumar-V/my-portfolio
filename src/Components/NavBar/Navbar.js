import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
    <nav className="nav-wrapper">
      <div className="nav-container">
        <img className="logo" src="./assets/images/portfolio.png" alt="" />
        <ul>
          <li>
            <a className="menu-item" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="menu-item" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="menu-item" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="menu-item" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <button class="menu-btn" onClick={toggleMenu}>
        {openMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar; 
