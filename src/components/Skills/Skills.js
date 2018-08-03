import React, { Component } from "react";
import styles from "./styles.css";

import skills from "./referenceData";

const SkillItem = ({ skill }) => (
  <button
    className="skills__skill_item"
    style={{ backgroundColor: skill.color_code }}
    onClick={() => console.log(skill.skill_name)}
  >
    {/* <span className="fab fa-react fa-lg" style={{ marginRight: 20 }} /> */}
    {/* <img
      src={require('../../assets/redux_logo.png')}
      alt="redux_logo"
      height="42"
      width="42"
    /> */}
    <span className="skill__skill_item-text">{skill.skill_name}</span>
  </button>
);

const Skills = () => (
  <div className="skills_container">
    {skills.map(skill => <SkillItem key={skill.id} skill={skill} />)}
  </div>
);

export default Skills;
