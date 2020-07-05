import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./components/Homepage";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantEvaluation from "./components/RestaurantEvaluation";
import Gamification from "./components/Gamification";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/restaurant/:restaurantId/evaluation"
          render={(props) => <RestaurantEvaluation {...props} />}
        />
        <Route
          path="/restaurant/:restaurantId"
          render={(props) => <RestaurantDetail {...props} />}
        />
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route
          path="/gamification"
          render={(props) => <Gamification {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
