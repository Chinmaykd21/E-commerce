import SearchProduct from "./search-product";
import ShoppingCartButton from "./shopping-cart";

const MainNav = () => {
  return (
    <section className="flex justify-between items-center p-8 mb-5">
      <SearchProduct />
      <ShoppingCartButton />
    </section>
  );
};

export default MainNav;
