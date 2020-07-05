import React, { Component } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import Restaurants from "./Restaurants";
import { restaurants } from "../../database";

import "./styles.css";

import pizzaImg from "./Category/assets/pizza.png";
import macarraoImg from "./Category/assets/macarrao.png";
import hamburguerImg from "./Category/assets/hamburguer.png";
import sorveteImg from "./Category/assets/sorvete.png";
import UserImg from "./Category/assets/user.svg";

const categories = [
  {
    name: "Pizza",
    image: pizzaImg,
  },
  {
    name: "Chinesa",
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

class Homepage extends Component {
  render() {
    return (
      <div className="container-home">
        <div className="search-profile">
          <p className="control has-icons-left">
            <input
              className="input is-info"
              type="text"
              placeholder="Buscar restaurante..."
            />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>

          <Link to="/gamification">
            <img src={UserImg} alt="Usuário" />
          </Link>
        </div>
        <div className="container-categories">
          {categories.map((category) => (
            <Category name={category.name} image={category.image} />
          ))}
        </div>
        <div className="container-top">
          <h1>Top Limpeza</h1>
          <div className="container-top__restaurants">
            {restaurants.map((restaurant) => (
              <Restaurants
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                image={restaurant.image}
                rating={restaurant.rating}
                capacity={restaurant.capacity}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
