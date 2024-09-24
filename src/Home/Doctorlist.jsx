import React from "react";
import img1 from "../assets/Annotation 2024-07-25 111648.png";
import { IoSearchOutline } from "react-icons/io5";


const array = [
    {img: img1, name:'M NEHAL AHAMAD', location:'NEAR GAS AGENCY KHAIRA JAMU', rate:'( 132 reviews )'},
    {img: img1, name:'M NEHAL AHAMAD', location:'NEAR GAS AGENCY KHAIRA JAMU', rate:'( 132 reviews )'},
    {img: img1, name:'M NEHAL AHAMAD', location:'NEAR GAS AGENCY KHAIRA JAMU', rate:'( 132 reviews )'},
]
const Doctorlist = () => {
  return (
    <div className="h-[100vh] p-6 gap-4 bg-[#f8f8f8]">
      <div>
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Hello,</p>
            <h2 className="text-base font-bold">User Name</h2>
          </div>
          <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
            <img src={img1} alt="" className="object-cover h-full w-full" />
          </div>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Enter the doctor name"
            className="text-sm bg-white text-gray-700 w-full py-3 px-8 mt-2 border-none rounded-md"
          />
          <span className="text-gray-500 text-lg absolute left-2 top-5">
            <IoSearchOutline />
          </span>
        </div>
      </div>
      <div className="rounded-lg bg-[#1e78c0] flex justify-between p-3 mt-4">
        <div className="w-[60%]">
        <h2 className="text-base text-white font-bold">Do you feel there are symptonuse in your body</h2>
        <button className="bg-[#db2b6a] text-white text-[10px] rounded-md p-2 mt-1">Start Consulation</button>

        </div>
        <div className="w-[40%] flex justify-end items-center">
            <img src={img1} alt="img" className="h-[100px] w-[100px] rounded-full object-cover " />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <h2 className="text-base text-gray-600 font-semibold">Popuar Doctors</h2>
        <p className="text-sm text-gray-400">see all</p>
      </div>
      <div className="flex flex-col gap-5 p-4">
        {
          array.map((arrays, index) => (
            <div key={index} className="flex">
            <div className="w-[30%]"><img src={img1} alt="" /></div>

            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Doctorlist;
