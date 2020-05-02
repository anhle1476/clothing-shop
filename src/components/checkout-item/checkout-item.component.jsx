import "../../css/checkout-item.style.min.css";

import React from "react";
import { connect } from "react-redux";

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
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='cart item' />
      </div>
      <div className='name'>{name}</div>
      <div className='quantity'>
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
      </div>
      <div className='price'>{price}</div>
      <button className='remove-button' onClick={() => deleteItem(id)}>
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  decreaseQuantity: (item) => dispatch(decreaseItemQuantity(item)),
  deleteItem: (id) => dispatch(deleteCartItem(id)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
