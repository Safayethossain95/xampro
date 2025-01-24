import CountingMilestones from "../components/CountingMilestones"
import CreatePackageComp from "../components/CreatePackageComp"
import Features from "../components/Features"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import MyNavbar from "../components/MyNavbar"
import PopularCourses from "../components/PopularCourses"
import WeWillProvide from "../components/WeWillProvide"


const Homepage = () => {
  return (
    <>
    <MyNavbar/>
    <HeroSection/>
    <CountingMilestones/>
    <Features/>
    <PopularCourses/>
    <WeWillProvide/>
    <CreatePackageComp/>
    <Footer/>
    </>
  )
}

export default Homepage