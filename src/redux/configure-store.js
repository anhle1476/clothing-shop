import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

export default function configureStore(initialState) {
  // using redux dev tool
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = [logger];

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
