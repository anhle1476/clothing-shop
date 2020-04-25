import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import NotFoundPage from "./pages/notfound/notfound.component";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />\
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
