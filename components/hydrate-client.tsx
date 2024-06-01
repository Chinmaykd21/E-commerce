"use client";

import useCartStore from "@/store/cart-store";
import { useEffect } from "react";

export const HydrateClient = () => {
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  return null;
};
