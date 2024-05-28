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
  addProductToCart: (productToAdd: Product) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextProps | null>(null);

export type CartProviderProps = {
  children: ReactNode;
};

export const CartProvier: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProductToCart = (productToAdd: Product) => {
    const newCart = [...cart];
    const isPresent = newCart.find((product) => product.id === productToAdd.id);
    if (isPresent) {
      newCart.map((product) => {
        return product.id === productToAdd.id
          ? { ...product, quantity: (product.quantity as number) + 1 }
          : product;
      });
      setCart(newCart);
    } else {
      setCart([...newCart, { ...productToAdd }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addProductToCart,
        clearCart,
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
