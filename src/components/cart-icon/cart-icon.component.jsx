import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

export const CartIcon = () => {
  const { isCartOpen, setisCartOpen } = useContext(CartContext);

  const toogleIsCartOpen = () => {
    setisCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon " />
      <span className="item-count">0</span>
    </div>
  );
};
