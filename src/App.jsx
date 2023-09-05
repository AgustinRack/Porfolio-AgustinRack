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
      <MyNavbar />
      <Home />
      <AboutMe />
      <MyProyectos />
      <Skill />
      <Contactos />
    </div>
  );
}
export default App;
