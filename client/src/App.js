import React, { Component } from "react";
import "./App.css";

import Homepage from "./components/Homepage";
import RestaurantDetail from "./components/RestaurantDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Homepage />  */}
        <RestaurantDetail />
      </div>
    );
  }
}

export default App;
