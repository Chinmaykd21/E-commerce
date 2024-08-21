import type { Product } from "@/lib/data";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartState = {
  cart: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  getProductQuantity: (productId: number) => number | undefined;
  clearCart: () => void;
  hydrateCart: () => void;
};

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addProduct: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.id === product.id
          );
          let updatedCart;
          if (existingProduct) {
            updatedCart = state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: (item.quantity ?? 0) + 1 }
                : item
            );
          } else {
            updatedCart = [...state.cart, { ...product, quantity: 1 }];
          }
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return { cart: updatedCart };
        }),
      getProductQuantity: (productId) => {
        const product = get().cart.find((product) => product.id === productId);
        return product ? product.quantity : undefined;
      },
      removeProduct: (productId) =>
        set((state) => {
          const product = state.cart.find((item) => item.id === productId);
          let updatedCart;
          if (product && product.quantity && product.quantity > 1) {
            updatedCart = state.cart.map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity! - 1 }
                : item
            );
          } else {
            updatedCart = state.cart.filter((item) => item.id !== productId);
          }
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return { cart: updatedCart };
        }),
      clearCart: () => {
        localStorage.removeItem("cart");
        set({ cart: [] });
      },
      hydrateCart: () => {
        const cart = JSON.parse(
          localStorage.getItem("cart") || "[]"
        ) as Product[];
        set({ cart });
      },
    }),
    {
      name: "cart-store",
      skipHydration: true,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
