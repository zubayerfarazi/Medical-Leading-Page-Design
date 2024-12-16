import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <div className="flexLogo">
            <img src={logo} alt="Health Logo" />
            <p className="logoHeader">Health</p>
          </div>
          <p className="footerPara">Sahibabad, Ghaziabad, Uttar Pradesh</p>
          <p className="footerNumber">201005</p>
          <p className="footerPhone">+1-887*****78787</p>
          <p className="footerEmail">info@demohelp.com</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Pinterest">
              <FaPinterest />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-section">
            <p>Quick Links</p>
            <ul>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">About Us</a>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">Our Pricing</a>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">Our Gallery</a>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">Appointment</a>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="link-section">
            <p>Department</p>
            <ul>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">Orthology</a>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">Neurology</a>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">Dental Care</a>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">Opthalmology</a>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">Cardiology</a>
              </li>
            </ul>
          </div>

          <div className="link-section">
            <p>Useful Links</p>
            <ul>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">About Us</a>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">Our Blog</a>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">Our Gallery</a>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">Appointment</a>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 Health.com. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
