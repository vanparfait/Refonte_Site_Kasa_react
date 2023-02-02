import React from "react";
import "../styles/Banner.css";

const Banner = ({ title }) => {
  return (
    <div className="Section1">
      <h1> {title} </h1>
      <div className="Mask">
        {/* <div className="background"></div> */}
        {/* <div className="img"></div> */}
        <div className="background2"></div>
      </div>
    </div>
  );
};

export default Banner;
