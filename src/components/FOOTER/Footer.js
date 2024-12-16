import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
            <button
              onClick={() => openLink("https://www.facebook.com")}
              aria-label="Facebook"
            >
              <FaFacebook className="footerbtn" />
            </button>
            <button
              onClick={() => openLink("https://www.twitter.com")}
              aria-label="Twitter"
            >
              <FaTwitter />
            </button>
            <button
              onClick={() => openLink("https://www.youtube.com")}
              aria-label="YouTube"
            >
              <FaYoutube />
            </button>
            <button
              onClick={() => openLink("https://www.pinterest.com")}
              aria-label="Pinterest"
            >
              <FaPinterest />
            </button>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-section">
            <p>Quick Links</p>
            <ul>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="About Us">
                  About Us
                </p>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="Our Pricing">
                  Our Pricing
                </p>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="Our Gallery">
                  Our Gallery
                </p>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="Appointment">
                  Appointment
                </p>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="Privacy Policy">
                  Privacy Policy
                </p>
              </li>
            </ul>
          </div>

          <div className="link-section">
            <p>Department</p>
            <ul>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="Orthology">
                  Orthology
                </p>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="Neurology">
                  Neurology
                </p>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="Dental Care">
                  Dental Care
                </p>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="Opthalmology">
                  Opthalmology
                </p>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="Cardiology">
                  Cardiology
                </p>
              </li>
            </ul>
          </div>

          <div className="link-section">
            <p>Useful Links</p>
            <ul>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="About Us">
                  About Us
                </p>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="Our Blog">
                  Our Blog
                </p>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="Our Gallery">
                  Our Gallery
                </p>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="Appointment">
                  Appointment
                </p>
              </li>
              <li>
                <MdOutlineKeyboardArrowRight className="arrowIcon" />
                <p onClick={() => openLink("#")} aria-label="Privacy Policy">
                  Privacy Policy
                </p>
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
