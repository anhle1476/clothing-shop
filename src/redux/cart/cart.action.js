import { types } from "../action-type";

export const toggleCartHidden = () => ({
  type: types.cart.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: types.cart.ADD_CART_ITEM,
  payload: item,
});

export const deleteCartItem = (id) => ({
  type: types.cart.DELETE_CART_ITEM,
  payload: id,
});

export const decreaseItemQuantity = (item) => ({
  type: types.cart.DECREASE_QUANTITY,
  payload: item,
});

export const clearCart = () => ({
  type: types.cart.CLEAR_CART,
});
