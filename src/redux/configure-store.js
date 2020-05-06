import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

function configureStore(initialState) {
  // using redux dev tool
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = [thunk];
  if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
  }
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}

const store = configureStore();

const persistor = persistStore(store);

export { store, persistor };
