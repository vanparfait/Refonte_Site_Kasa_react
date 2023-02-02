import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="Header">
      <div className="LOGO">
        <Logo />
      </div>

      <nav className="Nav">
        <NavLink exact to="/" className="lien1" activeClassName="active">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className="lien2" activeClassName="active">
          A Propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
