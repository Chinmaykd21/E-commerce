import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const ShoppingCartButton = () => {
  return (
    <section>
      <Button variant="secondary">
        <ShoppingCart />
      </Button>
    </section>
  );
};

export default ShoppingCartButton;
