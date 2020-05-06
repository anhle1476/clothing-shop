import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (urlParams) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[urlParams] : null
  );
