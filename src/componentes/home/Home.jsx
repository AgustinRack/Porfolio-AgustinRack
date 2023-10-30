import React from "react";
import "./Home.css";
import pcNet from "../../assets/pcnet.png";
import linkedin from "../../assets/contactos/linkedin.png";
import gitHub from "../../assets/contactos/gitHub.png";
import instagram from "../../assets/contactos/instagram.png";
import gif from "../../assets/circleGif.gif";
export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-cuadro">
          <img
            src={gif}
            alt="gif"
            className="gif"
            onError={(e) => console.log("Error loading image", e)}
          />

          <h1 className="nombre">
            <span className="nombre1">Hello, </span>I am Agus!
          </h1>
          <h4 className="subtitulo">DEVELOPER FULL-STACK</h4>
          <div className="botonera">
            <a href="https://www.linkedin.com/in/agustinrack-desarrollador-fullstack/">
              <img src={linkedin} alt="linkedin" className="github" />
            </a>
            <a href="https://github.com/AgustinRack">
              <img src={gitHub} alt="gitHub" className="github" />
            </a>
            <a href="https://www.instagram.com/agustin.rack/">
              <img src={instagram} alt="instagram" className="github" />
            </a>
          </div>
          <img src={pcNet} alt="pcNet" className="compu" />
        </div>
      </div>
    </div>
  );
}
