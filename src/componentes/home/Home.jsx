import React from "react";
import "./Home.css";
import compuImage from "../../assets/Group_47.svg";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-cuadro">
          <h1 className="nombre">AGUSTIN RACK</h1>
          <h4 className="subtitulo">DESARROLLADOR FULL-STACK</h4>
          <img src={compuImage} alt="compuImage" className="compu" />
        </div>
        <div className="circulos-container">
          <div className="circulo1"></div>
        </div>
        <div className="circulos-container2">
          <div className="circulo2"></div>
        </div>
      </div>
    </div>
  );
}
