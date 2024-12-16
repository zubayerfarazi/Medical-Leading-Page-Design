import React from "react";

import "./AllService.css";

const AllService = ({ service, explore }) => {
  return (
    <div class="line-with-text">
      <div className="allServicePara">
        <span className="allServiceFirstPara">{service}</span>
        <span
          className="allServiceSecondPara"
          style={{ color: "rgba(0, 73, 144, 1)" }}
        >
          {explore}
        </span>
      </div>
    </div>
  );
};

export default AllService;
