import React, { useEffect, useState } from "react";
import { getPopularCourses } from "../utils/api-calls";
import PopularCoursesCard from "./sub-components/PopularCoursesCard";

const PopularCourses = () => {
  // const popularcourses = [
  //     {
  //         packageName: "Full Exam Packages",
  //         price: 3000,
  //         photo: "https://production-ieltsx.sgp1.digitaloceanspaces.com/1669096977015-image__1__360.png",
  //         aveRatings: "3.6",
  //         validity: 90,
  //         ratingNumber:100,
  //         readingQ:10,
  //         listeningQ:10,
  //         writingQ:10,
  //         speakingQ:2
  //     }
  // ];
  const [popularcourses, setpopularcourses] = useState([]);
  useEffect(() => {
    async function fetchpopular() {
      const data = await getPopularCourses();
      setpopularcourses(data.getData);
    }
    fetchpopular();
  }, []);

  return (
    <>
      <div className="popularcourses py-[90px] bg-[#0052cc1a]">
        <div className="container">
          <h3 className="font-sora mb-[70px] text-center text-[51px] font-semibold text-[#1E266D]">
            Some popular courses
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[34px]">
            {popularcourses.map((item, key) => {
              return (
                <React.Fragment key={key} >
                  <PopularCoursesCard item={item} />
                </React.Fragment>
              );
            })}
          </div>
        
          <div className="flex justify-end">
      <a
        href="#"
        className="mt-[90px] flex items-center font-bold font-sora text-[22px] text-[#0052CC] relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-[#0052CC] after:absolute after:-bottom-[5px]"
      >
        See All Pack
        <span className="ml-1 font-bold">
          <img src="assets/images/arrow-right.png" alt="Arrow Right" />
        </span>
      </a>
    </div>
         </div>
      
      </div>
    </>
  );
};

export default PopularCourses;
