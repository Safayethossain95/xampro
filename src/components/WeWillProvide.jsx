

const WeWillProvide = () => {
  return (
    <>

    <div className="relative bg-cover bg-center ">
    <div className="absolute  w-full h-full top-0 -z-1">
      <img className="w-full h-full" src="assets/images/willprovidebg.png" alt="" />
    </div>
    <div className="pt-[90px] relative text-center">
        <h4 className="font-semibold font-sora text-[40px] text-white mb-[55px]">We will provide you</h4>
    </div>
    <div className="relative container pb-[100px]">

         <div className=" flex flex-col lg:flex-row items-center gap-2 text-white">
      {/* Item 1 */}
      <div className="flex flex-col items-center text-center flex-grow w-full">
        <div className="bg-white flex flex-col justify-center items-center p-4 h-[294px] w-full xlg:min-w-[250px] lg:w-full rounded-[24px] ">
          <img className="w-[86px]" src="assets/images/wwp1.png" alt="Top Facilitator" />
          <h4 className="mt-4 font-bold text-[20px] text-[#253642] ">
          Full exam packages
        </h4>
        </div>
        
      </div>

      {/* Plus sign */}
      
      <img src="assets/images/Plus.png" alt="" />
    

      {/* Item 2 */}
      <div className="flex flex-col items-center text-center flex-grow w-full">
        <div className="bg-white flex flex-col justify-center items-center p-4 h-[294px] w-full xlg:min-w-[250px] lg:w-full rounded-[24px] ">
          <img className="w-[86px]" src="assets/images/wwp2.png" alt="Top Facilitator" />
          <h4 className="mt-4 font-bold text-[20px] text-[#253642] ">
          Top facilitator
        </h4>
        </div>
        
      </div>

      {/* Plus sign */}
      <img src="assets/images/Plus.png" alt="" />

      {/* Item 3 */}
      <div className="flex flex-col items-center text-center flex-grow w-full">
        <div className="bg-white flex flex-col justify-center items-center p-4 h-[294px] w-full xlg:min-w-[250px] lg:w-full rounded-[24px] ">
          <img className="w-[86px]" src="assets/images/wwp3.png" alt="Top Facilitator" />
          <h4 className="mt-4 font-bold text-[20px] text-[#253642] ">
          Besk tricks <br/> for the exam
        </h4>
        </div>
        
      </div>

      {/* Equal sign */}
      <img  src="assets/images/Equal.png" alt="" />

      {/* Item 4 */}
      <div className="flex flex-col items-center text-center flex-grow w-full">
        <div className="bg-white flex flex-col justify-center items-center p-4 h-[294px] w-full xlg:min-w-[250px] lg:w-full rounded-[24px] ">
          <img className="w-[86px]" src="assets/images/wwp4.png" alt="Top Facilitator" />
          <h4 className="mt-4 font-bold text-[20px] text-[#253642] ">
          Highest <br/> scores
        </h4>
        </div>
        
      </div>

    </div>
    </div>
    </div>
    </>
  )
}

export default WeWillProvide