import React from "react";
import main from "../assets/main.jpg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <p>© 2020 Kasa. All rights reserved</p>
      <img src={main} alt="KSA" />
    </div>
  );
};

export default Footer;
