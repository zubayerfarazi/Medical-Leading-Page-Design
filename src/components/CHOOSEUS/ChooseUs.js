import React from "react";
import "./ChooseUs.css";

import chooseIcon from "../../assets/logo.png";
import chooseImage from "../../assets/choseDoctor.png";

const ChooseUs = () => {
  return (
    <div className="chooseUsSection">
      {/* left */}
      <div className="chooseLeftDiv">
        {/* icon Flex */}
        <div className="chooseIconFlex">
          <img src={chooseIcon} alt="Logo" />
          <p>Why Choose Us</p>
        </div>
        {/* icon Flex */}

        {/* text */}
        <p className="chooseHeader">
          We Remain Continuously Available for Your Health Services
        </p>
        {/* text */}

        {/* number */}
        <div className="chooseMainText">
          {/* 1st */}
          <div className="chooseMainTextDiv">
            <p className="number">01</p>
            <div className="chooseMainTextPara">
              <p className="chooseMainTextFirstPara">
                Compassionate and Expert Care
              </p>
              <p className="chooseMainTextSecondPara">
                Our team of dedicated healthcare professionals combines years of
                experience with a genuine commitment to providing.
              </p>
            </div>
          </div>
          {/* 1st */}

          {/* 2nd */}
          <div className="chooseMainTextDiv">
            <p className="number">02</p>
            <div className="chooseMainTextPara">
              <p className="chooseMainTextFirstPara">
                Patient-Centered Approach
              </p>
              <p className="chooseMainTextSecondPara">
                Your health and well-being are our top priorities. We take the
                time to listen to your concerns, answer your questions.
              </p>
            </div>
          </div>
          {/* 2nd */}

          {/* 3rd */}
          <div className="chooseMainTextDiv">
            <p className="number">03</p>
            <div className="chooseMainTextPara">
              <p className="chooseMainTextFirstPara">
                Personalized Treatment Plans
              </p>
              <p className="chooseMainTextSecondPara">
                We understand that every patient is unique, and their healthcare
                needs may vary. That's why we create individualized treatment.
              </p>
            </div>
          </div>
          {/* 3rd */}
        </div>
        {/* number */}
      </div>
      {/* left */}

      {/* right */}
      <div className="chooseImgDiv">
        <img src={chooseImage} alt="Doctor" className="chooseImg" />
      </div>
      {/* right */}
    </div>
  );
};

export default ChooseUs;
