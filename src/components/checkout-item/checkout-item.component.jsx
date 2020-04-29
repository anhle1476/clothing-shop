import "../../css/checkout-item.style.min.css";

import React from "react";
import { connect } from "react-redux";

export const CheckOutItem = ({
  cartItem: { imageUrl, name, price, quantity },
}) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='cart item' />
      </div>
      <div className='name'>{name}</div>
      <div className='quantity'>{quantity}</div>
      <div className='price'>{price}</div>
      <button
        className='remove-button'
        onClick={() => console.log("remove", name)}
      >
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(CheckOutItem);
