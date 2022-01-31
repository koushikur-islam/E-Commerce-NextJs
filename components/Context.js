import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: 1,
    name: "hello world",
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};
export default Context;

export const CartState = () => {
  return useContext(Cart);
};
