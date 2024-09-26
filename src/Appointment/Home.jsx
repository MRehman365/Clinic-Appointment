import React from "react";
import img1 from "../assets/Annotation 2024-07-25 111648.png";
import img2 from "../assets/Annotation 2024-07-25 111648.png";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Footer from "../Layout/Footer";

const array = [
  {
    title: "Doctor Consulation",
    location: "Jamu",
    rate: "58",
    experince: "20 Year experince",
    img: img1,
  },
  {
    title: "Doctor Consulation",
    location: "Jamu",
    rate: "58",
    experince: "20 Year experince",
    img: img1,
  },
  {
    title: "Doctor Consulation",
    location: "Jamu",
    rate: "58",
    experince: "20 Year experince",
    img: img1,
  },
  {
    title: "Doctor Consulation",
    location: "Jamu",
    rate: "58",
    experince: "20 Year experince",
    img: img1,
  },
  {
    title: "Doctor Consulation",
    location: "Jamu",
    rate: "58",
    experince: "20 Year experince",
    img: img2,
  },
];
const Home = () => {
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col items-start justify-start gap-4 p-5 ">
        {array.map((arrays, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="w-full h-[200px] rounded-lg overflow-hidden relative">
              <div className="text-2xl absolute right-2 top-2 text-[white] after:text-red-600">
                <FaHeart />
              </div>
              <img
                src={img1}
                alt="image"
                className=" object-cover h-full w-full"
              />
            </div>
            <h2 className="text-[18px] font-semibold">{arrays.title}</h2>
            <p className="flex items-center gap-1 text-base text-gray-500">
              <span>
                <IoLocationOutline />
              </span>
              {arrays.location}
            </p>
            <div className="flex gap-2">
              <p className="flex items-center gap-1 text-sm text-gray-500">
                <span className="flex text-[#f3f327]">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </span>
                {arrays.rate} - {arrays.experince}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
