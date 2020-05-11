import { types } from "../action-type";

export const fetchCollectionStart = () => ({
  type: types.shop.FETCH_COLLECTION_START,
});
export const fetchCollectionSuccess = (collectionMap) => ({
  type: types.shop.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap,
});
export const fetchCollectionFailure = (message) => ({
  type: types.shop.FETCH_COLLECTION_START,
  payload: message,
});
