export const addNewItem = (cartItems, itemToAdd) => {
  let found = false;
  let newCart = cartItems.map((item) => {
    if (item.id === itemToAdd.id) {
      found = true;
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  return found ? newCart : [...newCart, { ...itemToAdd, quantity: 1 }];
};

export const deleteCartItem = (cartItems, deleteItemId) => {
  return cartItems.filter((item) => item.id !== deleteItemId);
};

export const decreaseItemQuantity = (cartItems, itemToDecrease) => {
  return cartItems.map((item) => {
    if (item.id === itemToDecrease.id) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
};
