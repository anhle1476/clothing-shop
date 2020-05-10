import { types } from "../action-type";
import { initialStates } from "../initial-state";

const userReducer = (state = initialStates.user, action) => {
  switch (action.type) {
    case types.user.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case types.user.SIGN_IN_FAILURE:
    case types.user.SIGN_OUT_FAILURE:
    case types.user.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case types.user.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
