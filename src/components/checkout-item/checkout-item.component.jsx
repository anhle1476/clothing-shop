import React from "react";
import { connect } from "react-redux";

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  TextContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

import {
  addItemToCart,
  decreaseItemQuantity,
  deleteCartItem,
} from "../../redux/cart/cart.action";

export const CheckOutItem = ({
  cartItem,
  decreaseQuantity,
  addItemToCart,
  deleteItem,
}) => {
  const { imageUrl, name, price, quantity, id } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='cart item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <span
          className='arrow'
          onClick={() => {
            quantity !== 1 && decreaseQuantity(cartItem);
          }}
        >
          &#10094;
        </span>
        {quantity}
        <span className='arrow' onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </span>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => deleteItem(id)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  decreaseQuantity: (item) => dispatch(decreaseItemQuantity(item)),
  deleteItem: (id) => dispatch(deleteCartItem(id)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
