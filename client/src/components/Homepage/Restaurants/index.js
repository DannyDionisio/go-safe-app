import React, { Component } from "react";

import star from "./assets/star.svg";
import people from "./assets/people.svg";

import "./styles.css";

class Restaurants extends Component {
  render() {
    return (
      <div className="container-restaurant">
        <div>
          <img src={this.props.image} alt="Images" />
        </div>
        <div className="description">
          <p className="name">{this.props.name}</p>
          <div className="rating starts">
            <img src={star} alt="Star" />
            <span>70%</span>
          </div>
          <div className="rating">
            <img src={people} alt="People" />
            <span>20%</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurants;
