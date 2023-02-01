import React from "react";

import "../styles/Footer.css";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="Footer">
      <p>© 2020 Kasa. All rights reserved</p>
      <div className="logo">
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
