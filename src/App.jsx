import MyNavbar from "../src/componentes/navbar/Navbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./componentes/home/Home";
import AboutMe from "./componentes/aboutMe/AboutMe";
import Skill from "./componentes/skill/Skill";
import Contactos from "./componentes/contacts/Contacts";
import MyProyectos from "./componentes/proyectos/Proyectos";

function App() {
  return (
    <div>
      <div id="navbar">
        <MyNavbar />
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="proyects">
        <MyProyectos />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="contactos">
        <Contactos />
      </div>
    </div>
  );
}
export default App;
