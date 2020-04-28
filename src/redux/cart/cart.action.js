import { types } from "../action-type";

export const toggleCartHidden = () => ({
  type: types.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: types.ADD_CART_ITEM,
  payload: item,
});
