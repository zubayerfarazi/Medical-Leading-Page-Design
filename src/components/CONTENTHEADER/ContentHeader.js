import React from "react";
import "./ContentHeader.css";

import icon from "../../assets/logo.png";
const ContentHeader = ({ title }) => {
  return (
    <div className="flexIcon">
      <img src={icon} alt="icon" />
      <p>{title}</p>
    </div>
  );
};

export default ContentHeader;
