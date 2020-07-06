import React, { Component } from "react";
import { Link } from "react-router-dom";

import star from "./assets/star.svg";
import people from "../../RestaurantEvaluation/Occupation/assets/row3.svg";

import "./styles.css";

class Restaurants extends Component {
  render() {
    return (
      <Link to={`/restaurant/${this.props.id}`}>
        <div className="container-restaurant">
          <div className="restaurant-image" style={{ backgroundImage: `url(${this.props.image})` }} />
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
            <div className="sanitize-info">
              {this.props.classifications.map((a, i) => (
                <img key={`${a}-${i}`} src={a} />
              ))}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Restaurants;
