import React from "react";
import Banner from "../composants/Banner";
import Gallery from "../composants/Gallery";
import Header from "../composants/Header";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="Body">
        <Banner />
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
