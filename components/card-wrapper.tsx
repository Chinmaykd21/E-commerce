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
import Link from "next/link";
import { cn } from "@/lib/utils";

type CardWrapperProps = Product & {
  className?: string;
};

const CardWrapper: FC<CardWrapperProps> = ({
  id,
  title,
  description,
  image,
  price,
  rating,
  className,
}) => {
  return (
    <Link href={`/products/${id}`} className={cn(className)}>
      <Card className={cn("flex flex-col h-full gap-2 w-full")}>
        <CardHeader className="h-[150px]">
          <Image src={image!} alt={title!} width={55} height={55} />
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <CardTitle>{title}</CardTitle>
          {description ?? <CardDescription>{description}</CardDescription>}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex w-full justify-between items-center">
            <div className="flex justify-between items-center space-x-2">
              <p className="text-md font-semibold">Price:</p>
              <p className="text-md font-semibold">${price}</p>
            </div>
            <div className="flex justify-between items-center space-x-2">
              <p className="text-md font-semibold">Reviews:</p>
              {/* TODO: Convert this to stars component */}
              <p>{rating?.rate}</p>
              <p>({rating?.count})</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardWrapper;
