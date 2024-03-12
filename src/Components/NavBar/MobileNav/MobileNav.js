import React from "react";
import "./MobileNav.css";
const MobileNav = ({isOpen,toggleMenu}) => {
    return (
    <>
      <div  className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}>
      <div className="mobile-menu-container">
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
      </div>
      </div>
        </>
    )
}

export  default MobileNav; 