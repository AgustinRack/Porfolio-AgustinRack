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
      <h1 className="skill">SKILL</h1>
      <h2 className="lenguajes">LENGUAJES</h2>
      <img src={javascript} alt="javascript" className="javascript" />
      <div className="backFront">
        <div>
          <h2 className="backend">BACK END</h2>
          <img src={node} alt="node" className="node" />
          <img src={express} alt="express" className="express" />
          <img src={mongo} alt="mongo" className="mongo" />
          <img src={post} alt="post" className="post" />
          <img src={sequelize} alt="sequelize" className="sequelize" />
          <img src={vite} alt="vite" className="vite" />
        </div>
        <div>
          <h2 className="frontend">FRONT END</h2>
          <img src={react} alt="react" className="react" />
          <img src={axios} alt="axios" className="axios" />
          <img src={bootstrap} alt="boostrap" className="bootstrap" />
          <img src={css} alt="css" className="css" />
          <img src={redux} alt="redux" className="redux" />
          <img src={html} alt="html" className="html" />
          <img src={materialUi} alt="materialUi" className="materialUi" />
        </div>
      </div>
      <h2 className="additional">ADDITIONAL</h2>
      <img src={git} alt="git" className="git" />
      <img src={figma} alt="figma" className="figma" />
      <img src={photoshop} alt="photoshop" className="photoshop" />
    </div>
  );
}

export default Skill;
