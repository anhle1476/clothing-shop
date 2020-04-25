import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import HatsPage from "./pages/shop/hats/hats.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
