/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const FeatureCard = ({item}) => {
  return (
    <>
      <div className="lg:col-span-4 col-span-12">
        <div className="card relative min-h-[425px] xlg:min-h-[384px] px-[41px] pt-[46px] rounded-[24px] pb-[73px] bg-white">
          <img src={item.img} alt="" />
          <h3 className="xlg:text-[30px] text-[25px] mt-[24px] font-bold text-[#0052CC]">{item.title}</h3>
          <h3 className="xlg:text-[20px] text-[15px] mt-[18px] font-normal text-[#516986]">{item.text}</h3>
          <button className="absolute bottom-[20px] right-[20px]">
            <img src="assets/images/more.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
