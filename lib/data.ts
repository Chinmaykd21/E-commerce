export type Rating = {
  rate?: number;
  count?: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating: Rating;
  quantity?: number;
};

export const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=8", {
    signal: AbortSignal.timeout(3000),
  });
  if (!response.ok) {
    return {
      error: "Something went wrong while fetching data",
    };
  }
  const data: Product[] = await response.json();

  if (!data)
    return {
      error: "Something went wrong!",
    };

  return {
    data,
  };
};

export const getProduct = async (id: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    signal: AbortSignal.timeout(3000),
  });
  if (!response.ok) {
    return {
      error: "Something went wrong while fetching data",
    };
  }
  const data = await response.json();

  if (!data) {
    return {
      error: "Something went wrong!",
    };
  }

  return {
    data,
  };
};

export const filterProductByName = async (searchQuery: string) => {
  const { error, data: products } = await getProducts();

  if (error) {
    return {
      error: "Something went wrong!",
    };
  }

  const filteredProducts = products?.filter((product) =>
    product.title?.includes(searchQuery)
  );

  return {
    data: filteredProducts,
  };
};
