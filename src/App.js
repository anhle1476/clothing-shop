import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import NotFoundPage from "./pages/notfound/notfound.component";
import CheckOutPage from "./pages/checkout/checkout.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignOut from "./components/sign-in-and-sign-out/sign-in-and-sign-out.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";

import "./App.css";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignOut />
          }
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
