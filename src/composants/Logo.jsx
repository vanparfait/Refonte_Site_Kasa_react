import React from "react";
import Vector from "../assets/Vector.png";
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector3.png";
import vector from "../assets/vector.svg";
import "../styles/Logo.css";
const Logo = () => {
  return (
    <div className="logo">
      <img src={Vector} alt="" />
      <img src={vector} alt="" />
      <img src={Vector2} alt="" />
      <img src={Vector3} alt="" />
    </div>
  );
};

export default Logo;
