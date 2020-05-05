import { initialStates } from "../initial-state";
import { types } from "../action-type";

export const shopReducer = (state = initialStates.shop, action) => {
  switch (action.type) {
    case types.UPDATE_SHOP_COLLECTION:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
