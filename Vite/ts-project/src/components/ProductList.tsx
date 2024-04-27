import { ReactElement } from "react";
import { useCart } from "../context/CartsProvider";
import { useProducts } from "../context/ProductsProvider";
import Product from "./Product";

const ProductList = () => {
  const { products } = useProducts();
  const { cart } = useCart();
  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;
  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);
      return <Product key={product.sku} product={product} inCart={inCart} />;
    });
  }
  const content = <main className="main main--products">{pageContent}</main>;
  return content;
};

export default ProductList;
