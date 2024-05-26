export type Rating = {
  rate?: number;
  count?: number;
};

// TODO: Update type so that at least some properties are required
export type Product = {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: Rating;
};

// TODO: Rate limit retries
// Update return type on function
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