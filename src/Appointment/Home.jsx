import React from "react";
import img1 from "../assets/WhatsApp Image 2024-09-26 at 7.00.14 AM.jpeg";
import img2 from "../assets/WhatsApp Image 2024-09-24 at 5.35.52 AM.jpeg";
import img3 from "../assets/WhatsApp Image 2024-09-26 at 6.59.44 AM.jpeg";
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
    img: img2,
  },
  {
    title: "Doctor Consulation",
    location: "Jamu",
    rate: "58",
    experince: "20 Year experince",
    img: img3,
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
          <div key={index} className="flex flex-col w-full gap-1">
            <div className="w-full h-[250px] rounded-lg overflow-hidden relative">
              <div className="text-2xl absolute right-2 top-2 text-[white] after:text-red-600">
                <FaHeart />
              </div>
              <img
                src={arrays.img}
                alt="image"
                className=" object-cover h-full w-full"
              />
            </div>
            <h2 className="text-[18px] font-[500]">{arrays.title}</h2>
            <p className="flex items-center text-sm gap-1 text-gray-500">
              <span>
                <IoLocationOutline />
              </span>
              {arrays.location}
            </p>
            <div className="flex gap-2">
              <p className="flex items-center gap-1 text-sm text-gray-500">
                <span className="flex text-[#f3af27]">
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
