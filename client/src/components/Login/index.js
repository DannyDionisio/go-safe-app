import React, { Component } from "react";
import { Link } from "react-router-dom";

import LogoImg from "./assets/logologin.jpeg";
import "./styles.css";

class Login extends Component {
  render() {
    return (
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <h3 class="title has-text-black">Login</h3>
              <hr class="login-hr" />
              <p class="subtitle has-text-black">
                Por favor, faça login para prosseguir.
              </p>
              <div class="box">
                <figure class="avatar">
                  <img src={LogoImg} />
                </figure>
                <form _lpchecked="1">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input is-large"
                        type="email"
                        placeholder="CPF / CPNJ"
                        autofocus=""
                        autocomplete="off"
                      />
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <input
                        class="input is-large style1"
                        type="password"
                        placeholder="Palavra-Passe"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="checkbox">
                      <input type="checkbox" />
                      Lembrar-me
                    </label>
                  </div>
                  <Link to="/">
                    <button class="button is-block is-info is-large is-fullwidth">
                      Login
                    </button>
                  </Link>
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
