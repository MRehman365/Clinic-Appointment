import React from 'react'
import { IoArrowBack, IoSearch, IoOptions } from 'react-icons/io5'
import { 
  FaTooth, 
  FaBrain, 
  FaBone, 
  FaEye, 
  FaToilet
} from 'react-icons/fa'
import { GiLiver, GiKidneys, GiStomach, GiMuscularTorso } from 'react-icons/gi'
import { BsHeart } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Effort Test', icon: BsHeart },
  { name: 'Digestion', icon: GiStomach },
  { name: 'Dentistry', icon: FaTooth },
  { name: 'Brain', icon: FaBrain },
  { name: 'Kidney', icon: GiKidneys },
  { name: 'Heart', icon: FaHeartbeat },
  { name: 'Bones', icon: FaBone },
  { name: 'Liver', icon: GiLiver },
  { name: 'Muscles', icon: GiMuscularTorso },
  { name: 'Bowel', icon: FaToilet },
  { name: 'Eye', icon: FaEye },
]
const Categories = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <div className="w-full overflow-x-hidden  p-2 ">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4 sticky bg-[#fafafa] top-0 z-20">
          <Link to='/mainhome'><IoArrowBack className="text-gray-600 text-xl" /></Link>
            <h1 className="text-lg font-semibold text-center flex-grow">Book Your Medical Test</h1>
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
          <h2 className="text-lg font-semibold mb-4">Search By Categories</h2>
          <div className="grid grid-cols-3 gap-2">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center ">
              <div className='bg-white p-4'>
                <div className="w-16 h-16 bg-[#eef4f8] rounded-lg flex items-center justify-center mb-2">
                  <category.icon className="text-[#a6bfce] text-2xl" />
                </div>
                <p className="text-xs text-center text-gray-500">{category.name}</p>
              </div>
              </div>
            ))}
          </div>
          </div>
          </div>
          <Footer />
    </div>
  )
}

export default Categories
