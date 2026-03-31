import { Suspense, useState } from "react";
import Carts from "../components/Carts";
import AddedProducts from "../components/AddedProducts";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const promise = fetchData();

const DigitalTools = ({ cartCount, setCartCount }) => {
  const [toggleBtn, setToggleBtn] = useState("product");
  const [addedProducts, setAddedProducts] = useState([]);
  setCartCount(addedProducts.length);

  return (
    <div className="max-w-400 py-10 md:py-30 sm:px-7 md:px-10 lg:px-20 xl:px-30 2xl:px-40 flex flex-col gap-10 items-center">
      <div className="flex-center flex-col gap-4 text-center ">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-[#101727]">
          Premium Digital Tools
        </h2>
        <p className="text-[#627382] leading-5">
          Choose from our curated collection of premium digital products <br />
          designed to boost your productivity and creativity.
        </p>
        <div className="flex-center border border-[#F6F6F6] rounded-full p-1">
          <button
            onClick={() => setToggleBtn("product")}
            className={`${toggleBtn === "product" ? " bg-linear-to-r from-[#4F39F6] to-[#9514FA] drop-shadow-[0_3px_8px_rgba(97,7,236,0.3)] text-white " : " text-[#25065D] font-medium"} rounded-full  px-7 py-3.5 `}
          >
            Product
          </button>
          <button
            onClick={() => setToggleBtn("cart")}
            className={`${toggleBtn === "cart" ? " bg-linear-to-r from-[#4F39F6] to-[#9514FA] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-white " : " text-[#25065D] font-medium"} rounded-full px-7 py-3.5 `}
          >
            Cart({cartCount})
          </button>
        </div>
      </div>
      <Suspense fallback={<div>loading...</div>}>
        {toggleBtn === "product" ? (
          <Carts
            addedProducts={addedProducts}
            setAddedProducts={setAddedProducts}
            promise={promise}
          />
        ) : (
          <AddedProducts
            setAddedProducts={setAddedProducts}
            addedProducts={addedProducts}
            setToggleBtn={setToggleBtn}
          />
        )}
      </Suspense>
    </div>
  );
};

export default DigitalTools;
