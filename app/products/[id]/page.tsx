import CardWrapper from "@/components/card-wrapper";
import { getProduct, type Product } from "@/lib/data";

const Product = async ({ params }: { params: { id: string } }) => {
  if (!params?.id) return null;

  const { data: product, error } = await getProduct(params.id);

  if (error || !product) return null;

  return (
    <>
      <CardWrapper
        id={product.id}
        category={product.category}
        description={product.description}
        image={product.image}
        price={product.price}
        title={product.title}
        rating={product.rating}
        className="flex p-8 w-1/2"
      />
    </>
  );
};

export default Product;
