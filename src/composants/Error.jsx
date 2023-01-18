import React from "react";
import Header from "./Header";
import "../styles/Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="Error">
      <Link to="/" className="retour">
        Retourner sur la page d’accueil
      </Link>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <div className="nombre">
        <h1>400</h1>
      </div>
      <Header className="t" />
    </div>
  );
};

export default Error;
