import { types } from "../action-type";
import { initialStates } from "../initial-state";

const cartReducer = (state = initialStates.cart, action) => {
  switch (action.type) {
    case types.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
