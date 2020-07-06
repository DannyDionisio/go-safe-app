import React, { Component } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import Restaurants from "./Restaurants";
import { restaurants, categories } from "../../database";
import UserImg from "./Category/assets/user.svg";

import "./styles.css";

class Homepage extends Component {
  render() {
    return (
      <div className="container-home">
        <div className="search-profile">
          <p className="control has-icons-left">
            <input className="input is-info" type="text" placeholder="Buscar restaurante..." />
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
            <Category key={category.id} name={category.name} image={category.image} />
          ))}
        </div>
        <div className="container-top">
          <h1>Os mais limpos</h1>
          <div className="container-top__restaurants">
            {restaurants.map((restaurant) => (
              <Restaurants
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                image={restaurant.image}
                rating={restaurant.rating}
                capacity={restaurant.capacity}
                classifications={restaurant.classifications}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
