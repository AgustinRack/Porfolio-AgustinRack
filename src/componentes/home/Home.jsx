import React from "react";
import "./Home.css";
import pcNet from "../../assets/pcnet.png";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-cuadro">
          <h1 className="nombre">AGUSTIN RACK</h1>
          <h4 className="subtitulo">DEVELOPER FULL-STACK</h4>
          <img src={pcNet} alt="pcNet" className="compu" />
        </div>
      </div>
    </div>
  );
}
