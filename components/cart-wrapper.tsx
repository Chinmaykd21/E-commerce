import React, { FC } from "react";
import { Card, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

type CartWrapperProps = {
  title: string;
  quantity?: number;
  clasName?: string;
};

const CartWrapper: FC<CartWrapperProps> = ({ title, clasName, quantity }) => {
  return (
    <Card
      className={cn(
        "flex flex-col gap-3 justify-between items-center",
        clasName
      )}
    >
      <CardTitle>{title}</CardTitle>
      {quantity && quantity > 0 && (
        <span className="text-xs dark:text-gray-300 ml-2">
          Quantity: <span className=" dark:text-gray-300">{quantity}</span>
        </span>
      )}
    </Card>
  );
};

export default CartWrapper;
