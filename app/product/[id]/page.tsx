import type { Product } from "@/lib/data";

const Product = async ({ params }: { params: { id: string } }) => {
  if (!params?.id) return null;

  return <div>product {params.id}</div>;
};

export default Product;
