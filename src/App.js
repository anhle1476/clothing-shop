import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import NotFoundPage from "./pages/notfound/notfound.component";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />\
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
