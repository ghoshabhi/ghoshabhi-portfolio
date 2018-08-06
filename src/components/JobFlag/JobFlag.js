import React, { Component } from "react";
import styles from "./styles.css";

import { AppContextConsumer } from "../../context";

const JobFlag = () => (
  <AppContextConsumer>
    {context => {
      const className = `job-flag ${context.isHovered ? "fade-in" : ""}`;
      return (
        <div
          className={className}
          onMouseEnter={context.onMouseEnter}
          onMouseLeave={context.onMouseLeave}
        >
          <a href="mailto:abhighosh18@gmail.com?subject=Hello%20Abhishek 👋">
            <span className="job-flag__text">
              Hire Me
              <span className="laptop-icon">👨🏻‍💻</span>
            </span>
          </a>
        </div>
      );
    }}
  </AppContextConsumer>
);

export default JobFlag;
