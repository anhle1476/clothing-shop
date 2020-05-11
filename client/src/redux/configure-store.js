import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

function configureStore(initialState) {
  // using redux dev tool
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];

  if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
  }
  return {
    ...createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(...middleware))
    ),
    runSaga: sagaMiddleware.run,
  };
}

const store = configureStore();
store.runSaga(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
