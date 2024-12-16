import React, { useState } from "react";
import "./Header.css";
import logoImage from "../../assets/logo.png";
import { IoSearchSharp, IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="header">
      <div className="logoFlex">
        <img src={logoImage} alt="Logo" />
        <p>Health</p>
      </div>

      <div className={`allNavs ${menuOpen ? "show" : ""}`}>
        <ul className="nav-links">
          <li>Find Doctors</li>
          <li>Hospitals</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>

      <GiHamburgerMenu
        size={24}
        className="hamburger-menu"
        onClick={toggleMenu}
      />

      <div className="navButtons">
        <IoSearchSharp className="searchBtn" />
        <div className="cartContainer">
          <IoCartOutline className="cartBtn" />
          <span className="cartBadge">5</span>
        </div>
        <button className="appointmentBtn">Appointment Now</button>
      </div>
    </nav>
  );
};

export default Header;
