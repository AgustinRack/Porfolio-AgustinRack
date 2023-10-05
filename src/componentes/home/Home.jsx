import React from "react";
import "./Home.css";
import compuImage from "../../assets/agustinEspalda.png";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-cuadro">
          <h1 className="nombre">AGUSTIN RACK</h1>
          <h4 className="subtitulo">DESARROLLADOR FULL-STACK</h4>
          <img src={compuImage} alt="compuImage" className="compu" />
        </div>
      </div>
    </div>
  );
}
