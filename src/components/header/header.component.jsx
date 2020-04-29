import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { auth } from "../../firebase/firebase.utils";
import "../../css/header.style.min.css";

function Header({ currentUser, hidden }) {
  const activeStyle = {
    fontWeight: "bold",
  };

  const hideShowDropdown = () => {
    console.log("clicked");
  };

  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <NavLink className='option' exact to='/' activeStyle={activeStyle}>
          HOME
        </NavLink>
        <NavLink className='option' to='/shop' activeStyle={activeStyle}>
          SHOP
        </NavLink>
        <NavLink className='option' to='/contact' activeStyle={activeStyle}>
          CONTACT
        </NavLink>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink className='option' to='/signin' activeStyle={activeStyle}>
            SIGN IN
          </NavLink>
        )}
        <CartIcon onClick={hideShowDropdown} />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
