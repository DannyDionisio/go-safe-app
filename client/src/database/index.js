import praxisImg from "./assets/restaurants/praxis.jpg";
import habibsImg from "./assets/restaurants/habibs.jpg";
import hachikoImg from "./assets/restaurants/hachiko.jpg";
import CleanTable from "./assets/restaurants/praxis-clean-tables.jpg";
import PraxisClean from "./assets/restaurants/praxis-clean1.jpg";
import PraxisBeer from "./assets/restaurants/praxis-beer.jpg";
import TeamPraxis from "./assets/restaurants/praxis-team.jpg";

import ChineseCategory from "./assets/categories/chinese.png";
import FastFoodCategory from "./assets/categories/fast-food.png";
import PizzaCategory from "./assets/categories/pizza.png";

import DistanceImg from "../components/RestaurantEvaluation/CleanRating/assets/distance.svg";
import DishImg from "../components/RestaurantEvaluation/CleanRating/assets/dishwashing.svg";
import ArrowsImg from "../components/RestaurantEvaluation/CleanRating/assets/arrows.svg";
import GlovesImg from "../components/RestaurantEvaluation/CleanRating/assets/rubber-gloves.svg";
import MaskImg from "../components/RestaurantEvaluation/CleanRating/assets/medical-mask.svg";
import SanitizerImg from "../components/RestaurantEvaluation/CleanRating/assets/hand-sanitizer.svg";

// devido a limitação de tempo, a base de dados fica mocked aqui.

export const restaurants = [
  {
    id: 1,
    name: "Praxis",
    image: praxisImg,
    rating: 70,
    capacity: 20,
    images: [
      { id: 1, href: CleanTable, desc: "Mesas Limpas" },
      { id: 2, href: PraxisClean, desc: "Confeção Alimentos" },
      { id: 3, href: PraxisBeer, desc: "Confeção de Cerveja" },
      { id: 4, href: TeamPraxis, desc: "Team Praxis" },
    ],
    workingHours: [12, 22],
    whatsapp: "5511999999999",
    cellphone: "5542424242",
    classifications: [DistanceImg, MaskImg, DishImg, SanitizerImg],
  },
  {
    id: 2,
    name: "Habibs",
    image: habibsImg,
    rating: 31,
    capacity: 22,
    images: [
      { id: 1, href: CleanTable, desc: "Mesas Limpas" },
      { id: 2, href: PraxisClean, desc: "Confeção Alimentos" },
      { id: 3, href: PraxisBeer, desc: "Confeção de Cerveja" },
      { id: 4, href: TeamPraxis, desc: "Team Praxis" },
    ],
    workingHours: [10, 15],
    whatsapp: "5511999999999",
    cellphone: "5542424242",
    classifications: [MaskImg, GlovesImg, SanitizerImg],
  },
  {
    id: 3,
    name: "Hachiko",
    image: hachikoImg,
    rating: 44,
    capacity: 25,
    images: [
      { id: 1, href: CleanTable, desc: "Mesas Limpas" },
      { id: 2, href: PraxisClean, desc: "Confeção Alimentos" },
      { id: 3, href: PraxisBeer, desc: "Confeção de Cerveja" },
      { id: 4, href: TeamPraxis, desc: "Team Praxis" },
    ],
    classifications: [MaskImg, ArrowsImg, GlovesImg, DishImg],
    workingHours: [12, 16],
    whatsapp: "5511999999999",
    cellphone: "5542424242",
  },
];

export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: PizzaCategory,
  },
  {
    id: 2,
    name: "Chinesa",
    image: ChineseCategory,
  },
  {
    id: 3,
    name: "Fast Food",
    image: FastFoodCategory,
  },
];

export function getRestaurant(id) {
  return restaurants.find((restaurant) => restaurant.id === parseInt(id));
}
