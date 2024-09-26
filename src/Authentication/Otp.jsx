import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

export const Otp = () => {
  return (
    <div className="h-[100vh] bg-white p-5 relative">
    <div>
      <div className="text-3xl rounded-lg border h-8 w-8">
      <Link to='/forget'> <MdOutlineKeyboardArrowLeft /></Link>
      </div>
      </div>
      <div className="flex items-start flex-col h-[80%] gap-5 py-10">
        <h2 className="text-3xl font-semibold text-left">
          OTP Varification
        </h2>
        <p>Enter Varification code. We just send it on your email</p>

        <form className="flex flex-col items-center w-full mt-10">
        <div className="flex justify-around mb-6 w-full">
                <input type="text" required className="w-14 h-14 text-2xl text-center border border-gray-200 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" maxlength="1" pattern="\d" inputmode="numeric" aria-label="First digit of OTP" />
                <input type="text" required className="w-14 h-14 text-2xl text-center border border-gray-200 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" maxlength="1" pattern="\d" inputmode="numeric" aria-label="Second digit of OTP" />
                <input type="text" required className="w-14 h-14 text-2xl text-center border border-gray-200 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" maxlength="1" pattern="\d" inputmode="numeric" aria-label="Third digit of OTP" />
                <input type="text" required className="w-14 h-14 text-2xl text-center border border-gray-200 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" maxlength="1" pattern="\d" inputmode="numeric" aria-label="Fourth digit of OTP" />
            </div>
          <Link to='/newpassword' className="bg-[#4486ff] text-white p-4 rounded-lg w-full text-center mt-5">
            Verify
          </Link>
        </form>
      </div>
      <p className="text-sm text-center font-400] absolute bottom-3 left-1/2 transform -translate-x-1/2 w-full">Did not recived code? <span className="text-[#37C2C1]"><Link to="/login">Resend.</Link></span></p>
    </div>
  )
}
