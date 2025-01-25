import {  useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearUsername, deletepackage, removeCart } from '../store/exampleSlice';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const username = useSelector((state) => state.example.username);
  const dispatch = useDispatch();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLogout=()=>{
    dispatch(clearUsername());
    dispatch(removeCart())
    dispatch(deletepackage())
    setIsModalOpen(false)
    navigate("/")
}

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const cart = useSelector((state) => state.example.cart);

  useEffect(()=>{
    if(!username){
      dispatch(removeCart())
    }
  },[])
  return (
    <nav className="fixed z-50 top-0 mynavbar bg-white h-[88px] w-full shadow-md">
      
      <div className="container relative flex mx-auto items-center justify-between h-full">
        {/* Logo */}
        <div className="font-bold text-xl">
         <Link to="/">
         <img src="assets/images/logo.png" className="max-h-[66px]" alt="Logo" />
         </Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`${isOpen?"fixed right-[35px] top-[25px]":""} md:hidden z-10 flex flex-col justify-center items-center cursor-pointer`}
          onClick={toggleNavbar}
        >
          <div
            className={`h-1 w-6 bg-black my-1 transform transition-transform ${
              isOpen ? "rotate-[45deg] translate-y-3" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-black my-1 transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-black my-1 transform transition-transform ${
              isOpen ? "-rotate-[45deg] -translate-y-3" : ""
            }`}
          ></div>
        </div>

        {/* Links */}
        <div className={`${isOpen?"block":"hidden md:block"}`}>
        <div className="flex flex-end">
          <ul
            className={`fixed top-0 left-0 w-full bg-white text-black flex flex-col items-center space-y-4 p-8 transition-transform transform md:transform-none md:flex md:flex-row md:items-center md:space-y-0 md:space-x-6 md:p-0 md:ml-auto ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            } md:relative md:translate-y-0`}
          >
            <li>
              <a href="#home" className="font-sora text-[17px] text-[#253642] flex items-center gap-2 hover:text-blue-500">
                Exam Packages <img className="w-4 h-3" src="assets/images/ar.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 font-sora text-[17px] text-[#253642]">
                Free Test
              </a>
            </li>
            <li>
             <Link to="/cart">
             <div  className="cart   border-l-2 border-r-2 border-[#DBE9FD] px-8">
                <div className="relative">
                <div className="flex items-center justify-center w-4 h-4 absolute top-0 -right-1 bg-[#CCE0FF] rounded-full">
                  <p className="text-[11px] font-sora font-normal">{cart.length}</p>
                </div>
                <img className="w-7 -mt-1" src="assets/images/cart-icon.png" alt="" />
                </div>
              </div>
              </Link>
            </li>
            <li>
              {username ?
              <div onClick={toggleModal} className="flex items-center gap-2 profileicon cursor-pointer">
                <img className="w-[40px] h-[40px] -mt-1" src="assets/images/demoprofile.png" alt="" />
                <div className="drpdwn">
                  <p className="text-[#74788D] font-sora">{username}</p>
                </div>
                <img src="assets/images/arrow-down-icon.png" alt="" />
              </div>

              :
                <Link to="/login" className='text-[#74788D] font-sora'>Login</Link>
              }
            </li>
          </ul>
        </div>
        </div>
      {isModalOpen && (
        <div
          className="absolute p-5 top-[90px] right-[80px] w-[170px] py-6 bg-white shadow-lg rounded-lg border border-gray-300"
        >
          <ul>
            <li className='cursor-pointer font-sora text-[15px] text-black'>
              <Link to="/package">Dashboard</Link>
            </li>
            <li className='cursor-pointer  mt-3 pt-3 font-sora text-[15px] text-black'>
              <Link to="/create-package">Create Package</Link>
            </li>
            <li onClick={handleLogout} className='cursor-pointer font-sora text-[15px] text-black mt-3 pt-3 border-t border-t-black'>Logout</li>
          </ul>
        </div>
      )}
      </div>
    </nav>


  );
};

export default MyNavbar;
