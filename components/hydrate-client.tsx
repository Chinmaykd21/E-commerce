"use client";

import useCartStore from "@/store/cart-store";
import { useEffect } from "react";

export const HydrateClient = () => {
  useEffect(() => {
    // Hydrate the Zustand store with data from localStorage when the component mounts
    useCartStore.getState().hydrateCart();

    const handleStorageUpdate = (event: StorageEvent) => {
      if (event.key === "cart") {
        const updatedCart = event.newValue ? JSON.parse(event.newValue) : [];
        useCartStore.getState().hydrateCart();
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorageUpdate);
    }

    return () => {
      window.removeEventListener("storage", handleStorageUpdate);
    };
  }, []);
  return null;
};
