import { types } from "../action-type";

export const updateShopCollection = (shopData) => ({
  type: types.UPDATE_SHOP_COLLECTION,
  payload: shopData,
});
