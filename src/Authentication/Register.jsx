import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
  return (
    <div className="h-[100vh] bg-white p-5 relative">
    <div>
      <div className="text-3xl rounded-lg border h-8 w-8">
      <Link to='/'> <MdOutlineKeyboardArrowLeft /></Link>
      </div>
      </div>
      <div className="flex items-center flex-col h-[80%] gap-5 py-10">
        <h2 className="text-3xl font-semibold">
          Welcome Back! Glad to See You Again.
        </h2>

        <form className="flex flex-col items-center w-full mt-10">
          <input
            type="text"
            placeholder="Username"
            className="mb-4 p-4 border-[2px] border-gray-200 bg-[#f7f8f9] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-4 border-[2px] border-gray-200 bg-[#f7f8f9] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="relative w-full mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="p-4 border-[2px] border-gray-200 bg-[#f7f8f9] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute text-gray-400 text-xl right-3 top-1/2 transform -translate-y-1/2 "
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <div className="relative w-full mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="p-4 border-[2px] border-gray-200 bg-[#f7f8f9] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:border focus:border-blue-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute text-gray-400 text-xl right-3 top-1/2 transform -translate-y-1/2 "
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <Link className="bg-[#4486ff] text-white p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center  mt-5">
           <button> Register</button>
          </Link>
        </form>
      </div>
      <p className="text-sm text-center font-[400] absolute bottom-3 left-1/2 transform -translate-x-1/2 w-full">Already have an account? <span className="text-[#37C2C1]"><Link to='/login'>Login here</Link></span></p>
    </div>
  )
}

export default Register
