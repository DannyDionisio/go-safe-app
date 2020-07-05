import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getRestaurant } from "../../database";

import "./styles.css";

import OccupationImg from "./../Homepage/Restaurants/assets/people.svg";
import StarImg from "./../Homepage/Restaurants/assets/star.svg";
import Phone from "./assets/telefone.svg";
import Hours from "./assets/relogio.svg";
import Whatsapp from "./assets/whatsapp.svg";

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
              <img src={Hours} alt="Relógio" />
              <p>
                {open}h às {close}h
              </p>
            </div>
          </div>
          <div className="contacts">
            <a href={`whatsapp://send?phone=${this.state.whatsapp}`}>
              <img src={Whatsapp} alt="Whatsapp" />
            </a>
            <a href={`tel:${this.state.cellphone}`}>
              <img src={Phone} alt="Contato" />
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
          <div className="midia">
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
