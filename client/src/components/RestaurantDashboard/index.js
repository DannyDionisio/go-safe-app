import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getRestaurant } from "../../database";

import "./styles.css";

class RestaurantDashboard extends Component {
  render() {
    return (
      <div>
        <div className="container-dashboard">
          <h1>Restaurante 1</h1>
          <img src={this.props.image} alt="Images" />
        </div>
        <div>
          <span>Ranking Top Limpeza: 3º</span>
          <span>Total de visitas: 34</span>
          <span>Nota: 8,5</span>
        </div>
      </div>
    );
  }
}

export default RestaurantDashboard;
