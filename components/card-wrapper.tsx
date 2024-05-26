import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import type { Product } from "@/lib/data";
import Image from "next/image";

const CardWrapper: FC<Product> = ({
  title,
  description,
  image,
  price,
  rating,
}) => {
  return (
    <Card className="flex flex-col h-full gap-2 w-full">
      <CardHeader className="h-[150px]">
        <Image src={image!} alt={title!} width={55} height={55} />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle>{title}</CardTitle>
        {description ?? <CardDescription>{description}</CardDescription>}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p>{price}</p>
        <div className="flex justify-between items-center gap-2">
          <p>{rating?.rate}</p>
          <p>{rating?.count}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
