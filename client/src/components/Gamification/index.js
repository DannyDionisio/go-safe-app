import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

class Gamification extends Component {
  render() {
    return (
      <div className="container-gamification">
        <div className="back-button1">
          <Link to="/">Back</Link>
        </div>
        <div className="ctn-info">
          <h1>Perfil</h1>
          <span>Faltam 3 avaliações para o próximo prémio!</span>
        </div>
        <div className="cupom-list">
          <h1>Os meus cupões:</h1>
          <div className="my-cupons">
            <h1>Habib's</h1>
            <span>Numa compra no Habib's</span>
          </div>
          <div className="week-reward">
            <h1>Prémio Semanal</h1>
            <span>Uma TV LED</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Gamification;
