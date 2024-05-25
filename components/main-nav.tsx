import SearchProduct from "./search-product";
import ShoppingCart from "./shopping-cart";

const MainNav = () => {
  return (
    <section className="flex justify-between items-center mb-5">
      <SearchProduct />
      <ShoppingCart />
    </section>
  );
};

export default MainNav;
