import React from "react";
import "../styles/Rectangle.css";

const Rectangle = ({ title }) => {
  return (
    <div className="rectangle">
      <span className="cozy">{title}</span>
    </div>
  );
};

export default Rectangle;
