import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const ForgetPass = () => {
  return (
    <div className="h-[100vh] p-5 relative">
    <div>
      <div className="text-3xl rounded-lg border h-8 w-8">
        <MdOutlineKeyboardArrowLeft />
      </div>
      </div>
      <div className="flex items-start flex-col h-[80%] gap-5 py-10">
        <h2 className="text-3xl font-semibold text-left">
          Forget Password ?
        </h2>
        <p>Don't worry! it occures. Please enter the email address to send the code.</p>

        <form className="flex flex-col items-center w-full mt-10">
          <input
            type="number"
            placeholder="Enter your Mobile Number"
            className="mb-4 p-4 border border-border bg-[#f7f8f9] rounded-lg w-full"
          />
          <Link className="bg-[#4486ff] text-white p-4 rounded-lg w-full text-center mt-5">
            Send Code
          </Link>
        </form>
      </div>
      <p className="text-sm text-center font-[500] absolute bottom-3 left-1/2 transform -translate-x-1/2 w-full">Remember Password? <span className="text-[#37C2C1] font-semibold"><Link to="/login">Login</Link></span></p>
    </div>
  )
}

export default ForgetPass
