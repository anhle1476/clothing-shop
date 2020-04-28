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
