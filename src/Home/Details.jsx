import { FaStar, FaGraduationCap, FaUserMd, FaRegBell } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import profile from "../assets/WhatsApp Image 2024-09-24 at 6.57.25 AM.jpeg";
import { IoArrowBack, IoSearch, IoOptions } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function LabProfile() {
  return (
    <div className="max-w-md mx-auto h-[100vh] flex flex-col justify-between shadow-lg rounded-lg overflow-hidden p-2">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Link to="/mainhome">
            {" "}
            <IoArrowBack className="text-gray-600 text-xl" />
          </Link>
          <h1 className="text-lg font-semibold text-center text-gray-700 flex-grow">
            Doctor Detail
          </h1>
          <FaRegBell className="text-gray-600 text-xl" />
        </div>
        <div className="flex items-center flex-col justify-center">
          <img
            src={profile}
            alt="Lab"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex-grow text-center">
            <h2 className="text-xl pt-2 text-gray-700 font-[500]">labs</h2>
            <p className="text-gray-500 text-sm">jamu</p>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-4 h-4" />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                4.8 (129 reviews)
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center my-4">
          <Link
            to="/chat"
            className="w-full text-center bg-white border border-[#23aafa] text-[#23aafa] py-1 rounded-full font-medium"
          >
            CONTACT LABS
          </Link>
          <HiOutlineDotsVertical className="text-gray-600 text-lg h-8 w-8 rounded-lg p-2 bg-gray-200" />
        </div>

        <div className="mt-6">
          <h3 className="font-[500] text-gray-700 text-lg mb-2">Stats</h3>
          <div className="space-y-5">
            <div className="flex items-center bg-white rounded-lg p-3">
              <div className="bg-gray-100 p-4 rounded"><HiOfficeBuilding className="w-7 h-7 text-gray-400" /></div>
              <div className="ml-3">
                <p className="text-sm text-gray-600">Studies At</p>
                <p className="font-medium">Jamu</p>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-lg p-3">
            <div className="bg-gray-100 p-4 rounded"><FaGraduationCap className="w-6 h-6 text-gray-400" /></div>
              <div className="ml-3">
                <p className="text-sm text-gray-600">Practicing At</p>
                <p className="font-medium">Jamu</p>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-lg p-3">
            <div className="bg-gray-100 p-4 rounded"><FaUserMd className="w-6 h-6 text-gray-400" /></div>
              <div className="ml-3">
                <p className="text-sm text-gray-600">Happy Patients</p>
                <p className="font-medium">492 patients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <h3 className="font-[500] text-gray-700">Reviews (464)</h3>
          <button className="text-[#23aafa] text-sm font-medium">See All</button>
        </div>
      </div>

      <button className="w-full bg-blue-500 text-white py-3 text-sm font-medium rounded-full">
        BOOK AN APPOINTMENT
      </button>
    </div>
  );
}
