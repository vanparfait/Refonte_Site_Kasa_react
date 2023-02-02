import React from "react";
import Body from "../styles/Body";

import "../styles/Logement.css";
import Rectangle from "../styles/Rectangle";

const Logement = () => {
  return (
    <div className="logement">
      <div className="TAG">
        <Body />
        <Rectangle title="Cozy" />
        <Rectangle title="Canal" />
        <Rectangle title="Paris 10" />
      </div>
      <div className="alexandreDumas">hhhhh</div>
    </div>
  );
};

export default Logement;
