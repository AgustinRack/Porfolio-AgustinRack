import React from "react";
import "./AboutMe.css";
import Button from "react-bootstrap/Button";

function AboutMe() {
  return (
    <div>
      <div className="about-contenedor">
        <div className="about-contenido">
          <h1 className="about-titulo">ABOUT ME</h1>
          <p className="about-descripcion">
            Un gran apasionado por la programación y dedicado a mantenerme
            actualizado con las últimas tendencias tecnológicas. Me destaco por
            mi enfoque creativo y eficiente para la resolución de problemas,
            siempre con el objetivo de marcar una diferencia significativa en
            cada proyecto en el que participo. Te invito a descargar mi CV
          </p>
          <div className="boton d-flex justify-content-center align-items-center">
            <Button variant="warning" className="boton">
              DESCARGAR CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
