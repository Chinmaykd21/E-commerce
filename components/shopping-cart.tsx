"use client";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useCartContext } from "@/context/cart-provider";

const ShoppingCartButton = () => {
  const { cart } = useCartContext();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <ShoppingCart />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          {cart.length === 0 ? "Cart is empty" : null}
        </DropdownMenuItem>
        {cart.map((product) => {
          return (
            <DropdownMenuItem key={product.id}>
              {product.title}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShoppingCartButton;
