import { useState } from "react";
import { useCart } from "../context/CartsProvider";
import CartLineItem from "./CartLineItem";
const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { totalItems, totalPrice, cart, Submit } = useCart();
  const onSubmitOrder = () => {
    Submit();
    setConfirm(true);
  };
  const pageContent = confirm ? (
    <h2>Thank you for your order.</h2>
  ) : (
    <>
      <h2 className="offscreen">Cart</h2>
      <ul className="cart">
        {cart.map((item) => {
          return <CartLineItem key={item.sku} item={item} />;
        })}
      </ul>
      <div className="cart__totals">
        <p>Total Items : {totalItems}</p>
        <p>Total Price : {totalPrice}</p>
        <button
          className="cart__submit"
          disabled={!totalItems}
          onClick={onSubmitOrder}
        >
          Place Order
        </button>
      </div>
    </>
  );
  const content = <main className="main main--cart">{pageContent}</main>;
  return content;
};

export default Cart;
