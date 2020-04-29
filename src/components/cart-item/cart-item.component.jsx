import "../../css/cart-item.style.min.css";
import React from "react";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='title' />
      <div className='item-details'>
        <div className='name'>{name}</div>
        <div className='price'>
          {quantity} x ${price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
