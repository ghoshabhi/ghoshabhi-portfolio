import React from "react";
import styles from "./styles.css";

import Skills from "../Skills";
import Links from "../Links";

const introText = "Hi 👋 I'm Abhishek Ghosh";
const subtitleText = "Software Engineer";

const Introduction = () => (
  <div className="introduction">
    <div className="introduction__title_container">
      <span className="introduction__title-text">{introText}</span>
      <div className="introduction__subtitle-container">
        <span className="introduction__subtitle-text">{subtitleText}</span>
      </div>
    </div>
    <Skills />
    <Links />
  </div>
);

export default Introduction;
