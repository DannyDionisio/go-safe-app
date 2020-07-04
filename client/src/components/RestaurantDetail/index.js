import React, { Component } from "react";

import "./styles.css";

import PraxisImg from "./../Homepage/Restaurants/assets/praxis.jpg";
import OccupationImg from "./../Homepage/Restaurants/assets/people.svg";
import StarImg from "./../Homepage/Restaurants/assets/star.svg";
import CleanTable from "./assets/clean-tables.jpg";
import PraxisClean from "./assets/praxis-clean1.jpg";
import PraxisBeer from "./assets/praxis-beer.jpg";
import TeamPraxis from "./assets/team.jpg";
import Phone from "./assets/telefone.svg";
import Hours from "./assets/relogio.svg";
import Whatsapp from "./assets/whatsapp.svg";

import bulmaCarousel from "bulma-carousel/dist/js/bulma-carousel.min.js";
import "bulma-carousel/dist/css/bulma-carousel.min.css";

class RestaurantDetail extends Component {
  componentDidMount() {
    bulmaCarousel.attach("#carousel-demo", {
      slidesToScroll: 1,
      slidesToShow: 2,
    });
  }
  render() {
    return (
      <div className="ctn-restaurant">
        <div className="banner">
          <img src={PraxisImg} alt="Praxis" />
        </div>
        <div className="container-infos">
          <div className="hour-contacts">
            <div className="hours">
              <img src={Hours} alt="Relógio" />
              <p>12h às 22h</p>
            </div>
          </div>
          <div className="contacts">
            <img src={Whatsapp} alt="Whatsapp" />
            <img src={Phone} alt="Contato" />
          </div>
        </div>
        <div className="rating-container">
          <h1>Praxis</h1>
          <div className="rating_rest">
            <div className="rating-ocupation">
              <img src={OccupationImg} alt="Ocupação" />
              <span>Cheio</span>
            </div>
            <div className="rating-star">
              <img src={StarImg} alt="Rating" />
              <span>85%</span>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="midia">
            <img src={CleanTable} alt="Mesas Limpas" />
            <img src={PraxisClean} alt="Confeção Alimentos" />
            <img src={PraxisBeer} alt="Confeção de Cerveja" />
            <img src={TeamPraxis} alt="Team Praxis" />
          </div>
        </section>
      </div>
    );
  }
}

export default RestaurantDetail;
