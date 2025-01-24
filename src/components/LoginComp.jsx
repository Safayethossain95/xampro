import { useState } from "react";
const LoginComp = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <>
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
            <img src="assets/images/logo.png" alt="" />
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
                  <form>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
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
                  <p className="text-sm text-center mt-4">
                    Need to create an account?{" "}
                    <a href="#" className="text-blue-500">
                      Sign Up
                    </a>
                  </p>
                  <div className="flex items-center justify-between mt-6">
                    <button className="flex items-center justify-center w-1/2 border rounded-lg py-2 px-4 mr-2">
                      <img
                        src="path/to/google-icon.png"
                        alt="Google"
                        className="w-5 h-5 mr-2"
                      />
                      Google
                    </button>
                    <button className="flex items-center justify-center w-1/2 border rounded-lg py-2 px-4 ml-2">
                      <img
                        src="path/to/facebook-icon.png"
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
                  <form>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
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
                  <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-500">
                      Log In
                    </a>
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
