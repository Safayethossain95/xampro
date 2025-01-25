import Footer from "../components/Footer";
import MyNavbar from "../components/MyNavbar";
import PackageComp from "../components/PackageComp";
import FixexPaddingforNavbar from "../components/sub-components/FixexPaddingforNavbar";

const PackagePage = () => {
  return (
    <>
      <MyNavbar />
      <FixexPaddingforNavbar>
        <PackageComp />
      </FixexPaddingforNavbar>
      <Footer />
    </>
  );
};

export default PackagePage;
