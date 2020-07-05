import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./components/Homepage";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantEvaluation from "./components/RestaurantEvaluation";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/restaurant/:restaurantId/evaluation" render={(props) => <RestaurantEvaluation {...props} />} />
        <Route path="/restaurant/:restaurantId" render={(props) => <RestaurantDetail {...props} />} />
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
