import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Discount } from "./assets/discount.svg";
import { ReactComponent as Trophy } from "./assets/trophy.svg";
import { ReactComponent as Locked } from "./assets/locked.svg";

import "./styles.css";

class Gamification extends Component {
  render() {
    return (
      <div className="container-gamification">
        <div className="back-button1">
          <Link to="/">Voltar</Link>
        </div>
        <div className="ctn-info">
          <p>
            Almoce fora de forma <b>segura</b> e avalie o restaurante para aumentar suas chances!
          </p>
        </div>
        <div className="week-reward">
          <Trophy />
          <div>
            <h1>Vocé está concorrendo ao prêmio semanal</h1>
            <span>Almoço grátis</span>
          </div>
        </div>
        <div className="montly-reward">
          <Locked />
          <div>
            <h1>Próximo sorteio do mês</h1>
            <span>TV LED 55"</span>
          </div>
        </div>
        <div className="my-discounts">
          <h1>
            Os meus cupões <span>(5 avaliações para ganhar o próximo cupom)</span>:
          </h1>
          <div>
            <div className="discount">
              <Discount />
              <div className="discount-content">
                <h2>20% de desconto</h2>
                <span>Em uma compra no Habib's</span>
              </div>
            </div>
            <div className="discount">
              <Discount />
              <div className="discount-content">
                <h2>2 por 1</h2>
                <span>Compre qualquer refeição e receba o dobro.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gamification;
