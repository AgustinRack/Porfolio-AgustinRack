import React from "react";
import "./Home.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-content">
          <div className="home-cuadro">
            <h1 className="nombre">AGUSTIN RACK</h1>
            <h3 className="subtitulo">DESARROLLADOR FULL-STACK</h3>
            <h4 className="subtitulo">JavaScript</h4>
          </div>
        </div>
        <div className="botones-logos">
          <a href="https://www.linkedin.com/in/agustinrack/">
            <img src={linkedin} alt="Logo 1" className="logo" />
          </a>
          <a href="https://github.com/AgustinRack">
            <img src={github} alt="Logo 2" className="logo" />
          </a>
        </div>
        <div className="container-line">
          <div className="linea2"></div>
        </div>
      </div>
    </div>
  );
}
