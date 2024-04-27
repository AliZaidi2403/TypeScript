import { ReactElement } from "react";
import { ProductType } from "../context/ProductsProvider";
import { useCart } from "../context/CartsProvider";

type PropType = {
  product: ProductType;
  inCart: boolean;
};
const Product = ({ product, inCart }: PropType): ReactElement => {
  const { Add } = useCart();
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;
  const onAddToCart = () => Add({ ...product, quantity: 1 });
  const itemInCart = inCart ? " -> Item in Cart ✔️" : null;
  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt="image" className="product__img" />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
        {itemInCart}
        {<button onClick={onAddToCart}>Add to Cart</button>}
      </p>
    </article>
  );
  return content;
};

export default Product;
