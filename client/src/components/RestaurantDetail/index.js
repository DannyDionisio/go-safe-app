import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getRestaurant } from "../../database";

import "./styles.css";

import OccupationImg from "../RestaurantEvaluation/Occupation/assets/row3.svg";
import StarImg from "./../Homepage/Restaurants/assets/star.svg";
import { ReactComponent as Hours } from "./assets/relogio.svg";
import { ReactComponent as Phone } from "./assets/telefone.svg";
import { ReactComponent as Whatsapp } from "./assets/whatsapp.svg";

class RestaurantDetail extends Component {
  state = {
    workingHours: [],
    images: [],
  };

  componentDidMount() {
    this.setState(getRestaurant(this.props.match.params.restaurantId));
  }

  render() {
    const [open, close] = this.state.workingHours;

    return (
      <div className="ctn-restaurant">
        <div className="back-button">
          <Link to="/">Back</Link>
        </div>
        <div className="banner">
          <img src={this.state.image} alt="Praxis" />
        </div>
        <div className="container-infos">
          <div className="hour-contacts">
            <div className="hours">
              <Hours />
              <p>
                {open}h às {close}h
              </p>
            </div>
          </div>
          <div className="contacts">
            <a href={`whatsapp://send?phone=${this.state.whatsapp}`}>
              <Whatsapp />
            </a>
            <a href={`tel:${this.state.cellphone}`}>
              <Phone />
            </a>
          </div>
        </div>
        <div className="rating-container">
          <h1>{this.state.name}</h1>
          <div className="rating_rest">
            <Link to={`/restaurant/1/evaluation`}>
              <div className="rating-ocupation">
                <img src={OccupationImg} alt="Ocupação" />
                <span>{this.state.capacity}%</span>
              </div>
            </Link>

            <Link to={`/restaurant/1/evaluation`}>
              <div className="rating-star">
                <img src={StarImg} alt="Rating" />
                <span>{this.state.rating}%</span>
              </div>
            </Link>
          </div>
        </div>
        <section className="section">
          <div className="restaurant-details-media">
            {this.state.images.map((image) => (
              <img key={image.id} src={image.href} alt={image.desc} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default RestaurantDetail;
