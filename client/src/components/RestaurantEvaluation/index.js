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

const occupations = [
  {
    name: "Vazio",
    image: EmptyImg,
  },
  {
    name: "Normal",
    image: NormalImg,
  },
  {
    name: "Cheio",
    image: FullImg,
  },
];

class RestaurantEvaluation extends Component {
  state = {};

  componentDidMount() {
    this.setState(getRestaurant(this.props.match.params.restaurantId));
  }

  render() {
    return (
      <div className="ctn-restaurant">
        <div className="back-button">
          <Link to={`/restaurant/${this.state.id}`}>Back</Link>
        </div>
        <div className="banner">
          <img src={this.state.image} alt="Praxis" />
        </div>
        <div className="rating-container">
          <h1>Avaliação do Estabelecimento</h1>
          <h2>{this.state.name}</h2>
          <h3>Ocupação</h3>
          <div className="rating-occupations">
            {occupations.map((occupation) => (
              <Occupation name={occupation.name} image={occupation.image} />
            ))}
          </div>
          <h4>Higienização</h4>
          <div className="rating-clean">
            <div className="row">
              <CleanRating name={"Distância"} image={DistanceImg} />
              <CleanRating name={"Limpeza"} image={DishImg} />
              <CleanRating name={"Marcações"} image={ArrowsImg} />
            </div>
            <div className="row">
              <CleanRating name={"Luvas"} image={GlovesImg} />
              <CleanRating name={"Máscara"} image={MaskImg} />
              <CleanRating name={"Álcool"} image={SanitizerImg} />
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantEvaluation;
