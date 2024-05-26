import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export type Rating = {
  rate: number;
  count: number;
};

export type CardWrapperProps = {
  title: string;
  price: number;
  description: string;
  category?: string;
  image?: string;
  rating: Rating;
};

const CardWrapper: FC<CardWrapperProps> = ({
  title,
  description,
  price,
  rating,
}) => {
  return (
    <Card>
      <CardHeader>
        <p>Card Image</p>
        {/* <Image></Image> */}
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between items-center">
          <p>{price}</p>
          <div className="flex justify-between items-center">
            <p>{rating.rate}</p>
            <p>{rating.count}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
