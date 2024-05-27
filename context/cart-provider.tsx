"use client";
import { Product } from "@/lib/data";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type CartContextProps = {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
};

export const CartContext = createContext<CartContextProps | null>(null);

export type CartProviderProps = {
  children: ReactNode;
};

export const CartProvier: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("cart context must be within the cart context provider");
  }

  return context;
};
