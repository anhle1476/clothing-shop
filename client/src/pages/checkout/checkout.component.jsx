import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-checkout-button/stripe-checkout-button.component";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarning,
} from "./checkout.styles";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>Product</HeaderBlockContainer>
        <HeaderBlockContainer>Description</HeaderBlockContainer>
        <HeaderBlockContainer>Quantity</HeaderBlockContainer>
        <HeaderBlockContainer>Price</HeaderBlockContainer>
        <HeaderBlockContainer>Remove</HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} cartItem={item} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <TestWarning>
        *Please use this test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
      </TestWarning>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
