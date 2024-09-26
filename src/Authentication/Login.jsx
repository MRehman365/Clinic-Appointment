import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-[100vh] bg-white p-5 relative">
      <div>
        <div className="text-3xl rounded-lg border h-8 w-8">
          <Link to="/">
            {" "}
            <MdOutlineKeyboardArrowLeft />
          </Link>
        </div>
      </div>
      <div className="flex items-center flex-col h-[80%] gap-5 py-10">
        <h2 className="text-3xl font-semibold">
          Welcome Back! Glad to See You Again.
        </h2>

        <form className="flex flex-col items-center w-full mt-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="mb-4 p-4 border-[2px] border-gray-200 bg-[#f7f8f9] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <div className="relative w-full mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="p-4 border-[2px] border-gray-200 bg-[#f7f8f9] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-xl text-gray-400"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <Link
            to="/forget"
            className="text-accent  mb-4 w-full flex justify-end"
          >
            <p className="text-gray-500 hover:text-[#4486ff]">
              Forgot Password?
            </p>
          </Link>
          <Link className="bg-[#4486ff] text-white p-4 rounded-lg w-full text-center mt-10">
            Login
          </Link>
        </form>
      </div>
      <p className="text-sm text-center font-[400] absolute bottom-2 left-1/2 transform -translate-x-1/2 w-full">
        Don't have an account?{" "}
        <span className="text-[#37C2C1] font-[400]">
          <Link to="/register">Register Here</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
