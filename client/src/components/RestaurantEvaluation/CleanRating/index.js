import React, { Component } from "react";
import "./styles.css";

class CleanRating extends Component {
  render() {
    return (
      <div className="container-clean">
        <img src={this.props.image} alt="Images" />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default CleanRating;
