import React from "react";

import "./Hero.css";
import heroIcon from "../../assets/logo.png";
import heroImage from "../../assets/hero.png";
import Search from "../SERACH/Search";

const Hero = () => {
  return (
    <div>
      <div className="heroSection">
        {/* left */}
        <div className="leftHeroSection">
          <div className="iconFlex">
            <img src={heroIcon} alt="Hero icon" />
            <p>24/7 Emergency service</p>
          </div>
          <div className="heroMain">
            <p>
              Caring for <span className="heroHealth">Health</span>
            </p>
            <p>Caring for You</p>
          </div>
          <div className="heroPara">
            <p>
              A brief statement outlining the purpose and mission of the clinic.
              This can include
            </p>
            <p>the commitment to patient care, community health.</p>
          </div>
          <div className="heroBtn">
            <button className="discoverBtn">Discover More</button>
            <button className="serviceBtn">See All Services</button>
          </div>
        </div>
        {/* left */}

        {/* right */}
        <div className="imageContainer">
          <img src={heroImage} alt="Hero" className="heroImg" />
        </div>
        {/* right */}
      </div>
      <Search></Search>
    </div>
  );
};

export default Hero;
