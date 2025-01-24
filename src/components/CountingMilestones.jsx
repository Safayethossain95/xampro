

const CountingMilestones = () => {
  return (
    <>
        <div className="container">
            <div className="countermilestones shadow-md lg:px-[74px] py-[40px] lg:py-0 grid grid-cols-1 lg:grid-cols-3 rounded-[22px] -mt-[98px]  min-h-[250px] w-full bg-white">
                <div className="div h-full flex flex-col justify-center items-center">
                    <h3 className="font-sora text-[60px] font-semibold text-[#253642]">60+</h3>
                    <p className="font-sora text-[20px] text-[#516986]">Packages available</p>
                </div>
                <div className="div h-full flex flex-col justify-center items-center">
                    <div className="div h-[126px] text-center w-full border-r border-l border-r-[#D9D9D9] border-l-[#D9D9D9]">
                    <h3 className="font-sora text-[60px] font-semibold text-[#253642]">50+</h3>
                    <p className="font-sora text-[20px] text-[#516986]">Students Joined</p>
                    </div>
                </div>
                <div className="div h-full flex flex-col justify-center items-center">
                    <h3 className="font-sora text-[60px] font-semibold text-[#253642]">50+</h3>
                    <p className="font-sora text-[20px] text-[#516986]">Expert Facilitators</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CountingMilestones