import React from "react";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../assets/WhatsApp Image 2024-09-24 at 6.05.15 AM.jpeg";
import profile from "../assets/WhatsApp Image 2024-09-24 at 6.57.25 AM.jpeg";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";
import { GiLiver, GiKidneys, GiStomach, GiMuscularTorso } from 'react-icons/gi'
import { 
  FaTooth

} from 'react-icons/fa'

const tests = [
  { name: "Effort Test", icon: FaHeartbeat },
  { name: "Kidneys", icon: GiKidneys },
  { name: "Stomach", icon: GiStomach },
  { name: "Dental", icon:  FaTooth },
];

const Mainhome = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <div>
        <header className="flex justify-between items-center p-4">
          <IoMenu className="w-6 h-6 text-gray-500" />
          <h1 className="text-lg text-gray-700 font-semibold">Home</h1>
          <div className="w-8 h-8 bg-blue-100 rounded-full overflow-hidden">
            <img src={profile} alt="" />
          </div>
        </header>

        <main className="px-4">
          <div className="mt-6">
            <p className="text-gray-500">Hi, Hilary Ouse</p>
            <h2 className="text-2xl text-gray-700 font-semibold mt-1">Welcome Back</h2>
          </div>

          <div className="relative mt-6">
            <IoSearchOutline className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-lg text-sm focus:outline-none"
            />
          </div>

          <div className="mt-6 bg-blue-500 rounded-xl p-4 text-white text-center">
            <h3 className="font-[500] text-lg">Book a Medical Test</h3>
            <p className="mt-2 text-sm opacity-80 px-2">
              Cras ut iaculis mi. Donec suscipit, massa vari doctor eleifend
              vulputate, metus diam ornare.
            </p>
            <Link to="/digestion">
              <button className="mt-4 bg-white text-blue-500 py-2 px-4 rounded-full w-full text-sm font-semibold">
                BOOK NOW
              </button>
            </Link>
          </div>

          <div className="w-full mx-auto mt-6 overflow-x-hidden">
            <h2 className="text-base text-gray-600 font-[500] mb-4">Recommended Tests</h2>
            <Slider {...settings} className="">
              {tests.map((test, index) => (
                <div key={index} className="px-2 flex justify-center items-center ">
                  <div className="bg-white hover:bg-[#f57d24] transition-all hover:text-white py-4 text-gray-600 rounded-lg text-center">
                  <div className="w-16 h-16 bg-[#eef4f8] rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <test.icon className="text-[#a6bfce] text-4xl" />
                </div>
                    <p className="text-[12px]">{test.name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="mt-8">
            <h3 className="text-base text-gray-600 font-[500] mb-4">Report</h3>
            <div className="flex space-x-4">
              <button className="flex-1 border border-blue-500 text-blue-500 py-2 rounded-full text-sm font-semibold">
                MAKE REPORT
              </button>
              <button className="flex-1 bg-blue-500 text-white py-2 rounded-full text-sm font-semibold">
                VIEW REPORT
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Mainhome;
