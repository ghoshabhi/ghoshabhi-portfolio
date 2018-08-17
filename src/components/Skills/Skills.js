import React, { Component } from "react";
import styles from "./styles.css";

import skills from "./referenceData";

const SkillItem = ({ skill }) => (
  <button
    className="skills__skill_item"
    style={{ backgroundColor: skill.colorCode || '#fff' }}
    onClick={() => console.log(skill.skillName)}
  >
    {/* <div style={{ display: 'flex', justifyContent: 'center', padding: 5 }}>
      <img
        src={skill.icon}
        // alt="redux_logo"
        height="22"
        width="22"
        style={{ filter: 'opacity(.1) drop-shadow(0 0 0 black)' }}
      />
    </div> */}
    <div style={{ display: 'flex', justifyContent: 'center', padding: 5 }}>
      <span className="skill__skill_item-text">{skill.skillName}</span>
    </div>
  </button>
);

const Skills = () => (
  <div className="skills_container">
    {skills.map(skill => <SkillItem key={skill.id} skill={skill} />)}
  </div>
);

export default Skills;
