import React, { Component } from 'react'
import styles from './styles.css'

const LINKS_MAP = {
  GITHUB: 'https://github.com/ghoshabhi',
  LINKEDIN: 'https://www.linkedin.com/in/abhishek-ghosh-31280617/',
  TWITTER: 'https://twitter.com/abhighosh18',
}

const LinksSeparator = () => (
  <div className="links_content separator" />
);

const Links = () => (
 <div className="links_container">
   <div className="links_content">
     <a target="_blank" href={LINKS_MAP.GITHUB}>
      <span className="fab fa-github fa-2x" />
     </a>
   </div>
   <LinksSeparator />
   <div className="links_content">
     <a target="_blank" href={LINKS_MAP.LINKEDIN}>
      <span className="fab fa-linkedin fa-2x" />
     </a>
   </div>
   <LinksSeparator />
   <div className="links_content">
     <a target="_blank" href={LINKS_MAP.TWITTER}>
      <span className="fab fa-twitter fa-2x" />
     </a>
   </div>
 </div>
)

export default Links;
