import React, { Component } from "react";

import "./styles.css";

class Category extends Component {
  render() {
    return (
      <div className="category-container" style={{ backgroundImage: `url(${this.props.image})` }}>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Category;
