import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

export const CartIcon = () => {
  const { isCartOpen, setisCartOpen, count } = useContext(CartContext);

  const toogleIsCartOpen = () => {
    setisCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon " />
      <span className="item-count">{count}</span>
    </div>
  );
};
