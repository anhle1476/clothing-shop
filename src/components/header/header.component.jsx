import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "../../css/header.style.min.css";

function Header() {
  const activeStyle = {
    fontWeight: "bold",
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
        <NavLink className='option' to='/signin' activeStyle={activeStyle}>
          SIGN IN
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
