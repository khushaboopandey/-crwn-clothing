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

const removeCartItem = (cartItems, cartItemToRemove) => {
  const exitingCardItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (exitingCardItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
export const CartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  cartItems: [],
  count: 0,
  totel: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [totel, setTotel] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce(
      (count, cartItem) => count + cartItem.quantity,
      0
    );
    setCount(newCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (totel, cartItem) => totel + cartItem.quantity * cartItem.price,
      0
    );
    setTotel(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToadd) => {
    setcartItems(addCartItem(cartItems, productToadd));
  };
  const removeItemToCart = (cartItemToRemove) => {
    setcartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearItemFromCart = (cartItemToClear) => {
    setcartItems(clearCartItem(cartItems, cartItemToClear));
  };
  const value = {
    isCartOpen,
    setisCartOpen,
    addItemToCart,
    cartItems,
    count,
    removeItemToCart,
    clearItemFromCart,
    totel,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
