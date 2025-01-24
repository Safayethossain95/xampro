const HeroSection = () => {
  return (
    <>
      <div className="herosection   bg-[#0052CC]">
        <div className="container grid md:grid-cols-1 lg:grid-cols-2  pt-[133px] pb-[98px]">
          <div className="text">
            <h4 className="font-sora font-semibold text-[40px] xlg:text-[64px] text-white">
              Complete your{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-yellow-500 h-[25px] top-1/2"></span>
                <span className="relative z-10">IELTS </span>
              </span>{" "}
              preparation at home.
            </h4>
            <h6 className="font-sora font-normal text-[15px] xlg:text-[20px] text-[#F8F8FB] opacity-[87%]">
              Get prepared to ace the competitive exams. It&apos;s just so easy,
              you choose your path to score your destined one.
            </h6>
            <div className="buttons mt-[36px] flex items-center gap-[32px]">
              <button className="text-[#0052cc] rounded-[14px] text-[16px] font-bold bg-white w-[205px] h-[64px]">Start Free Pack</button>
              <div className="secondbtn flex items-center gap-[20px] h-[52px]">
                <img src="assets/images/play-button.png" alt="" />
                <p className="font-sora font-semibold underline text-[10px] xlg:text-[16px] text-white">See how it&apos;s work</p>
              </div>
            </div>
          </div>
          <div className="image ">
            <img
              className="lg:-mt-[80px]"
              src="assets/images/hero-image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
