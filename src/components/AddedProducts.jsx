import { toast } from "react-toastify";
import EmptyCart from "./EmptyCart";

const AddedProducts = ({ addedProducts, setAddedProducts, setToggleBtn }) => {
  const deleteProduct = (product) => {
    const filteredProducts = addedProducts.filter(
      (added) => added.name !== product.name,
    );
    setAddedProducts(filteredProducts);
    toast.warn("item removed from the cart")
  };

  const handleProceed = () => {
    setAddedProducts([]);
    toast.success("Payment successful")
  }

  const total = addedProducts.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className=" w-full border-2 p-5 md:p-8 lg:p-10 rounded-2xl border-[#f2f2f2] flex flex-col gap-10 items-center">
      {addedProducts.length === 0 ? (
        <EmptyCart setToggleBtn={setToggleBtn} />
      ) : (
        <div className="w-full flex flex-col gap-4 ">
          <h2 className="text-2xl font-bold text-[#101727]">Your Cart</h2>
          <div className="flex flex-col gap-4">
            {addedProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between gap-4 bg-[#F9FAFC] rounded-2xl p-5 "
              >
                <div className=" flex gap-4 rounded-2xl w-full ">
                  <div className=" border flex-center rounded-full size-15 border-[#F2F2F2]">
                    <img
                      className="size-8"
                      src={product.icon}
                      alt={product.name}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-xl text-[#101727]">
                      {product.name}
                    </h2>
                    <p className="text-[#627382 font-medium leading-5]">
                      ${product.price}
                    </p>
                  </div>
                </div>
                <div
                  className="cursor-pointer font-semibold text-[#FF3980]"
                  onClick={() => deleteProduct(product)}
                >
                  Remove
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#627382]">Total:</p>
            <p className="font-bold text-[#101727] text-2xl">
              ${total.toFixed(2)}
            </p>
          </div>

          <button
            className="font-bold  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-4 text-center rounded-full"
            onClick={() => handleProceed()}
          >
            Proceed to checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default AddedProducts;
