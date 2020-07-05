import React, { Component } from "react";
import "./styles.css";

class Occupation extends Component {
  render() {
    return (
      <div className="container-occupation">
        <img src={this.props.image} alt="Images" />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Occupation;
