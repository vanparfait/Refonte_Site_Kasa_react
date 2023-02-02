import React from "react";
import Banner from "../composants/Banner";
import Gallery from "../composants/Gallery";
import Header from "../composants/Header";
import "../styles/Home.css";
import Logement from "./Logement";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="Body">
        <Banner title="Chez vous, partout et ailleurs" />
        <Gallery />
      </div>
      {/* <Logement /> */}
    </div>
  );
};

export default Home;
