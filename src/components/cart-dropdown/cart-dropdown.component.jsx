import React from "react";
import "../../css/cart-dropdown.style.min.css";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <div key={item.name}>{item.name}</div>
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
