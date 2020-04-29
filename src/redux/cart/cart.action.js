import { types } from "../action-type";

export const toggleCartHidden = () => ({
  type: types.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: types.ADD_CART_ITEM,
  payload: item,
});

export const deleteCartItem = (id) => ({
  type: types.DELETE_CART_ITEM,
  payload: id,
});

export const increaseItemQuantity = (item) => ({
  type: types.INCREASE_QUANTITY,
  payload: item,
});

export const decreaseItemQuantity = (item) => ({
  type: types.DECREASE_QUANTITY,
  payload: item,
});
