import { useState } from "react";
import { useSelector } from "react-redux";

import { addtomypackage, deleteItemfromCart, removeCart } from "../store/exampleSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CartComp = () => {
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false);
  const [code,setCode] = useState("")
  const dispatch = useDispatch();
  const [discountapplied,setDiscountapplied] = useState(false)
  const cart = useSelector((state) => state.example.cart);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  const getFormattedDateRange = (validity) => {
    const startDate = new Date(); // current date
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + validity); // adding validity duration in days

    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    return `${formattedStartDate} - ${formattedEndDate}`;
  };
  const [discountamount,setDiscountamount]=useState(cart.reduce((accumulator, item) => {
    return accumulator + item.discount;
  }, 0))
  const handlecode=()=>{
    if(code == "Free100"){
      setDiscountapplied(true)
      setDiscountamount(discountamount-((discountamount*100)/100))
    }else{
      setDiscountapplied(false)
    }
  }

  return (
    <>
      <div className="cartcomp">
        <div className="container">
          <h4 className="font-sora text-[24px] font-bold py-6">Cart</h4>
          <div className="cartboard p-12  w-full bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="div">
                {cart?.map((item, key) => {
                  return (
                    <>
                      <div
                        key={key}
                        className="singleitem mb-5 h-[158px] relative p-6 w-full border border-1-[#E5E5F0] rounded-[8px]"
                      >
                        <div className="closeicon">
                          <img
                          onClick={()=>dispatch(deleteItemfromCart(item.id))}
                            className="absolute top-2 right-2"
                            src="assets/images/close.png"
                            alt=""
                          />
                        </div>
                        <div className="leftmain flex gap-5 items-center">
                          <div
                            className="box rounded-[8px] bg-[#E5E5F0] w-[110px] h-[110px] bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.photo})` }}
                          ></div>

                          <div className="rigth">
                            <h3 className="text-[20px] font-sora font-bold text-[#253642]">
                              {item.packageName}
                            </h3>
                            <div className="flex gap-1 items-center">
                              <img
                                className="-mt-1"
                                src="assets/images/clock.png"
                                alt=""
                              />
                              <span className="text-[12px] font-sora">
                                Duration: {getFormattedDateRange(item.validity)}
                              </span>
                            </div>
                            <p className="font-sora font-semibold text-[#253642] text-[18px]">
                              Tk. {item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
                <Link to="/">
                <h5 className="text-[#0052CC] underline text-[16px]">Continue Shopping</h5>
                </Link>
              </div>

              <div className="singleitem w-full border border-1-[#E5E5F0] rounded-[8px] p-[25px]">
                <div className="catlist flex justify-between">
                  <p className="text-[#74788D] text-[16px] font-sora font-normal">
                    Price
                  </p>
                  <p className="text-[#74788D] text-[16px] font-sora font-normal">
                    Tk.{" "}
                    {cart.reduce((accumulator, item) => {
                      return accumulator + item.price;
                    }, 0)}
                  </p>
                </div>
                <div className="catlist py-4 flex justify-between">
                  <p className="text-[#74788D] text-[16px] font-sora font-normal">
                    Discount
                  </p>
                  <p className="text-[#74788D] text-[16px] font-sora font-normal">
                    - Tk. {discountamount}
                  </p>
                </div>
                <div className="catlist pb-4 border-b border-[#E5E5F0] flex justify-between">
                  <p className="text-[#74788D] text-[16px] font-sora font-normal">
                    VAT
                  </p>
                  <p className="text-[#74788D] text-[16px] font-sora font-normal">
                    Tk. {(cart.reduce((accumulator, item) => {
                      return accumulator + item.price;
                    }, 0)*2.5)/100}
                  </p>
                </div>
                <div className="catlist border-b border-[#E5E5F0] py-4 flex justify-between">
                  <p className="text-[#253642] text-[16px] font-sora font-bold">
                    GRAND TOTAL
                  </p>
                  <p className="text-[#253642] text-[16px] font-sora font-bold">
                    Tk. {cart.reduce((accumulator, item) => {
                      return accumulator + item.price;
                    }, 0) - discountamount + ((cart.reduce((accumulator, item) => {
                      return accumulator + item.price;
                    }, 0)*2.5)/100)}
                  </p>
                </div>
                <div className="catlist py-4  flex justify-between items-center">
                  <p className="text-[#74788D] text-[16px] font-sora font-normal">
                    Apply Coupon
                  </p>
                  <div className="couponinput relative w-1/2">
                    <input
                      type="text"
                      value={code}
                      onChange={(e)=>setCode(e.target.value)}
                      className=" border borer-[#E5E5F0] w-full h-[40px] p-3 rounded-[3px] focus:outline-none"
                      placeholder="Free100"
                    />
                    <button onClick={handlecode} className="absolute right-3 top-[4px] bg-[#0052CC] h-[30px] w-[81px] rounded-[6px] text-white text-[16px] ">
                      Apply
                    </button>
                  </div>
                </div>
                <div className="flex justify-end border-b border-[#E5E5F0] pb-3">
                  {
                    discountapplied?
                    <p className="text-[#00AF70] text-[12px]">
                      100% Discount coupon applied successfully
                    </p>
                    :""

                  }
                </div>
                <div className="catlist border-b border-[#E5E5F0] py-4 flex justify-between">
                  <p className="text-[#253642] text-[16px] font-sora font-bold">
                    TOTAL
                  </p>
                  <p className="text-[#253642] text-[16px] font-sora font-bold">
                    Tk. {!discountapplied ? (cart.reduce((accumulator, item) => {
                      return accumulator + item.price;
                    }, 0) - discountamount + ((cart.reduce((accumulator, item) => {
                      return accumulator + item.price;
                    }, 0)*2.5)/100)):0}
                  </p>
                </div>
                <div className="catlist py-4  flex justify-between items-center">
                  <div className="div flex gap-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />

                    <p className="text-[#74788D] text-[16px] font-sora font-normal">
                      I agree all terms and conditions
                    </p>
                  </div>
                  {isChecked ? (
                    <button onClick={()=>{dispatch(addtomypackage(cart));dispatch(removeCart());navigate("/package")}} className=" bg-[#0052CC] h-[44px] w-[112px] rounded-[6px] text-white text-[16px] ">
                      Payment
                    </button>
                  ) : (
                    <button className=" bg-[#74788D] h-[44px] w-[112px] rounded-[6px] text-white text-[16px] ">
                      Payment
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComp;
