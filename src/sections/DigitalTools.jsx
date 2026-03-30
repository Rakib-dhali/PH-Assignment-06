import { Suspense, useState } from "react";
import Carts from "../components/Carts";

const DigitalTools = () => {
  const fetchData = async () => {
    const res = await fetch("/data.json");
    return res.json();
  };
  const promise = fetchData();

  const [toggleBtn, setToggleBtn] = useState("product");

  return (
    <div className="max-w-400 py-10 md:py-30 sm:px-7 md:px-10 lg:px-20 xl:px-30 2xl:px-40 flex flex-col gap-10 items-center">
      <div className="flex-center flex-col gap-4 text-center ">
        <h2 className="text-5xl font-extrabold text-[#101727]">
          Premium Digital Tools
        </h2>
        <p className="text-[#627382] leading-5">
          Choose from our curated collection of premium digital products <br />
          designed to boost your productivity and creativity.
        </p>
        <div className="flex-center border border-[#F6F6F6] rounded-full p-1">
          <button
            onClick={() => setToggleBtn("product")}
            className={`${toggleBtn === "product" ? " bg-linear-to-r from-[#4F39F6] to-[#9514FA] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-white " : " text-[#25065D] font-medium"} rounded-full p-4  `}
          >
            Product
          </button>
          <button
            onClick={() => setToggleBtn("cart")}
            className={`${toggleBtn === "cart" ? " bg-linear-to-r from-[#4F39F6] to-[#9514FA] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-white " : " text-[#25065D] font-medium"} rounded-full p-4  `}
          >
            Cart(4)
          </button>
        </div>
      </div>
      <Suspense fallback={<div>loading...</div>}>
      <Carts promise={promise}/>
      </Suspense>
    </div>
  );
};

export default DigitalTools;
