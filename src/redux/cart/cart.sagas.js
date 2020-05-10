import { takeLatest, put, all, call } from "redux-saga/effects";
import { types } from "../action-type";
import { clearCart } from "./cart.action";

function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(types.user.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
