import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../skill/Skill.css";

function Skill() {
  return (
    <div className="skill-container">
      <h1 className="skill">SKILL</h1>
      <div className="card-skill-container">
        <div className="progress-section1">
          <p className="nombres-skill">HTML,CSS,JS,BOOTSTRAP</p>
          <ProgressBar animated now={95} />
          <p className="nombres-skill">MONGODB</p>
          <ProgressBar animated now={83} />
          <p className="nombres-skill">REACT</p>
          <ProgressBar animated now={90} />
          <p className="nombres-skill">EXPRESS</p>
          <ProgressBar animated now={92} />
        </div>
        <div className="progress-section2">
          <p className="nombres-skill">NODE.JS</p>
          <ProgressBar animated now={86} />
          <p className="nombres-skill">GIT</p>
          <ProgressBar animated now={95} />
          <p className="nombres-skill">POSTGRESQL</p>
          <ProgressBar animated now={97} />
          <p className="nombres-skill">REACT NATIVE</p>
          <ProgressBar animated now={87} />
        </div>
      </div>
      <div className="linea5"></div>
    </div>
  );
}

export default Skill;
