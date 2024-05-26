import { Product } from "@/lib/data";
import CardWrapper from "./card-wrapper";
import { FC } from "react";

export type ProductsProps = {
  products: Product[];
};

const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <section className="grid grid-cols-4 gap-4 items-center">
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
          />
        );
      })}
    </section>
  );
};

export default Products;
