import Dot from "../components/Dot";
import banner from "/assets/banner.png";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="w-full relative md:max-w-400 p-5 sm:px-7 md:px-10 lg:px-20 xl:px-30 2xl:px-40 md:flex-center md:flex-row flex flex-col my-15 gap-15">
      {/* left */}
      <div className="text-left flex flex-col items-center md:items-start  justify-start gap-4">
        <div className="bg-[#E1E7FF] rounded-full flex-center gap-1.25 px-4 py-2">
          <Dot />
          <span className="font-medium  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </span>
        </div>
        <h1 className="text-center md:text-left font-extrabold leading-15  md:leading-15 lg:leading-21 text-4xl md:text-5xl lg:text-7xl text-[#101727] ">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-lg leading-7 md:text-left text-center text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity{" "}
          
          software—all in one place. Start creating faster 
          Explore Products
        </p>

        <div className="flex-center gap-4">
          <button className="text-white font-bold  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-4">
            Explore Products
          </button>
          <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-0.5 rounded-full flex-center ">
            <div className="flex-center gap-1 rounded-full p-4  bg-white ">
              <img
                className="size-5"
                src="/assets/Play.png"
                alt="play"
              />
              <span className=" font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Watch demo
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* right */}
      <div className="flex-center">
        <img src={banner} alt={banner} />
      </div>
    </div>
  );
};

export default Banner;
