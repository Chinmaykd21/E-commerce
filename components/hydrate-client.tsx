"use client";

import useCartStore from "@/store/cart-store";
import { useEffect } from "react";

export const HydrateClient = () => {
  useEffect(() => {
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
