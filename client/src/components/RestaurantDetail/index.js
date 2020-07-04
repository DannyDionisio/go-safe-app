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
import Email from "./assets/email.svg";

import bulmaCarousel from "bulma-carousel/dist/js/bulma-carousel.min.js";

class RestaurantDetail extends Component {
  render() {
    // Initialize all elements with carousel class.
    const carousels = bulmaCarousel.attach(".carousel", 3);

    // To access to bulmaCarousel instance of an element
    const element = document.querySelector("#my-element");
    if (element && element.bulmaCarousel) {
      // bulmaCarousel instance is available as element.bulmaCarousel
    }

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
        </div>

        <div>
          <h1>Praxis</h1>
          <div className="rating_rest">
            <img src={OccupationImg} alt="Ocupação" />
            <spam>20%</spam>
            <img src={StarImg} alt="Rating" />
            <spam>70%</spam>
          </div>
        </div>
        <div className="midia">
          <h1>Fotos & Videos</h1>
          <section class="section">
            <div class="container">
              <div
                id="carousel-demo"
                class="carousel"
                data-slides-to-scroll="3"
              >
                <div class="item-1">
                  <img src={CleanTable} alt="Mesas Limpas" />
                </div>
                <div class="item-2">
                  <img src={PraxisClean} alt="Confeção Alimentos" />
                </div>
                <div class="item-3">
                  <img src={PraxisBeer} alt="Confeção de Cerveja" />
                </div>
                <div class="item-3">
                  <img src={TeamPraxis} alt="Team Praxis" />
                </div>
              </div>
            </div>
          </section>
          <section>
            <h1>Contatos</h1>
            <div>
              <img src={Phone} alt="Contato" />
              <p>+55 4235-6873</p>
            </div>
            <div>
              <img src={Email} alt="E-mail" />
              <p>contato@praxis.com.br</p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default RestaurantDetail;
