import React, {createContext} from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
  // those data are for better completion later, but not used
});

export default CartContext;