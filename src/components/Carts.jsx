import { use } from "react";
import Cart from "./Cart";

const Carts = ({ promise, addedProducts, setAddedProducts }) => {
  const data = use(promise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4">
      {data.map((cart) => (
        <Cart
          addedProducts={addedProducts}
          setAddedProducts={setAddedProducts}
          key={cart.id}
          cart={cart}
        />
      ))}
    </div>
  );
};

export default Carts;
