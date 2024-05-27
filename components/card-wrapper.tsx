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
import { useCartContext } from "@/context/cart-provider";

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
  const { cart, setCart } = useCartContext();

  const addProductToCart = () => {
    const productToAdd = {
      id,
      title,
      description,
      image,
      price,
      rating,
      category,
    };
    const newCart = [...cart];
    const isPresent = newCart.find((product) => product.id === productToAdd.id);
    if (isPresent) {
      newCart.map((product) => {
        return product.id === productToAdd.id
          ? { ...product, quantity: (product.quantity as number) + 1 }
          : product;
      });
      setCart(newCart);
    } else {
      setCart([...newCart, { ...productToAdd }]);
    }
  };

  return (
    <Card className={cn("flex flex-col h-full gap-2 w-full", className)}>
      <CardHeader>
        <Image
          src={image!}
          alt={title!}
          width={100}
          height={55}
          priority={false}
          className="w-auto h-[250px]"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-2 h-full">
        <CardTitle
          className={cn({ "text-3xl": pathName === `/products/${id}` })}
        >
          <Link href={`/products/${id}`}>{title}</Link>
        </CardTitle>
        {description ?? <CardDescription>{description}</CardDescription>}
        {category ?? <p>{category}</p>}
      </CardContent>
      <CardFooter className="flex flex-col space-y-3">
        <div className="flex flex-col w-full justify-between items-center lg:flex-row lg:space-x-2">
          <div className="flex w-full justify-between items-center space-x-2">
            <p className="text-md font-semibold">Price:</p>
            <p className="text-md font-semibold">${price}</p>
          </div>
          <div className="flex w-full justify-between items-center space-x-2">
            <p className="text-md font-semibold">Reviews:</p>
            {/* TODO: Convert this to stars component */}
            <p>{rating?.rate}</p>
            <p>({rating?.count})</p>
          </div>
        </div>
        <Button className="self-end" onClick={addProductToCart}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
