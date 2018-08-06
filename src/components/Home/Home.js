import React, { Component } from "react";
import styles from "./styles.css";

import Introduction from "../Introduction";
import JobFlag from "../JobFlag";

const Home = () => (
  <div className="home">
    <div className="content">
      <Introduction />
      <div className="job-flag__container">
        <JobFlag />
      </div>
    </div>
  </div>
);

export default Home;
