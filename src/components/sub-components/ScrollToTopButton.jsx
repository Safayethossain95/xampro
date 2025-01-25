import  { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Animated Button */}
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? "translate-y-0" : "-translate-y-[1600px]"
        } transition-transform duration-1000 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center relative w-[40px] h-[40px]`}
      >
        <img className="absolute top-3 w-[25px] h-[25px]" src="https://www.xampro.org/static/media/rocket.53b56fc5.svg" alt="" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
