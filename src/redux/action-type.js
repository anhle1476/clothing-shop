export const types = {
  user: {
    GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
    EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
    SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
    SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
    CHECK_USER_SESSION: "CHECK_USER_SESSION",
    SIGN_OUT_START: "SIGN_OUT_START",
    SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS",
    SIGN_OUT_FAILURE: "SIGN_OUT_FAILURE",
    SIGN_UP_START: "SIGN_UP_START",
    SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
    SIGN_UP_FAILURE: "SIGN_UP_FAILURE",
  },
  cart: {
    TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
    ADD_CART_ITEM: "ADD_CART_ITEM",
    DELETE_CART_ITEM: "DELETE_CART_ITEM",
    DECREASE_QUANTITY: "DECREASE_QUANTITY",
    CLEAR_CART: "CLEAR_CART",
  },
  shop: {
    FETCH_COLLECTION_START: "FETCH_COLLECTION_START",
    FETCH_COLLECTION_SUCCESS: "FETCH_COLLECTION_SUCCESS",
    FETCH_COLLECTION_FAILURE: "FETCH_COLLECTION_FAILURE",
  },
};
