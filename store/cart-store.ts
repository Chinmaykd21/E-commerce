import type { Product } from "@/lib/data";
import { create } from "zustand";

export type CartState = {
  cart: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  getProductQuantity: (productId: number) => number | undefined;
  clearCart: () => void;
};

const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addProduct: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity as number) + 1 }
              : item
          ),
        };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),
  getProductQuantity: (productId) => {
    const product = get().cart.find((product) => product.id === productId);
    return product ? product.quantity : undefined;
  },
  removeProduct: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
