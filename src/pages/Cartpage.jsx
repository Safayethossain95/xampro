import CartComp from "../components/CartComp";
import Footer from "../components/Footer";
import MyNavbar from "../components/MyNavbar";
import FixexPaddingforNavbar from "../components/sub-components/FixexPaddingforNavbar";

const Cartpage = () => {
  return (
    <>
      <MyNavbar />
      <FixexPaddingforNavbar>
        <CartComp />
        <Footer />
      </FixexPaddingforNavbar>
    </>
  );
};

export default Cartpage;
