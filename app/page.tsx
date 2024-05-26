import Products from "@/components/products";
import { getProducts } from "@/lib/data";

export default async function Home() {
  const { error, data: products } = await getProducts();

  // TODO:  handle errors better
  if (error || !products) return null;

  return (
    <main className="px-8">
      <Products products={products} />
    </main>
  );
}
