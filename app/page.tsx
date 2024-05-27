import Products from "@/components/products";
import { filterProductByName, getProducts } from "@/lib/data";

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { error, data: products } = searchParams?.search
    ? await filterProductByName(searchParams.search)
    : await getProducts();

  // TODO:  handle errors better
  if (error || !products) return null;

  return (
    <main className="px-8">
      <Products products={products} />
    </main>
  );
}
