import React from "react";
import { useState } from "react";
import "../styles/Collapse.css";
import starregular from "../assets/starregular.svg";
import Banner from "./Banner";

const Collapse = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <div className="collapse">
        <div className="dropdownlarge">
          <div className="respect">Respect</div>

          <img
            src={starregular}
            onClick={() => setIsOpen(true)}
            className="icone"
            alt="star"
          />
          {isOpen && <div className="toogle1">toogle1</div>}
        </div>
        <div className="dropdown-close-response">
          <div className="responsabilite">Responsabilite</div>

          <img
            src={starregular}
            onClick={() => setIsOpen(true)}
            className="icone"
            alt="star"
          />
          {isOpen && (
            <div className="toogle4">
              <p>
                Gardez en tête que le Collapse doit avoir deux états différents
                : il peut être ouvert ou fermé. ● Pensez à bien utiliser les
                propriétés des composants pour passer les données voulues.
              </p>
            </div>
          )}
        </div>
        <div className="dropdown-close-service">
          <div className="service">Service</div>

          <img src={starregular} className="icone" alt="ttt" />
        </div>
        <div className="dropdownlarge-close-fiable">
          <div className="fiabilite">Fiabilite</div>

          <img src={starregular} className="icone" alt="ttt" />
        </div>
      </div>
      {/* <div className="section">
        <div className="MaskGroup">
          <div className="kalen1"></div>
          <div className="background"></div>
        </div>
      </div> */}
      <Banner />
    </div>
  );
};

export default Collapse;
