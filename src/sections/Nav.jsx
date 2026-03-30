import { FiShoppingCart } from "react-icons/fi";
import Menu from "../components/Menu";

const Nav = () => {
  return (
    <div className="w-full relative md:max-w-400 border-b border-b-[#F2F2F2] py-2 md:py-4 p-5 sm:px-7 md:px-10 lg:px-20 xl:px-30 2xl:px-40 flex items-center justify-between">
      <div className="flex items-center justify-center gap-3">
        <Menu />
        <h1 className="md:w-45 w-27 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-2xl ">
          DigiTools
        </h1>
      </div>
      <div className="hidden lg:block">
        <ul className="leading-[1.2] font-semibold text-[#101727] flex items-center justify-center gap-5 lg:gap-8 ">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <div className="cursor-pointer relative w-fit">
          <FiShoppingCart className="text-2xl" />
          <span className="absolute -top-2 -right-2 z-10 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            9
          </span>
        </div>
        <button className="cursor-pointer text-[#101727] leading-[1.2] font-bold">
          Login
        </button>
        <button className="font-semibold text-nowrap font-inter cursor-pointer text-white bg-linear-to-r  from-[#4F39F6] to-[#9514FA] md:px-4 md:py-3 py-2 px-3 rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Nav;
