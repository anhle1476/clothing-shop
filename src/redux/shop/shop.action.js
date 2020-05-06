import { types } from "../action-type";
import { firestore, convertSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: types.FETCH_COLLECTION_START,
});
export const fetchCollectionSuccess = (collectionMap) => ({
  type: types.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap,
});
export const fetchCollectionFailure = (message) => ({
  type: types.FETCH_COLLECTION_START,
  payload: message,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionStart());
    const shopRef = firestore.collection("shop");
    shopRef
      .get()
      .then((snapshot) => {
        const shopData = convertSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(shopData));
      })
      .catch((error) => dispatch(fetchCollectionFailure(error.message)));
  };
};
