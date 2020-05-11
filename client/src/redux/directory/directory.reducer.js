import { initialStates } from "../initial-state";

const directoryReducer = (state = initialStates.directory, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
