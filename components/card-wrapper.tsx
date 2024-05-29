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
  const { cart, addProduct, updateQuantity } = useCartStore();
  const handleButtonClick = () => {
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

  const handleIncreaseItemQuantity = () => {
    // increaseItemQuantity(id);
    console.log("****", cart);
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
        {description && <CardDescription>{description}</CardDescription>}
        {category && <p>{category}</p>}
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
        {cart.length === 0 && (
          <Button className="self-end" onClick={handleButtonClick}>
            Add to cart
          </Button>
        )}
        {cart.length !== 0 && (
          <div className="flex items-center justify-evenly w-full">
            <Button
              size="icon"
              onClick={() => console.log("***** count decreased")}
              disabled={cart.length === 0}
            >
              -
            </Button>
            <p>{cart.length}</p>
            <Button size="icon" onClick={handleIncreaseItemQuantity}>
              +
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
