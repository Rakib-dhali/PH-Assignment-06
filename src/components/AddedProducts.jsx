import EmptyCart from "./EmptyCart";

const AddedProducts = ({ addedProducts, setAddedProducts }) => {
  const deleteProduct = (product) => {
    const filteredProducts = addedProducts.filter(
      (added) => added.name !== product.name,
    );
    setAddedProducts(filteredProducts);
  };

  const total = addedProducts.reduce((sum, p) => sum + p.price, 0);

  return (
    <div>
      {addedProducts.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="border-2 p-5 md:p-8 lg:p-10 rounded-2xl border-[#f2f2f2]">
          <h2 className="text-2xl font-bold text-[#101727]">Your Cart</h2>
          {addedProducts.map((product) => (
            <div key={product.id} className="flex items-center justify-between">
              <div className=" bg-red-200 flex gap-4 rounded-2xl w-full " >
                <div className=" border flex-center rounded-full size-15 border-[#F2F2F2]">
                <img className="size-8" src={product.icon} alt={product.name} />
              </div>
              <div className="flex flex-col gap-2"><h2>{product.name}</h2>
              <p>${product.price}</p></div>
              </div>
              <div className="cursor-pointer" onClick={() => deleteProduct(product)}>Remove</div>
            </div>
          ))}
          <p>Total: ${total.toFixed(2)}</p>

          <button onClick={() => setAddedProducts([])}>
            Proceed to checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default AddedProducts;
