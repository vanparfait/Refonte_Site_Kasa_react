import React from "react";
import { useState } from "react";
import "../styles/ChildCollapse.css";
import starregular from "../assets/starregular.svg";

const ChildCollapse = ({ label, response }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <div className="childCollapse">
        <div className="dropdownlarge">
          <div className="label"> {label} </div>

          <img
            src={starregular}
            onClick={toogle}
            className="icone"
            alt="star"
          />
        </div>
        {isOpen && (
          <div className="toogle">
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChildCollapse;
