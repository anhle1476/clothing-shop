import { types } from "../action-type";
import { initialStates } from "../initial-state";
import { addNewItem, decreaseItemQuantity, deleteCartItem } from "./cart.utils";

const cartReducer = (state = initialStates.cart, action) => {
  switch (action.type) {
    case types.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case types.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addNewItem(state.cartItems, action.payload),
      };
    case types.DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: deleteCartItem(state.cartItems, action.payload),
      };
    case types.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
