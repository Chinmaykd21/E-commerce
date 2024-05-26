import { Rating } from "@/components/card-wrapper";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image?: string;
  rating: Rating;
};

export const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data: Product[] = await response.json();

  if (!data)
    return {
      error: "Something went wrong!",
    };

  return {
    data,
  };
};
