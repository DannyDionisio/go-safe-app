import React, { Component } from "react";

import "./styles.css";

class Category extends Component {
  render() {
    return (
      <div className="container-box">
        <img src={this.props.image} alt="Images" />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Category;
