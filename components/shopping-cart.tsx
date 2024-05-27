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
import CartWrapper from "./cart-wrapper";

const ShoppingCartButton = () => {
  const { cart, setCart } = useCartContext();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <ShoppingCart />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {cart.length === 0 ? (
          <DropdownMenuItem>
            <CartWrapper title="Cart is empty" clasName="p-8 w-full" />
          </DropdownMenuItem>
        ) : null}
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
        {cart.length !== 0 ?? (
          <DropdownMenuItem>
            <Button className="w-full" onClick={() => setCart([])}>
              Clear Cart
            </Button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShoppingCartButton;
