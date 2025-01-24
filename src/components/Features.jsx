import FeatureCard from "./sub-components/FeatureCard"


const Features = () => {
    const features = [
        {
            title: "Full Exam Packages",
            text: "IELTS general & academic Speaking, reading, writing full mock module",            
            img: "assets/images/feature1.png",
            link: "/feature1"
        },
        {
            title: "Instant Result",            
            text: "IELTS general & academic Speaking, reading, writing full mock module ",
            img: "assets/images/feature2.png",
            link: "/feature2"
        },
        {
            title: "Check Performance",            
            text: "IELTS general & academic Speaking, reading, writing full mock module ",
            img: "assets/images/feature3.png",
            link: "/feature3"
        },
        {
            title: "Facilitator Review",            
            text: "IELTS general & academic Speaking, reading, writing full mock module",
            img: "assets/images/feature4.png",
            link: "/feature4"
        },
    ];
return (
    <>
        <div className="relative lg:pb-[145px] pb-[50px] featuressection mt-[50px] lg:mt-[135px]">
            {/* Blur Layer */}
            <div className="absolute -z-10 inset-0  max-w-[1280px] ">
                <img className="w-full" src="assets/images/bigshadow.png" alt="" />
            </div>

            <div className="container">
                <div className="grid grid-cols-12 gap-[30px]">
                    <div className="lg:col-span-8 col-span-12">
                        <div className="card flex flex-col justify-between py-[68px] pl-[76px] pr-[110px] lg:min-h-[384px] rounded-[24px] bg-[#0052CC]">
                            <h3 className="text-white lg:leading-[76px] font-sora font-semibold md:text-[40px] text-[30px] lg:text-[45px] xlg:text-[51px]">
                                Our special features for students
                            </h3>
                            <button className="w-[120px] md:w-[187px] mb-0 rounded-[14px] text-[#0052CC] md:text-[16px] text-[12px] font-sora font-semibold md:h-[64px] h-[40px] bg-white">
                                See Features
                            </button>
                        </div>
                    </div>
                   
                    {
                        features.map((item,key)=>{
                            return(
                                <>
                                <FeatureCard key={key} item={item}/>
                                
                                </>
                            )
                        })
                    }
                    
                    
                </div>
            </div>
        </div>
    </>
);
}

export default Features