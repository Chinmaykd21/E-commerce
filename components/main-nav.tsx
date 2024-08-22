import { Suspense } from "react";
import ShoppingCartButton from "./shopping-cart";
import { ToggleTheme } from "./toggle-theme";
import { SearchProduct } from "./search-product-simpler";

const MainNav = () => {
  return (
    <section className="flex flex-col-reverse p-8 mb-5 gap-3 justify-between items-center space-x-2">
      {/* TODO: Fallback component here */}
      <Suspense>
        <SearchProduct />
      </Suspense>
      <div className="flex justify-between items-center space-x-3">
        <ShoppingCartButton />
        <ToggleTheme />
      </div>
    </section>
  );
};

export default MainNav;
