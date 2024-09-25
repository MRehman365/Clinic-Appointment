import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export const NewPassword = () => {
  return (
    <div className="h-[100vh] p-5 relative">
    <div>
      <div className="text-3xl rounded-lg border h-8 w-8">
        <MdOutlineKeyboardArrowLeft />
      </div>
      </div>
      <div className="flex items-start flex-col h-[80%] gap-5 py-10">
        <h2 className="text-3xl font-semibold">
          Create a New Password
        </h2>
        <p>Your new password must be unique from the previously used password</p>

        <form className="flex flex-col items-center w-full mt-10">
          <input
            type="text"
            required
            placeholder="New Password"
            className="mb-4 p-4 border border-border bg-[#f7f8f9] rounded-lg w-full"
          />
          <input
            type="text"
            required
            placeholder="Confirm Password"
            className="mb-4 p-4 border border-border bg-[#f7f8f9] rounded-lg w-full"
          />
          <Link to='/passchanged' className="bg-[#4486ff] text-white p-4 rounded-lg w-full text-center  mt-5">
            Reset Password
          </Link>
        </form>
      </div>
    </div>
  )
}
