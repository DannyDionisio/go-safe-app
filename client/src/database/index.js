import praxisImg from "./assets/restaurants/praxis.jpg";
import habibsImg from "./assets/restaurants/habibs.jpg";
import hachikoImg from "./assets/restaurants/hachiko.jpg";
import CleanTable from "./assets/restaurants/praxis-clean-tables.jpg";
import PraxisClean from "./assets/restaurants/praxis-clean1.jpg";
import PraxisBeer from "./assets/restaurants/praxis-beer.jpg";
import TeamPraxis from "./assets/restaurants/praxis-team.jpg";

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
    workingHours: [12, 16],
    whatsapp: "5511999999999",
    cellphone: "5542424242",
  },
];

export function getRestaurant(id) {
  return restaurants.find((restaurant) => restaurant.id === parseInt(id));
}
