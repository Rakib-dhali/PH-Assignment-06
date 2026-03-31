import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="max-w-400 py-10 md:py-30 sm:px-7 md:px-10 lg:px-20 xl:px-30 2xl:px-40 flex flex-col gap-6">
      <h1 className="text-center text-[#101727] text-3xl  md:text-5xl font-extrabold">
        Simple, Transparent Pricing
      </h1>
      <p className="leading-5 text-center text-[#627382]">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className=" items-center justify-center gap-10 grid grid-cols-1 md:grid-cols-3">
        <div className="border-2 border-[#f2f2f2] rounded-2xl text-left flex flex-col gap-4 bg-[#F9FAFC] p-6">
        <div>
          <h2 className="text-[#101727] font-bold  text-2xl">Starter </h2>
          <p className="text-[#627382]">Perfect for getting started</p>
        </div>
        <h1 className="text-[#101727] font-bold text-[40px]">
          $0 <span className="text-xl text-[#627382] font-normal">/Month</span>
        </h1>
        <ul className="flex flex-col gap-3 text-[#627382]">
          <li>
            <FaCheck color="#30B868" /> Access to 10 free tools
          </li>
          <li>
            <FaCheck color="#30B868" /> Basic templates
          </li>
          <li>
            <FaCheck color="#30B868" /> Community support
          </li>
          <li>
            <FaCheck color="#30B868" /> 1 project per month
          </li>
          <li className=" invisible">
            <FaCheck color="#30B868" /> 1 project per month
          </li>
          <li className=" invisible">
            <FaCheck color="#30B868" /> 1 project per month
          </li>
          
        </ul>
        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full py-4 text-white">Get Started For Free</button>
      </div>
      {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh */}
      <div className="relative bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl p-6  flex flex-col gap-4">
        <div className="absolute -top-3 right-[calc(50%-24px)] text-[#BB4D00] bg-[#FEF3C6] rounded-full px-3 py-1.5 font-medium text-sm">Popular</div>
        <div>
          <h2 className="text-white font-bold  text-2xl">Pro </h2>
          <p className="text-white/80">Best for professionals</p>
        </div>
        <h1 className="text-white font-bold text-[40px]">
          $29 <span className="text-xl text-white font-normal">/Month</span>
        </h1>
        <ul className="flex flex-col gap-3 text-white font-medium leading-5">
          <li>
            <FaCheck color="#fff" /> Access to all premium tools
          </li>
          <li>
            <FaCheck color="#fff" /> Unlimited templates
          </li>
          <li>
            <FaCheck color="#fff" /> Priority support
          </li>
          <li>
            <FaCheck color="#fff" /> Unlimited projects
          </li>
          <li>
            <FaCheck color="#fff" /> Cloud sync
          </li>
          <li>
            <FaCheck color="#fff" /> Advanced analytics
          </li>
        </ul>
        <button className="w-full rounded-full py-4 bg-white font-bold"> <p className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-center">Start Pro Trial </p></button>
      </div>
      {/* jjjjjjjjjjjjjjjjjjjjjjjj */}
      <div className="border-2  border-[#f2f2f2] rounded-2xl text-left flex flex-col gap-4 bg-[#F9FAFC] p-6">
        <div>
          <h2 className="text-[#101727] font-bold  text-2xl">Enterprise </h2>
          <p className="text-[#627382]">For teams and businesses</p>
        </div>
        <h1 className="text-[#101727] font-bold text-[40px]">
          $0 <span className="text-xl text-[#627382] font-normal">/Month</span>
        </h1>
        <ul className="flex flex-col gap-3 text-[#627382] ">
          <li>
            <FaCheck color="#30B868" /> Everything in Pro
          </li>
          <li>
            <FaCheck color="#30B868" /> Team collaboration
          </li>
          <li>
            <FaCheck color="#30B868" /> Custom integrations
          </li>
          <li>
            <FaCheck color="#30B868" /> Dedicated support
          </li>
          <li>
            <FaCheck color="#30B868" /> SLA guarantee
          </li>
          <li>
            <FaCheck color="#30B868" /> Custom branding
          </li>
        </ul>
        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full py-4 text-white">Contact Sales</button>
      </div>
      </div>
    </div>
  );
};

export default Pricing;
