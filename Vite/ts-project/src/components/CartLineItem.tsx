import { ChangeEvent, ReactElement } from "react";
import { CartItemType, useCart } from "../context/CartsProvider";

type PropType = {
  item: CartItemType;
};
const CartLineItem = ({ item }: PropType) => {
  const { Quantity, Remove } = useCart();
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url)
    .href;

  const lineTotal: number = item.quantity * item.price;
  const highestQty: number = item.quantity > 20 ? item.quantity : 20;
  const optionValues: number[] = [...Array(highestQty).keys()].map(
    (i) => i + 1
  );
  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });
  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) =>
    Quantity({ ...item, quantity: +e.target.value });
  const onRemove = () => Remove(item);
  const content = (
    <li className="cart__item">
      <img src={img} alt={item.name} className="cart__img" />
      <div aria-label="Item name">{item.name}</div>
      <div aria-label="Price per item">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(item.price)}
      </div>
      <label htmlFor="itemQty" className="offscreen">
        Item Quantity
      </label>
      <select
        name="itemQty"
        id="itemQty"
        className="cart__select"
        value={item.quantity}
        aria-label="Item Quantity"
        onChange={onChangeQty}
      >
        {options}
      </select>
      <div className="cart__item-subtotal" aria-label="Line Item Subtotal">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(lineTotal)}
      </div>
      <button
        className="cart__button"
        aria-label="Remove Item From Cart"
        title="Remove Item From Cart"
        onClick={onRemove}
      >
        ❌
      </button>
    </li>
  );
  return content;
};

export default CartLineItem;
