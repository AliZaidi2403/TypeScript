import {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

export type useProductContextType = { products: ProductType[] };

const initContextState: useProductContextType = { products: [] };

const ProductContext = createContext<useProductContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        return data;
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    };
    fetchProducts().then((products) => {
      setProducts(products);
    });
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  return context;
};
