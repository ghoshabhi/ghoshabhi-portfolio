import React, { Component } from "react";
import styles from "./styles.css";

import Introduction from "../Introduction";
import JobFlag from "../JobFlag";

import { AppContextProvider } from "../../context";

import img from '../../assets/pp.png';


const ProfilePicture = () => (
  <div className="profile_pic__container">
    <img className="profile_pic" src={img} />
  </div>
);

export default class Home extends React.Component {
  state = {
    isHovered: false
  };

  render() {
    return (
      <AppContextProvider
        value={{
          isHovered: this.state.isHovered,
          onMouseEnter: () =>
            this.setState({
              isHovered: true
            }),
          onMouseLeave: () =>
            this.setState({
              isHovered: false
            })
        }}
      >
        <div className="home">
          <div className="content">
            <ProfilePicture />
            <Introduction />
            <JobFlag />
          </div>
        </div>
        {this.props.children}
      </AppContextProvider>
    );
  }
}
