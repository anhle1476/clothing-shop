import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import "../../css/checkout.style.min.css";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>Product</div>
        <div className='header-block'>Description</div>
        <div className='header-block'>Quantity</div>
        <div className='header-block'>Price</div>
        <div className='header-block'>Remove</div>
      </div>
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} cartItem={item} />
      ))}
      <div className='total'>TOTAL: ${total}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
