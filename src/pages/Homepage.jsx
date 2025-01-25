import { Toaster } from "react-hot-toast";
import CountingMilestones from "../components/CountingMilestones";
import CreatePackageComp from "../components/CreatePackageComp";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MyNavbar from "../components/MyNavbar";
import PopularCourses from "../components/PopularCourses";
import FixexPaddingforNavbar from "../components/sub-components/FixexPaddingforNavbar";
import WeWillProvide from "../components/WeWillProvide";
import ScrollToTopButton from "../components/sub-components/ScrollToTopButton";

const Homepage = () => {
  return (
    <>
      <MyNavbar />
      <FixexPaddingforNavbar>
        <HeroSection />
        <CountingMilestones />
        <Features />
        <PopularCourses />
        <WeWillProvide />
        <CreatePackageComp />
        <Footer />
      </FixexPaddingforNavbar>
      <Toaster />
      <ScrollToTopButton/>
    </>
  );
};

export default Homepage;
