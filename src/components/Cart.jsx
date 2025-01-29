import React, { useContext } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const userProgressContext = useContext(UserProgressContext);

  function handleCloseModal() {
    userProgressContext.hideCart();
  }

  return (
    <Modal open={userProgressContext.progress === "cart"} className="cart">
      <h2>Your cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={()=> cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseModal} textOnly>
          Close
        </Button>
        <Button onClick={handleCloseModal}>Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
