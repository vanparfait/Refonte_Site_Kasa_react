import React from "react";

import Header from "../composants/Header";
//import Collapse from "../composants/Collapse";

import "../styles/About.css";
import Collapse1 from "../composants/Collapse1";
import Banner from "../composants/Banner";

const About = () => (
  <div className="About">
    <Header />
    <Banner />
    {/* <Collapse /> */}
    <Collapse1 label="La logique de routage fonctionnelle." />
  </div>
);

export default About;
