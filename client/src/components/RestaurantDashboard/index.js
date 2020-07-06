import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getRestaurant } from "../../database";

import "./styles.css";

import GraficImg from "./assets/grafico.jpg";
import EmptyImg from "../RestaurantEvaluation/Occupation/assets/row1.svg";
import NormalImg from "../RestaurantEvaluation/Occupation/assets/row2.svg";
import FullImg from "../RestaurantEvaluation/Occupation/assets/row3.svg";
import DistanceImg from "../RestaurantEvaluation/CleanRating/assets/distance.svg";
import DishImg from "../RestaurantEvaluation/CleanRating/assets/dishwashing.svg";
import ArrowsImg from "../RestaurantEvaluation/CleanRating/assets/arrows.svg";
import GlovesImg from "../RestaurantEvaluation/CleanRating/assets/rubber-gloves.svg";
import MaskImg from "../RestaurantEvaluation/CleanRating/assets/medical-mask.svg";
import SanitizerImg from "../RestaurantEvaluation/CleanRating/assets/hand-sanitizer.svg";

class RestaurantDashboard extends Component {
  state = {
    workingHours: [],
    images: [],
  };

  componentDidMount() {
    this.setState(getRestaurant(1));
  }

  render() {
    return (
      <div className="container-dashboard">
        <h1>{this.state.name}</h1>
        <img src={this.state.image} alt="Images" />
        <div className="container-dashboard-content">
          <p>Ranking Top Limpeza: 3º</p>
          <p>Total de visitas: 34</p>
          <p>Nota: 8,5</p>
        </div>
        <img src={GraficImg} alt="Gráfico" />
        <div className="container-dashboard-content classifications">
          <h2>Avaliações</h2>
          <div>
            <p>Paulo Roberto (02/07/2020)</p>
            <div>
              <img src={NormalImg} />
              <img src={DishImg} />
              <img src={MaskImg} />
            </div>
          </div>
          <div>
            <p>Gilberto Barros (15/02/2020)</p>
            <div>
              <img src={FullImg} />
              <img src={MaskImg} />
              <img src={GlovesImg} />
              <img src={SanitizerImg} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantDashboard;
