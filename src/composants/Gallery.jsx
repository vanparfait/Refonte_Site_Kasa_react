import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/Gallery.css";
import Card from "./Card";

const Gallery = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/logements")
      .then((res) => res.json())
      .then((data1) => setData(data1));

    console.log(data);
  }, []);

  return (
    <div className="gallery">
      <div className="background"></div>
      <h1>Bienvenue dans ma galerie</h1>
      {data.map((logement) => (
        <Card logement={logement} key={logement.id} />
      ))}
    </div>
  );
};

export default Gallery;
