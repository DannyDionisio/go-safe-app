import React, { Component } from "react";
import { Link } from "react-router-dom";

import star from "./assets/star.svg";
import people from "./assets/people.svg";

import "./styles.css";

class Restaurants extends Component {
  render() {
    return (
      <Link to={`/restaurant/${this.props.id}`}>
        <div className="container-restaurant">
          <div>
            <img src={this.props.image} alt="Images" />
          </div>
          <div className="description">
            <p className="name">{this.props.name}</p>
            <div className="rating starts">
              <img src={star} alt="Star" />
              <span>{this.props.rating}%</span>
            </div>
            <div className="rating">
              <img src={people} alt="People" />
              <span>{this.props.capacity}%</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Restaurants;
