import React from "react";
import { IoArrowBack, IoSearch, IoOptions } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaVial, FaBookOpen } from "react-icons/fa"; // Importing React icons (you can customize icons as needed)
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";

const tests = [
  {
    name: "Gastric Fluid Analysis",
    parameters: 17,
    price: 120.0,
    icon: <FaVial />,
  },
  {
    name: "Complete Blood Count",
    parameters: 12,
    price: 60.0,
    icon: <FaBookOpen />,
  },
  {
    name: "Complete Blood Count",
    parameters: 12,
    price: 60.0,
    icon: <FaBookOpen />,
  },
  {
    name: "Complete Blood Count",
    parameters: 12,
    price: 60.0,
    icon: <FaBookOpen />,
  },
  {
    name: "Kidney Function Test",
    parameters: 24,
    price: 450.0,
    icon: <FaVial />,
  },
];

const Digestion = () => {
  return (
    <div>
      <div className="w-full bg-[#fafafa] overflow-hidden">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/mainhome">
              <IoArrowBack className="text-gray-600 text-xl" />
            </Link>
            <h1 className="text-lg font-semibold text-center flex-grow">
              Digestion
            </h1>
            <HiOutlineDotsVertical className="text-gray-600 text-xl" />
          </div>
          <div className="relative mb-6">
            <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <IoOptions className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="test-cards-container">
            {tests.map((test, index) => (
              <div key={index} className="card bg-white p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <div className="icon bg-gray-100 p-2 text-2xl rounded-lg mr-4 text-blue-500">
                      {test.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{test.name}</h3>
                      <p className="text-gray-500 text-sm">
                        {test.parameters} Parameters Covered
                      </p>
                    </div>
                  </div>

                  <div className="text-base font-bold text-gray-700">
                    ₹{test.price.toFixed(2)}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-2 w-full ">
                    <Link
                      to="/doctordetail"
                      className="border w-1/2 text-sm text-center border-blue-500 text-blue-500 px-4 py-1 rounded-full hover:bg-blue-100"
                    >
                      DETAILS
                    </Link>
                    <Link
                      to="/shadule"
                      className="bg-blue-500 w-1/2 text-center text-sm text-white px-4 py-1 rounded-full hover:bg-blue-600"
                    >
                      BOOK NOW
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Digestion;
