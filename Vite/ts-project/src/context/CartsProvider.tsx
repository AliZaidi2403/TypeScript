import { createContext, useCallback, useReducer, ReactElement } from "react";

export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

type Action =
  | { type: "ADD"; payload?: CartItemType }
  | { type: "REMOVE"; payload?: CartItemType }
  | { type: "SUBMIT" }
  | { type: "QUANTITY"; payload?: CartItemType };

const reducer = (state: CartStateType, action: Action): CartStateType => {
  switch (action.type) {
    case "ADD": {
      if (!action.payload) {
        throw new Error("Payload missing ");
      }
      const { sku, name, price } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );
      const qty: number = itemExists ? itemExists.quantity + 1 : 1;
      return {
        ...state,
        cart: [...filteredCart, { sku, name, price, quantity: qty }],
      };
      break;
    }
    case "REMOVE": {
      if (!action.payload) {
        throw new Error("Payload missing ");
      }
      const { sku } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      return { ...state, cart: filteredCart };
      break;
    }
    case "QUANTITY": {
      if (!action.payload) {
        throw new Error("Payload missing ");
      }
      const { sku, quantity } = action.payload;
      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );
      if (!itemExists) {
        throw new Error("Items does not exist in order to get update");
      }
      const updatedItem: CartItemType = {
        ...itemExists,
        quantity: quantity,
      };
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      return { ...state, cart: [...filteredCart, updatedItem] };
      break;
    }

    case "SUBMIT": {
      return { ...state, cart: [] };
    }
    default:
      throw new Error("Undefined Action ");
  }
};

const useCartContext = (initState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);
  const totalItems = state.cart.reduce(
    (prev, cartItem) => prev + cartItem.quantity,
    0
  );
  const totalPrice = new Intl.NumberFormat("en-us").format(
    state.cart.reduce((prev, item) => {
      return prev + item.price * item.quantity;
    }, 0)
  );
  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));
    return itemA - itemB;
  });
  const Add = useCallback((value: CartItemType) => {
    dispatch({ type: "ADD", payload: value });
  }, []);
  const Remove = useCallback((value: CartItemType) => {
    dispatch({ type: "REMOVE", payload: value });
  }, []);
  const Submit = useCallback(() => {
    dispatch({ type: "SUBMIT" });
  }, []);
  const Quantity = useCallback((value: CartItemType) => {
    dispatch({ type: "QUANTITY", payload: value });
  }, []);
  return { Add, Submit, Quantity, Remove, cart, totalItems, totalPrice };
};

export type UserCartContextType = ReturnType<typeof useCartContext>;
const initContextState: UserCartContextType = {
  Add: (value: CartItemType) => {},
  Remove: (value: CartItemType) => {},
  Quantity: (value: CartItemType) => {},
  Submit: () => {},
  totalItems: 0,
  totalPrice: "",
  cart: [],
};
const CartContext = createContext<UserCartContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
