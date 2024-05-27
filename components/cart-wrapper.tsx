import React, { FC } from "react";
import { Card, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

type CartWrapperProps = {
  title: string;
  clasName?: string;
};

const CartWrapper: FC<CartWrapperProps> = ({ title, clasName }) => {
  return (
    <Card className={cn(clasName)}>
      <CardTitle>{title}</CardTitle>
    </Card>
  );
};

export default CartWrapper;
