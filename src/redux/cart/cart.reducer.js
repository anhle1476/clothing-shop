import { types } from "../action-type";
import { initialStates } from "../initial-state";
import { addNewItem, decreaseItemQuantity, deleteCartItem } from "./cart.utils";

const cartReducer = (state = initialStates.cart, action) => {
  switch (action.type) {
    case types.cart.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case types.cart.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addNewItem(state.cartItems, action.payload),
      };
    case types.cart.DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: deleteCartItem(state.cartItems, action.payload),
      };
    case types.cart.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload),
      };
    case types.cart.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
