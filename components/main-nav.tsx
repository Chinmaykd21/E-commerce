import SearchProduct from "./search-product";
import ShoppingCartButton from "./shopping-cart";
import { ToggleTheme } from "./toggle-theme";

const MainNav = () => {
  return (
    <section className="flex justify-between items-center p-8 mb-5">
      <SearchProduct />
      <div className="flex justify-between items-center space-x-3">
        <ShoppingCartButton />
        <ToggleTheme />
      </div>
    </section>
  );
};

export default MainNav;
