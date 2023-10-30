import React from "react";
import "../skill/Skill.css";
import javascript from "../../assets/skills/javascript.png";
import node from "../../assets/skills/node.png";
import express from "../../assets/skills/express.png";
import mongo from "../../assets/skills/mongo.png";
import post from "../../assets/skills/postgresql.png";
import sequelize from "../../assets/skills/sequelize.png";
import react from "../../assets/skills/react.svg";
import axios from "../../assets/skills/axios.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import css from "../../assets/skills/css.png";
import redux from "../../assets/skills/redux.png";
import git from "../../assets/skills/git.png";
import figma from "../../assets/skills/figma.png";
import materialUi from "../../assets/skills/materialUi.png";
import html from "../../assets/skills/html.png";
import photoshop from "../../assets/skills/photoshop.png";
import vite from "../../assets/skills/vite.png";

function Skill() {
  return (
    <div className="skill-container">
      <h1 className="skill">SKILLS</h1>

      <div className="backFront">
        <div className="cuadrado">
          <h2 className="lenguajes">LENGUAJES</h2>
          <img src={javascript} alt="javascript" className="node" />
        </div>
        <div className="cuadrado">
          <h2 className="backend">BACK END</h2>
          <img src={node} alt="node" className="node" />
          <img src={express} alt="express" className="node" />
          <img src={mongo} alt="mongo" className="node" />
          <img src={post} alt="post" className="node" />
          <img src={sequelize} alt="sequelize" className="node" />
          <img src={vite} alt="vite" className="node" />
        </div>
        <div className="cuadrado">
          <h2 className="frontend">FRONT END</h2>
          <img src={react} alt="react" className="node" />
          <img src={axios} alt="axios" className="node" />
          <img src={bootstrap} alt="boostrap" className="node" />
          <img src={css} alt="css" className="node" />
          <img src={redux} alt="redux" className="node" />
          <img src={html} alt="html" className="node" />
          <img src={materialUi} alt="materialUi" className="node" />
        </div>
        <div className="cuadrado">
          <h2 className="additional">ADDITIONAL</h2>
          <img src={git} alt="git" className="node" />
          <img src={figma} alt="figma" className="node" />
          <img src={photoshop} alt="photoshop" className="node" />
        </div>
      </div>
      <footer>
        <p>&copy; 2023 Agustin Rack. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Skill;
