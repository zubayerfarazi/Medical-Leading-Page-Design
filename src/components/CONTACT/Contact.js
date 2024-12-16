import React from "react";

import "./Contact.css";
import contactImage from "../../assets/contactImg.png";
import ContentHeader from "../CONTENTHEADER/ContentHeader";

const Contact = () => {
  return (
    <div className="contactSection">
      {/* logo flex */}
      <ContentHeader title="Contact Us" />
      {/* logo flex */}

      <p className="contactHeading">Get a Quote Today</p>
      <p className="contactPara">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>

      <div className="formFlex">
        {/* Left */}
        <img src={contactImage} alt="Contact" className="contactImage" />
        {/* Left */}

        {/* Right */}
        <div className="formDesign">
          <form action="">
            <div className="formRow">
              <div className="formGroup">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="First name" />
              </div>
              <div className="formGroup">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Last name" />
              </div>
            </div>

            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="emailInput"
                id="email"
                placeholder="you@company.com"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="phone">Phone Number</label>
              <div className="phoneInput">
                <select
                  id="countryCode"
                  name="countryCode"
                  className="countryCode"
                >
                  <option value="+1">(US) +1</option>
                  <option value="+44">(UK) +44</option>
                  <option value="+91">(India) +91</option>
                  <option value="+61">(Australia) +61 </option>
                  <option value="+880">(Bangladesh) +880</option>
                  <option value="+971">(UAE) +971</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  className="phoneNumber"
                />
              </div>
            </div>

            <div className="formGroup">
              <label htmlFor="date">Select Date</label>
              <input
                type="date"
                id="date"
                className="dateInput"
                placeholder="December-02-2022"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your message"></textarea>
            </div>

            <button type="submit" className="submitButton">
              Appointment Now
            </button>
          </form>
        </div>
        {/* Right */}
      </div>
    </div>
  );
};

export default Contact;
