import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { auth } from "../../firebase/firebase.utils";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

function Header({ currentUser, hidden }) {
  const activeStyle = {
    fontWeight: "bold",
  };

  const hideShowDropdown = () => {
    console.log("clicked");
  };

  return (
    <HeaderContainer>
      <LogoContainer to='/' className='logo-container'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer className='options'>
        <OptionLink className='option' exact to='/' activeStyle={activeStyle}>
          HOME
        </OptionLink>
        <OptionLink className='option' to='/shop' activeStyle={activeStyle}>
          SHOP
        </OptionLink>
        <OptionLink className='option' to='/contact' activeStyle={activeStyle}>
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink
            as='div'
            className='option'
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className='option' to='/signin' activeStyle={activeStyle}>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon onClick={hideShowDropdown} />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
