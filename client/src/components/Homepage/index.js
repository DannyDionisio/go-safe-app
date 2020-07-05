import React, { Component } from "react";
import Category from "./Category";
import Restaurants from "./Restaurants";

import "./styles.css";

import pizzaImg from "./Category/assets/pizza.png";
import macarraoImg from "./Category/assets/macarrao.png";
import hamburguerImg from "./Category/assets/hamburguer.png";
import sorveteImg from "./Category/assets/sorvete.png";

import praxisImg from "./Restaurants/assets/praxis.jpg";
import habibsImg from "./Restaurants/assets/habibs.jpg";
import hachikoImg from "./Restaurants/assets/hachiko.jpg";

const categories = [
  {
    name: "Piza",
    image: pizzaImg,
  },
  {
    name: "Chinêsa",
    image: macarraoImg,
  },
  {
    name: "Fast Food",
    image: hamburguerImg,
  },
  {
    name: "Sobremesas",
    image: sorveteImg,
  },
];

const restaurants = [
  {
    name: "Praxis",
    image: praxisImg,
  },
  {
    name: "Habibs",
    image: habibsImg,
  },
  {
    name: "Hachiko",
    image: hachikoImg,
  },
];

class Homepage extends Component {
  render() {
    return (
      <div>
        <div>
          <p className="control has-icons-left">
            <input className="input is-info" type="text" placeholder="Search" />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div className="container-categories">
          {categories.map((category) => (
            <Category name={category.name} image={category.image} />
          ))}
        </div>
        <div className="container-top">
          <h1>Top Clean</h1>
          <div className="container-top__restaurants">
            {restaurants.map((restaurant) => (
              <Restaurants name={restaurant.name} image={restaurant.image} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
