import { types } from "../action-type";
import { initialStates } from "../initial-state";

const userReducer = (state = initialStates.currentUser, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
