import CartComp from "../components/CartComp";
import FooterOther from "../components/FooterOther";
import MyNavbar from "../components/MyNavbar";
import FixexPaddingforNavbar from "../components/sub-components/FixexPaddingforNavbar";

const Cartpage = () => {
  return (
    <>
      <MyNavbar />
      <FixexPaddingforNavbar>
        <CartComp />
        <FooterOther/>
      </FixexPaddingforNavbar>
    </>
  );
};

export default Cartpage;
