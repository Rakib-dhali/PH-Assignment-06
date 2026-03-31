import cartImage from "/assets/cart.svg";

const EmptyCart = ({ setToggleBtn }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-6 text-center">
      <img src={cartImage} alt="cartImage" />
      <h2 className="text-xl font-medium text-gray-900 mb-2">
        Your cart is empty
      </h2>
      <p className="text-sm text-gray-500 mb-8 max-w-xs">
        Looks like you haven't added anything yet. Start shopping to fill it up!
      </p>

      <button
        onClick={() => setToggleBtn("product")}
        className="px-6 py-2.5 rounded-lg text-sm font-medium text-white"
        style={{ background: "#7226FB" }}
      >
        Browse products
      </button>
    </div>
  );
};

export default EmptyCart;
