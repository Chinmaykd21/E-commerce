import { getProducts } from "@/lib/data";
import CardWrapper from "./card-wrapper";

const Products = async () => {
  const { error, data: products } = await getProducts();
  // TODO: Do a better error handling
  if (error) return null;

  return (
    <section className="grid grid-cols-4 gap-4 h-full items-center">
      {products?.map((product) => {
        return (
          <CardWrapper
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={{
              count: product.rating.count,
              rate: product.rating.rate,
            }}
          />
        );
      })}
    </section>
  );
};

export default Products;
