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
  const totalItems = cart.reduce(
    (total, item) => (item.quantity ? total + item.quantity : total),
    0
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {totalItems}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {cart.length === 0 && (
          <DropdownMenuItem>
            <CartWrapper title="Cart is empty" clasName="p-8 w-full" />
          </DropdownMenuItem>
        )}
        {cart.map((item) => {
          return (
            <DropdownMenuItem key={item.id}>
              <CartWrapper
                title={item.title as string}
                clasName="p-8 w-full flex justify-center items-center"
                quantity={item.quantity}
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
