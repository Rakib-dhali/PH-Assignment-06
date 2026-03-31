const Stats = () => {
  return (
    <div className="max-w-400 bg-[#4F39F6] py-15 sm:px-7 md:px-10 lg:px-20 xl:px-30 2xl:px-40 flex items-center justify-around ">
      <div className="flex-center flex-col gap-3">
        <h2 className="font-extrabold  lg:text-6xl md:text-4xl text-3xl text-white">50K+</h2>
        <p className="font-medium text-xl md:text-2xl text-white/80 ">Active Users</p>
      </div>
      <div className="w-1 h-20 bg-gray-400"></div>
      <div className="flex-center flex-col gap-3">
        <h2 className="font-extrabold  lg:text-6xl md:text-4xl text-3xl text-white">200+</h2>
        <p className="font-medium text-xl md:text-2xl text-white/80 ">Premium Tools</p>
      </div>
      <div className="w-1 h-20 bg-gray-400"></div>
      <div className="flex-center flex-col gap-3">
        <h2 className="font-extrabold  lg:text-6xl md:text-4xl text-3xl text-white">4.9</h2>
        <p className="font-medium text-xl md:text-2xl text-white/80 ">Ratings</p>
      </div>
    </div>
  );
};

export default Stats;
