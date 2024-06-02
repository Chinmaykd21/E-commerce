import CardWrapper from "@/components/card-wrapper";
import { getProduct, type Product } from "@/lib/data";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import Link from "next/link";

const Product = async ({ params }: { params: { id: string } }) => {
  if (!params?.id) return null;

  const { data: product, error } = await getProduct(params.id);

  if (error || !product) return null;

  return (
    <section className="px-8 pt-0">
      <div className="mb-5">
        <Link href="/" className="flex gap-x-3">
          <ArrowLeft />
          Back to products
        </Link>
      </div>
      <CardWrapper
        id={product.id}
        category={product.category}
        description={product.description}
        image={product.image}
        price={product.price}
        title={product.title}
        rating={product.rating}
        className="p-8 md:flex-row"
      />
    </section>
  );
};

export default Product;
