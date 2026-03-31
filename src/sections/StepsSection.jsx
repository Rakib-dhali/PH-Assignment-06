
const StepsSection = () => {
  return (
    <div className="max-w-400 bg-[#F9FAFC] py-10 md:py-30 sm:px-7 md:px-10 lg:px-20 xl:px-30 2xl:px-40 flex flex-col gap-10 items-center">
        <div className=" space-y-4">
            <h2 className="font-extrabold text-4xl md:text-5xl   text-[#101727]">Get Started in 3 Steps</h2>
            <p className=" leading-5 text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-5">
            <div className="flex-center flex-col relative gap-5 rounded-2xl border-2 border-[#F1F1F1] bg-white  px-6 py-20" >
                <div className="absolute bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-sm top-4 right-4 rounded-full size-15 flex-center"> 01</div>
                <div className="bg-linear-to-r from-[#4F39F610] to-[#9514FA10] rounded-full flex-center p-5" >
                <img src="/assets/user.png" alt="" /></div>
                <h2 className="font-extrabold text-2xl text-[#101727] text-center">Create Account</h2>
                <p className="leading-5 text-center text-balance text-[#627382]">Sign up for free in seconds. No credit card required to get started.</p>
            </div>

            <div className="flex-center flex-col relative gap-5 rounded-2xl border-2 border-[#F1F1F1] bg-white px-6 py-20" >
                <div className="absolute bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-sm top-4 right-4 rounded-full size-15 flex-center"> 02</div>
                <div className="bg-linear-to-r from-[#4F39F610] to-[#9514FA10] rounded-full flex-center p-5">
                <img src="/assets/package.png" alt="" /></div>
                <h2 className="font-extrabold text-2xl text-[#101727] text-center">Choose Products</h2>
                <p className="leading-5 text-center text-balance text-[#627382]">Browse our catalog and select the tools that fit your needs.</p>
            </div>
            <div className=" flex-center flex-col relative gap-5 rounded-2xl border-2 border-[#F1F1F1] bg-white px-6 py-20" >
                <div className="absolute bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-sm top-4 right-4 rounded-full size-15 flex-center"> 03</div>
                <div className="bg-linear-to-r from-[#4F39F610] to-[#9514FA10] rounded-full flex-center p-5">
                <img src="/assets/rocket.png" alt="" /></div>
                <h2 className="font-extrabold text-2xl text-[#101727] text-center">Start Creating</h2>
                <p className="leading-5 text-center text-balance text-[#627382]">Download and start using your premium tools immediately.</p>
            </div>
            
        </div>
    </div>
  )
}

export default StepsSection