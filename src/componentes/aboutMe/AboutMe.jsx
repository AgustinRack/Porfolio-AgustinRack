import React from "react";
import "./AboutMe.css";
import Button from "react-bootstrap/Button";
import agustinEspalda from "../../assets/agustinEspalda.png";

function AboutMe() {
  return (
    <div>
      <div className="about-contenedor">
        <div className="about-contenido">
          <h1 className="about-titulo">
            ABOUT <span class="nombre4">Agustin Rack</span>{" "}
          </h1>
          <div className="orden">
            <img src={agustinEspalda} alt="pcNet" className="pc" />
            <p className="about-descripcion">
              Developer con actitud positiva y lleno de buenas energías. Siempre
              dispuesto a seguir aprendiendo para mejorar mis habilidades que me
              llevan a dar lo mejor de mi. Lo que me caracteriza es la buena
              comunicacion, lo que me permite relacionarme de manera efectiva
              con mis colegas y clientes. Mi actitud positiva no solo me ayuda a
              superar desafíos sino que también crea un ambiente de trabajo
              agradable.
            </p>
          </div>
          <div className="boton d-flex justify-content-center align-items-center">
            <Button
              variant="dark"
              className="boton"
              href="https://drive.google.com/file/d/1TOQPKYlIb_LQP5gwd3-pUndayLv3cryA/view?usp=sharing"
            >
              DESCARGAR CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
