import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import "./Search.css";

const Search = () => {
  return (
    <div className="centerContainer">
      {/* Input Fields */}
      <div className="allInputFields">
        <div className="inputField">
          <IoSearchSharp className="inputIcon" />
          <input type="text" placeholder="Ex. Doctor, Hospital" />
        </div>

        <div className="inputField">
          <IoSearchSharp className="inputIcon" />
          <input type="text" placeholder="Ex. Surgeon, Cardiologist" />
        </div>

        <div className="inputField">
          <CiLocationOn className="inputIcon" />
          <input type="text" placeholder="Set your location" />
        </div>

        <div className="inputField searchButton">
          <IoSearchSharp className="inputIcon" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
