import React from "react";
import { useState } from "react";
import "../styles/ChildCollapse.css";
import chevrondownsolid from "../assets/chevrondownsolid.svg";
import chevronupsolid from "../assets/chevronupsolid.svg";

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

          <span onClick={toogle} className="icone">
            {isOpen ? (
              <img src={chevronupsolid} alt="star" />
            ) : (
              <img src={chevrondownsolid} alt="star" />
            )}
          </span>
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
