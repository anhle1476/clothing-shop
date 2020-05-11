import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { addItemToCart } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import {
  CollectionItemContainer,
  CollectionFooter,
  ImageContainer,
  Name,
  Price,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItemToCart }) => {
  return (
    <CollectionItemContainer>
      <ImageContainer
        className='image'
        imageUrl={item.imageUrl}
      ></ImageContainer>
      <CollectionFooter>
        <Name>{item.name}</Name>
        <Price>${item.price}</Price>
      </CollectionFooter>
      <CustomButton inverted onClick={() => addItemToCart(item)}>
        ADD TO CART
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
