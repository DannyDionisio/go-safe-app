import React, { Component } from "react";
import "./App.css";

import Homepage from "./components/Homepage";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantEvaluation from "./components/RestaurantEvaluation";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Homepage />  */}
        {/*<RestaurantDetail /> */}
        <RestaurantEvaluation />
      </div>
    );
  }
}

export default App;
