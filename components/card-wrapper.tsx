"use client";
import { FC } from "react";
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
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import useCartStore from "@/store/cart-store";

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
  category,
  className,
}) => {
  const pathName = usePathname();
  const { getProductQuantity, addProduct, removeProduct } = useCartStore();
  const quantity = getProductQuantity(id);
  const handleAddButtonClick = () => {
    const product = {
      id,
      title,
      description,
      image,
      price,
      rating,
      category,
    };
    addProduct(product);
  };

  return (
    <Card className={cn("flex flex-col h-full gap-2 w-full", className)}>
      <CardHeader>
        <Image
          src={image!}
          alt={title!}
          width={350}
          height={250}
          priority={false}
          className={cn("bg-cover h-[250px]", {
            "w-[350px]": pathName === `/products/${id}`,
          })}
        />
      </CardHeader>
      <CardContent
        className={cn("flex flex-col gap-2 h-full", {
          "w-full lg:w-1/3": pathName === `/products/${id}`,
        })}
      >
        <CardTitle
          className={cn({
            "text-2xl pointer-events-none": pathName === `/products/${id}`,
          })}
        >
          <Link href={`/products/${id}`}>{title}</Link>
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {category && (
          <p className="bg-black text-white dark:bg-white dark:text-black font-bold rounded-full text-center">
            {category}
          </p>
        )}
      </CardContent>
      <CardFooter
        className={cn("flex flex-col space-y-3", {
          "w-full lg:w-2/3": pathName === `/products/${id}`,
        })}
      >
        <div
          className={cn("flex flex-col w-full justify-between items-center", {
            "space-y-4": pathName === `/products/${id}`,
          })}
        >
          <div
            className={cn(
              "flex w-full justify-between items-center space-x-2",
              {
                "text-xl": pathName === `/products/${id}`,
              }
            )}
          >
            <p className="text-md font-semibold">Price:</p>
            <p className="text-md font-semibold">${price}</p>
          </div>
          <div
            className={cn(
              "flex w-full justify-between items-center space-x-2",
              {
                "text-xl": pathName === `/products/${id}`,
              }
            )}
          >
            <p className="text-md font-semibold">Reviews:</p>
            {/* TODO: Convert this to stars component */}
            <p>{rating?.rate}</p>
            <p>({rating?.count})</p>
          </div>
        </div>
        {!quantity && (
          <Button className="w-full" onClick={handleAddButtonClick}>
            Add to cart
          </Button>
        )}
        {quantity && quantity > 0 ? (
          <div className="flex justify-around items-center gap-3">
            <Button onClick={() => removeProduct(id)}>-</Button>
            {quantity}
            <Button onClick={handleAddButtonClick}>+</Button>
          </div>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
