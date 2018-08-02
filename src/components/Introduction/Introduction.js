import React from 'react';
import styles from './styles.css';

import Skills from '../Skills';
import Links from '../Links';

const Introduction = () => (
  <div className="introduction">
    <div className="introduction__title_container">
      <h1>Hi 👋 I'm Abhishek Ghosh</h1>
      <div style={{ marginTop: 12, marginLeft: 10 }}>
        <h4>Software Engineer</h4>
      </div>
    </div>
    <Skills />
    <Links />
  </div>
)

export default Introduction;
