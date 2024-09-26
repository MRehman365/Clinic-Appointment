import React from "react";
import img1 from "../assets/WhatsApp Image 2024-09-24 at 6.57.25 AM.jpeg";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from '../Layout/Footer'

const array = [
  {
    img: img1,
    name: "M NEHAL AHAMAD",
    location: "NEAR GAS AGENCY KHAIRA JAMU",
    review: "( 132 reviews )",
    rate: "4.8",
    link: "/doctordetail"
  },
  {
    img: img1,
    name: "M NEHAL AHAMAD",
    location: "NEAR GAS AGENCY KHAIRA JAMU",
    review: "( 132 reviews )",
    rate: "4.8",
    link: "/doctordetail"
  },
  {
    img: img1,
    name: "M NEHAL AHAMAD",
    location: "NEAR GAS AGENCY KHAIRA JAMU",
    review: "( 132 reviews )",
    rate: "4.8",
    link: "/doctordetail"
  },
  {
    img: img1,
    name: "M NEHAL AHAMAD",
    location: "NEAR GAS AGENCY KHAIRA JAMU",
    review: "( 132 reviews )",
    rate: "4.8",
    link: "/doctordetail"
  },
  {
    img: img1,
    name: "M NEHAL AHAMAD",
    location: "NEAR GAS AGENCY KHAIRA JAMU",
    review: "( 132 reviews )",
    rate: "4.8",
    link: "/doctordetail"
  },
  {
    img: img1,
    name: "M NEHAL AHAMAD",
    location: "NEAR GAS AGENCY KHAIRA JAMU",
    review: "( 132 reviews )",
    rate: "4.8",
    link: "/doctordetail"
  },
  {
    img: img1,
    name: "M NEHAL AHAMAD",
    location: "NEAR GAS AGENCY KHAIRA JAMU",
    review: "( 132 reviews )",
    rate: "4.8",
    link: "/doctordetail"
  },
];
const Doctorlist = () => {
  return (
    <div className=" gap-4 bg-[#f8f8f8]">
      <div className=" p-6">
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
            className="text-sm bg-white text-gray-700 w-full py-3 px-8 mt-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <span className="text-gray-500 text-lg absolute left-2 top-5">
            <IoSearchOutline />
          </span>
        </div>
      </div>
      <div className="p-4">
      <div className="rounded-lg bg-[#1e78c0] p-4 flex justify-between mt-4">
        <div className="w-[60%] flex flex-col justify-between">
          <h2 className="text-base text-white font-bold">
            Do you feel there are symptonuse in your body
          </h2>
          <div>
            <button className="bg-[#db2b6a] text-white text-[10px] rounded-md p-2 mt-1">
              Start Consulation
            </button>
          </div>
        </div>
        <div className="w-[40%] flex justify-end items-center">
          <img
            src={img1}
            alt="img"
            className="h-[100px] w-[100px] rounded-full object-cover "
          />
        </div>
      </div>
      <div className="flex justify-between mt-4 py-2">
        <h2 className="text-base text-gray-600 font-semibold">
          Popuar Doctors
        </h2>
        <p className="text-sm text-gray-400">see all</p>
      </div>
      <div className="flex flex-col gap-5 mt-1">
        {array.map((arrays, index) => (
          <Link  key={index} to={arrays.link}>
          <div className="flex bg-white p-2">
          
            <div className=" bg-[#fffcc0] rounded-md p-4">
              <img
                src={img1}
                className="w-[50px] h-[50px] object-cover rounded-full overflow-hidden"
                alt=""
              />
            </div>
            <div className="px-4 py-2 space-y-1">
              <h2 className="text-sm font-semibold">{arrays.name}</h2>
              <p className="text-[12px] text-gray-500">{arrays.location}</p>
              <div className="flex items-center gap-1">
              <span className="text-xl text-[#ffd726]"><MdOutlineStar /></span><span className="text-sm font-semibold">{arrays.rate}</span><p className="text-[12px] font-semibold text-[#1e78c0]">{arrays.review}</p>
              </div>
            </div>
          </div>
          
          </Link>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Doctorlist;
