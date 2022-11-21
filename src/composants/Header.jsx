import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">A Propos</Link>
    </nav>
  );
};

export default Header;
