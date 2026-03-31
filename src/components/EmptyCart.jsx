

   const EmptyCart = ({ onBrowse }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="relative mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-32 h-32"
        > </svg>
      </div>

      <h2 className="text-xl font-medium text-gray-900 mb-2">
        Your cart is empty
      </h2>
      <p className="text-sm text-gray-500 mb-8 max-w-xs">
        Looks like you haven't added anything yet. Start shopping to fill it up!
      </p>

      <button
        onClick={onBrowse}
        className="px-6 py-2.5 rounded-lg text-sm font-medium text-white"
        style={{ background: "#7226FB" }}
      >
        Browse products
      </button>
    </div>
  );
};

export default EmptyCart;
