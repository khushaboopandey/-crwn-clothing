import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToadd) => {
  const exitingCardItem = cartItems.find(
    (cartItem) => cartItem.id === productToadd.id
  );

  if (exitingCardItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToadd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToadd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  cartItems: [],
  count: 0,
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce(
      (count, cartItem) => count + cartItem.quantity,
      0
    );
    setCount(newCount);
  }, [cartItems]);

  const addItemToCart = (productToadd) => {
    setcartItems(addCartItem(cartItems, productToadd));
  };
  const value = { isCartOpen, setisCartOpen, addItemToCart, cartItems, count };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
