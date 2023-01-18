import React from "react";
import "../styles/Card.css";
const Card = ({ logement }) => {
  return (
    <div className="card">
      <div className="card1">
        <div className="title">{logement.title} </div>
        <div className="rectangle"></div>
        <div className="img">
          <img src={logement.picture} alt="mer" />{" "}
        </div>
      </div>
      <div className="card2">
        <div className="title">{logement.title} </div>
        <div className="rectangle"></div>
        <div className="img">
          <img src={logement.picture} alt="mer" />{" "}
        </div>
      </div>
      <div className="card3">
        <div className="title"> {logement.title}</div>
        <div className="rectangle"></div>
        <div className="img">
          <img src={logement.picture} alt="mer" />{" "}
        </div>
      </div>
      <div className="card4">
        <div className="title">{logement.title} </div>
        <div className="rectangle"></div>
        <div className="img">
          <img src={logement.picture} alt="mer" />{" "}
        </div>
      </div>
      <div className="card5">
        <div className="title">{logement.title} </div>
        <div className="rectangle"></div>
        <div className="img">
          <img src={logement.picture} alt="mer" />{" "}
        </div>
      </div>
      <div className="card6">
        <div className="title">{logement.title} </div>
        <div className="rectangle"></div>
        <div className="img">
          <img src={logement.picture} alt="mer" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
