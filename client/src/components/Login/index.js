import React, { Component } from "react";
import { Link } from "react-router-dom";

import LogoImg from "./assets/logologin.jpeg";
import "./styles.css";

class Login extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const v = document.getElementById("login-field").value;

    if (v.length === 11) {
      this.props.history.push("/");
    } else {
      this.props.history.push("/dashboard");
    }
  };
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-black">Login</h3>
              <hr className="login-hr" />
              <p className="subtitle has-text-black">
                Por favor, faça login para prosseguir.
              </p>
              <div className="box">
                <figure className="avatar">
                  <img src={LogoImg} />
                </figure>
                <form _lpchecked="1" onSubmit={this.handleClick}>
                  <div className="field">
                    <div className="control">
                      <input
                        id="login-field"
                        className="input is-large"
                        type="text"
                        placeholder="CPF / CPNJ"
                        autoFocus
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large style1"
                        type="password"
                        placeholder="Palavra-Passe"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Lembrar-me
                    </label>
                  </div>
                  <button
                    className="button is-block is-info is-large is-fullwidth"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
