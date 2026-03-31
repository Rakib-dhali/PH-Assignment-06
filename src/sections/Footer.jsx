import React from "react";

const Footer = () => {
  return (
    <div className="max-w-400 py-10 md:pt-30 sm:px-7 md:px-10 lg:px-20 xl:px-30 2xl:px-40 bg-[#101727] text-white/80">
      <div className="flex  items-center">
        <div className="grid grid-cols-2 lg:grid-cols-5 items-center gap-10 ">
          <div className=' col-span-2 lg:col-span-1 md:text-left text-center space-y-4 className="text-white font-medium text-xl"'>
            <h1 className="font-bold text-3xl mf:text-5xl text-white">
              DigiTools
            </h1>
            <p>
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="text-white font-medium text-xl">Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integration</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="text-white font-medium text-xl">company</li>
            <li>About </li>
            <li>Blog</li>
            <li>Careers </li>
            <li>Press</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="text-white font-medium text-xl">Resources </li>
            <li>Documentation</li>
            <li>help center</li>
            <li>Community</li>
            <li>contact</li>
          </ul>
          <div className="space-y-5">
            <h1 className="text-white text-4xl">social Links </h1>
            <ul className="flex items-start lg:items-center gap-4">
              <li className="bg-white p-3 rounded-full">
                <img src="/assets/icons/ig.png" alt="" />
              </li>
              <li className="bg-white p-3 rounded-full">
                <img src="/assets/icons/facebook.png" alt="" />
              </li>
              <li className="bg-white p-3 rounded-full">
                <img src="/assets/icons/x.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-10 "/>
    <div className="flex justify-between mt-10">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex items-center justify-center gap-3">
            <p>Privacy Policy</p>
            <p>Terms of service</p>
            <p>Cookies</p>
        </div>
    </div>
    </div>
  );
};

export default Footer;
