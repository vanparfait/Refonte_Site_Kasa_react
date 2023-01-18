import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import main from "../assets/main.jpg";

const Header = () => {
  return (
    <div className="Header">
      <img src={main} alt="Le logo KSA" className="LOGO" />
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
