import { Suspense } from "react";
import ShoppingCartButton from "./shopping-cart";
import { ToggleTheme } from "./toggle-theme";
import { SearchProduct } from "./search-product-simpler";

const MainNav = () => {
  return (
    <section className="flex flex-col-reverse justify-between items-center sm:flex-row p-8 mb-5 gap-3 space-x-2">
      {/* TODO: Fallback component here */}
      <Suspense>
        <SearchProduct />
      </Suspense>
      <div className="flex w-full justify-between items-center space-x-3 sm:w-1/12">
        <ShoppingCartButton />
        <ToggleTheme />
      </div>
    </section>
  );
};

export default MainNav;
