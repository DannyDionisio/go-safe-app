import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import Occupation from "./Occupation";
import CleanRating from "./CleanRating";

import EmptyImg from "./Occupation/assets/row1.svg";
import NormalImg from "./Occupation/assets/row2.svg";
import FullImg from "./Occupation/assets/row3.svg";
import DistanceImg from "./CleanRating/assets/distance.svg";
import DishImg from "./CleanRating/assets/dishwashing.svg";
import ArrowsImg from "./CleanRating/assets/arrows.svg";
import GlovesImg from "./CleanRating/assets/rubber-gloves.svg";
import MaskImg from "./CleanRating/assets/medical-mask.svg";
import SanitizerImg from "./CleanRating/assets/hand-sanitizer.svg";
import { getRestaurant } from "../../database";

class RestaurantEvaluation extends Component {
  state = {
    restaurant: {},
    selectedOccupation: null,
    selectedSanitation: [],
  };

  componentDidMount() {
    this.setState({
      restaurant: getRestaurant(this.props.match.params.restaurantId),
    });
  }

  handleOccupationSelection = (name) => {
    let newValue = name;

    if (this.state.selectedOccupation === name) {
      newValue = null;
    }

    this.setState({ selectedOccupation: newValue });
  };

  handleSanitationSelection = (name) => {
    let newValue = [...this.state.selectedSanitation, name];

    if (this.state.selectedSanitation.find((s) => s === name)) {
      newValue = this.state.selectedSanitation.filter((s) => s !== name);
    }

    this.setState({ selectedSanitation: newValue });
  };

  render() {
    const { restaurant } = this.state;

    return (
      <div className="restaurant-evaluation">
        <div className="back-button">
          <Link to={`/restaurant/${restaurant.id}`}>Back</Link>
        </div>
        <div className="banner">
          <img src={restaurant.image} alt="Praxis" />
        </div>
        <div className="rating-container">
          <h1>Avaliação do Estabelecimento</h1>
          <h2>{restaurant.name}</h2>
          <h3>Ocupação</h3>
          <div className={`rating-occupations ${!!this.state.selectedOccupation ? "has-selection" : ""}`}>
            <Occupation
              name="Vazio"
              image={EmptyImg}
              selected={this.state.selectedOccupation === "Vazio"}
              onClick={this.handleOccupationSelection}
            />
            <Occupation
              name="Normal"
              image={NormalImg}
              selected={this.state.selectedOccupation === "Normal"}
              onClick={this.handleOccupationSelection}
            />
            <Occupation
              name="Cheio"
              image={FullImg}
              selected={this.state.selectedOccupation === "Cheio"}
              onClick={this.handleOccupationSelection}
            />
          </div>
          <h3>Higienização</h3>
          <div className="rating-clean">
            <div className="row">
              <CleanRating
                name="Distância"
                image={DistanceImg}
                selected={this.state.selectedSanitation.includes("Distância")}
                onClick={this.handleSanitationSelection}
              />
              <CleanRating
                name="Limpeza"
                image={DishImg}
                selected={this.state.selectedSanitation.includes("Limpeza")}
                onClick={this.handleSanitationSelection}
              />
              <CleanRating
                name="Marcações"
                image={ArrowsImg}
                selected={this.state.selectedSanitation.includes("Marcações")}
                onClick={this.handleSanitationSelection}
              />
            </div>
            <div className="row">
              <CleanRating
                name="Luvas"
                image={GlovesImg}
                selected={this.state.selectedSanitation.includes("Luvas")}
                onClick={this.handleSanitationSelection}
              />
              <CleanRating
                name="Máscara"
                image={MaskImg}
                selected={this.state.selectedSanitation.includes("Máscara")}
                onClick={this.handleSanitationSelection}
              />
              <CleanRating
                name="Álcool"
                image={SanitizerImg}
                selected={this.state.selectedSanitation.includes("Álcool")}
                onClick={this.handleSanitationSelection}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantEvaluation;
