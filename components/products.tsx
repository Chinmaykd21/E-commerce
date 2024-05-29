import { Product } from "@/lib/data";
import CardWrapper from "./card-wrapper";
import { FC } from "react";

export type ProductsProps = {
  products: Product[];
};

const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <section className="grid grid-cols-1 gap-4 items-center sm:grid-cols-3 xl:grid-cols-4">
      {products?.map((product) => {
        return (
          <CardWrapper
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={{
              count: product.rating?.count,
              rate: product.rating?.rate,
            }}
            quantity={product.quantity ? product.quantity : 0}
            className="h-full"
          />
        );
      })}
    </section>
  );
};

export default Products;
