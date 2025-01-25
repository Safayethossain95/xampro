/* eslint-disable no-unused-vars */
import { useState } from "react";
import { loginApi, registerApi } from "../utils/api-calls";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearUsername, setUsername } from "../store/exampleSlice";
const LoginComp = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("login");
  const dispatch = useDispatch();
  const [loginform,setLoginForm] =useState({
    email:"",
    password:""
  })
  const [registerform,setRegisterForm] =useState({
    "fullName": "",
    "email": "",
    "password": "",
    "confirmPassword": "",
    "phoneNumber": ""
  })

  const handleloginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevState) => ({
      ...prevState,
      [name]: value, // Dynamically update the field based on the name attribute
    }));
  };
  const handleregisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prevState) => ({
      ...prevState,
      [name]: value, // Dynamically update the field based on the name attribute
    }));
  };
  const handleLoginSubmit=(e)=>{
    e.preventDefault()
    async function fetchlogin(){

      const res = await loginApi(loginform)
      if(res){
        
        dispatch(setUsername(res.UserLogin.data.fullName));
        toast.success("Login Successful!")
        navigate("/")
      }
    }
    fetchlogin()
  }
  const handleregisterSubmit=(e)=>{
    e.preventDefault()
    async function fetchlogin(){

      const res = await registerApi(registerform)
      if(res){
        
        toast.success("Register Successful!")
        setActiveTab("login")
      }
    }
    fetchlogin()
  }
  
  return (
    <>
    <Toaster/>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="left relative h-screen bg-[#0052CC] ">
          <div className="w-full h-full bg-[url('assets/images/loginbg.png')] bg-cover bg-center">
            <img
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
              src="assets/images/login-img-1.png"
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <div className="logoright fixed top-[40px] right-[40px]">
            <Link to="/"><img src="assets/images/logo.png" alt="" /></Link>
          </div>
          <div className="w-full min-h-screen flex items-center justify-center bg-white">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              {/* Tabs */}
              <div className="flex justify-between  mb-6">
                <button
                  className={`w-1/2 rounded-[10px] py-2 text-center font-semibold ${
                    activeTab === "login"
                      ? "bg-[#0052CC] text-white"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("login")}
                >
                  Log In
                </button>
                <button
                  className={`w-1/2 rounded-[10px] py-2 text-center font-semibold ${
                    activeTab === "register"
                      ? "bg-[#0052CC] text-white"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("register")}
                >
                  Registration
                </button>
              </div>

              {/* Content */}
              {activeTab === "login" ? (
                <div>
                  <h2 className="text-[48px] text-[#14142B] font-bold mb-4">Log In</h2>
                  <form onSubmit={handleLoginSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={loginform.email}
                        onChange={handleloginChange}
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={loginform.password}
                        onChange={handleloginChange}
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div className="text-right mb-4">
                      <a href="#" className="text-blue-500 text-sm">
                        Forget Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#0052CC] text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                      Log In →
                    </button>
                  </form>
                  <p className="flex gap-2 justify-center text-[14px] font-poppins text-[#4E4B66] text-center mt-4">
                    Need to create an account?{" "}
                    <p onClick={()=>setActiveTab("register")} className="text-[#0052CC] text-[14px] font-poppins cursor-pointer">
                      Sign Up
                    </p>
                  </p>
                  <div className="flex items-center justify-between mt-6">
                    <button className="flex items-center justify-center font-manrope text-[14px] w-1/2 border rounded-lg py-2 px-4 mr-2">
                      <img
                        src="assets/images/google-icon.png"
                        alt="Google"
                        className="w-5 h-5 mr-2"
                      />
                      Google
                    </button>
                    <button className="flex text-[#0F6FFF] items-center font-manrope text-[14px] justify-center w-1/2 border rounded-lg py-2 px-4 ml-2">
                      <img
                        src="assets/images/facebook-icon.png"
                        alt="Facebook"
                        className="w-5 h-5 mr-2"
                      />
                      Facebook
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-[48px] text-[#14142B] font-bold mb-4">Registration</h2>
                  <form onSubmit={handleregisterSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="fullname"
                        name="fullName"
                        value={registerform.fullName}
                        onChange={handleregisterChange}
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={registerform.email}
                        onChange={handleregisterChange}
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="phone"
                        name="phoneNumber"
                        value={registerform.phoneNumber}
                        onChange={handleregisterChange}
                        placeholder="Phone"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={registerform.password}
                        onChange={handleregisterChange}
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={registerform.confirmPassword}
                        onChange={handleregisterChange}
                        placeholder="Confirm Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#0052CC] text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                      Register →
                    </button>
                  </form>
                  <p className="flex gap-2 justify-center text-[14px] font-poppins text-[#4E4B66] text-center mt-4">
                    Already have an account?{" "}
                    <p onClick={()=>setActiveTab("login")} className="text-[#0052CC] text-[14px] font-poppins cursor-pointer">
                      Log In
                    </p>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComp;
