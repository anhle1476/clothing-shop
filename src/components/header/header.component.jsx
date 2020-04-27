import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "../../css/header.style.min.css";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

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

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  hidden: cart.hidden,
});

export default connect(mapStateToProps)(Header);
