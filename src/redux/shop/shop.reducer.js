import { initialStates } from "../initial-state";
import { types } from "../action-type";

export const shopReducer = (state = initialStates.shop, action) => {
  switch (action.type) {
    case types.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case types.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
