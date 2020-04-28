import { types } from "../action-type";
import { initialStates } from "../initial-state";
import { addNewItem } from "./cart.utils";

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
    default:
      return state;
  }
};

export default cartReducer;
