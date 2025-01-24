const Footer = () => {
  return (
    <footer className="bg-[#001A46] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              <img src="assets/images/footer-logo.png" alt="" />
            </h2>
            <p className="xlg:text-[20px] text-[15px] font-sora font-thin">
              Need a solution for mockup exams? Or perhaps exam supervision?
              Xampro is the answer.
            </p>
          </div>

          {/* Center Section */}
          <div>
            <h2 className="text-[16px] xlg:text-[22px] font-bold mb-4">Get in touch</h2>
            <ul className="text-sm space-y-2">
              <li className="flex gap-[12px]">
                <img
                  className="w-[24px] h-[24px]"
                  src="assets/images/location-logo.png"
                  alt=""
                />
                <div>
                  <p className="font-sora xlg:text-[18px] text-[14px] font-thin">
                    {" "}
                    Registered Address: Ta-143/A, Moddho Badda (3rd Floor),
                    Gulshan, Badda, Dhaka-1212
                  </p>
                </div>
              </li>
              <li className="flex gap-[12px]">
                <img
                  className="w-[24px] h-[24px]"
                  src="assets/images/location-logo.png"
                  alt=""
                />
                <div>
                  <p className="font-sora xlg:text-[18px] text-[14px] font-thin">
                    House 15, Road 24, Gulshan-2 Dhaka-1212
                  </p>
                </div>
              </li>
              <li className="flex gap-[12px]">
              <img
                  className="w-[24px] h-[24px]"
                  src="assets/images/sms.png"
                  alt=""
                />
                <div>
                    
              <p className="font-sora xlg:text-[18px] text-[14px] font-thin">solutionmaac@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-[16px] xlg:text-[22px] font-bold mb-4">Want Some Insights?</h2>
            <div className="flex flex-col items-start space-y-2">
              <img
                src="assets/images/MAAC.png"
                alt="MAAC Insights"
                className="w-[127px]"
              />
              <p className="font-sora xlg:text-[18px] text-[14px] font-thin">Insights</p>
            </div>
          </div>
        </div>

          <img className="mt-16" src="assets/images/payment-method.png" alt="" />
        <div className="mt-8 border-t border-gray-600 pt-4">

          {/* Bottom Links */}
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
            <p className="font-sora text-[15px] font-thin text-white">© 2022 Xampro</p>
            <div className="flex space-x-4">
              <a href="#" className="font-sora text-[15px] font-thin text-white">
                Terms & Condition
              </a>
              <a href="#" className="font-sora text-[15px] font-thin text-white">
                Privacy Policy
              </a>
              <a href="#" className="font-sora text-[15px] font-thin text-white">
                Refund Policy
              </a>
              <a href="#" className="font-sora text-[15px] font-thin text-white">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
