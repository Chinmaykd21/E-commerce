"use client";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import CartWrapper from "./cart-wrapper";
import useCartStore from "@/store/cart-store";

const ShoppingCartButton = () => {
  const { cart, clearCart } = useCartStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <ShoppingCart />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {cart.length === 0 && (
          <DropdownMenuItem>
            <CartWrapper title="Cart is empty" clasName="p-8 w-full" />
          </DropdownMenuItem>
        )}
        {cart.map((product) => {
          return (
            <DropdownMenuItem key={product.id}>
              <CartWrapper
                title={product.title as string}
                clasName="p-8 w-full"
              />
            </DropdownMenuItem>
          );
        })}
        {cart.length !== 0 && (
          <DropdownMenuItem>
            <Button className="w-full" onClick={() => clearCart()}>
              Clear Cart
            </Button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShoppingCartButton;
