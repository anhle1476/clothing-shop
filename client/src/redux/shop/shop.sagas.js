import { takeLatest, call, put } from "redux-saga/effects";

import { types } from "../action-type";

import { firestore, convertSnapshotToMap } from "../../firebase/firebase.utils";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.action";

export function* fetchCollectionsAsync() {
  try {
    const shopRef = firestore.collection("shop");
    const snapshot = yield shopRef.get();
    const shopMap = yield call(convertSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(shopMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(types.shop.FETCH_COLLECTION_START, fetchCollectionsAsync);
}
