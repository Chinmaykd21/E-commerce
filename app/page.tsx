import Products from "@/components/products";
import { filterProductByName, getProducts } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { error, data: products } = searchParams?.search
    ? await filterProductByName(searchParams.search)
    : await getProducts();

  if (error) {
    return notFound();
  }

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <main className="px-8">
      <Products products={products} />
    </main>
  );
}
