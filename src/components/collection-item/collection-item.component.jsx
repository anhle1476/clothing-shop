import React from "react";
import "../../css/collection-item.style.min.css";
import CustomButton from "../custom-button/custom-button.component";
import { addItemToCart } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CollectionItem = ({ item, addItemToCart }) => {
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className='collection-footer'>
        <div className='name'>{item.name}</div>
        <div className='price'>{item.price + "$"}</div>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
