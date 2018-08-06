import React, { Component } from "react";
import styles from "./styles.css";

import Introduction from "../Introduction";
import JobFlag from "../JobFlag";

import { AppContextProvider } from "../../context";

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
            <Introduction />
            <div className="job-flag__container">
              <JobFlag />
            </div>
          </div>
        </div>
        {this.props.children}
      </AppContextProvider>
    );
  }
}
