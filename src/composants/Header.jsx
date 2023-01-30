import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="Header">
      <div className="LOGO">
        <Logo />
      </div>

      <nav className="Nav">
        <Link to="/" className="lien1">
          Accueil
        </Link>
        <Link to="/a-propos" className="lien2">
          A Propos
        </Link>
      </nav>
    </div>
  );
};

export default Header;
