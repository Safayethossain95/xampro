/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Star } from "lucide-react"; // Use the Star icon

export const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star if remainder >= 0.5
  const emptyStars = 5 - fullStars - halfStars; // Remaining empty stars

  return (
    <span className="flex items-center">
      {/* Full Stars */}
      {Array.from({ length: fullStars || 0 }).map((_, index) => (
  <Star
    key={`full-${index}`}
    className="w-4 h-4 text-[#F1B44C]"
    fill="currentColor"
  />
))}
      {/* Half Star */}
      {halfStars === 1 && (
        <Star
          key="half"
          className="w-4 h-4 text-[#F1B44C]"
          style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }} // Display half star
          fill="currentColor"
        />
      )}
      {/* Empty Stars */}
      {Array.from({ length: emptyStars || 0 }).map((_, index) => (
  <Star
    key={`empty-${index}`}
    className="w-4 h-4 text-gray-300"
  />
))}
    </span>
  );
};
const PackageComp = () => {
    
    const mypackage = useSelector((state) => state.example.mypackage);
    const [validity, setValidity] = useState(90 * 24 * 60 * 60); // 90 days in seconds

    useEffect(() => {
      const timer = setInterval(() => {
        setValidity((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
  
      return () => clearInterval(timer); // Cleanup timer on component unmount
    }, []);
  
    const formatTime = (seconds) => {
      const days = Math.floor(seconds / (24 * 60 * 60));
      const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((seconds % (60 * 60)) / 60);
      const secs = seconds % 60;
  
      return `${days}D : ${hours}H : ${minutes}M : ${secs}S`;
    };
  
    return (
        <div className="packagecomp">
        <div className="container">
        <h4 className="font-sora text-[24px] font-bold py-6">My Package</h4>
       
        <div className="mb-[162px] grid grid-cols-1 lg:grid-cols-3 gap-8">
        {
            mypackage?.map((item,key)=>{
                return(
                    <>
                      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-4">
        <div className="relative">
          <img
            src={item.photo} // Replace with your image URL
            alt="Academic Free Trial"
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-black border-2 border-[rgba(0,82,204,0.6)] px-3 py-1 text-[14px] font-semibold shadow-md">
            {formatTime(validity)}
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-[20px] text-[#253642] font-semibold mb-2">{item.packageName}</h2>
          <div className="flex items-center mb-2">
            <span className="text-[#F1B44C] mr-2">
                
            <RatingStars rating={item?.aveRatings} />
            </span>
            <span className="text-gray-700 text-sm font-medium">{item.aveRatings} ({item?.ratingNumber})</span>
          </div>
          <p className="text-[#74788D]  mb-4 flex items-center gap-2 font-sora text-[16px]">
            <img src="assets/images/clock.png" alt="" />
            Duration: {item.validity} Days</p>
          
          <div className="flex justify-between pt-[20px] border-t border-[#E1E1E1]">
            <button className="bg-[#0052CC] text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Start Your Exam
            </button>
          </div>
        </div>
      </div>
                    </>
                )
            })
        }

        </div>
      

        </div>
        </div>
    );


       


}

export default PackageComp