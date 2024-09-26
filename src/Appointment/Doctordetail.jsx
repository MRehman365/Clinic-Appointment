import React from "react";
import "../App.css";
import img1 from "../assets/WhatsApp Image 2024-09-24 at 5.35.52 AM.jpeg";
import map from "../assets/WhatsApp Image 2024-09-24 at 6.05.15 AM.jpeg";
import { FaBrain } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Doctordetail = () => {
  return (
    <div className="h-[100vh] overflow-hidden flex flex-col justify-between">
      <div className="h-full doctor-detail relative">
        <Link className="absolute top-4 left-4 z-40" to="/doctorlist">
          <IoArrowBack className="text-white text-xl" />
        </Link>
        <img
          src={img1}
          className="absolute h-full w-full object-cover opacity-70"
          alt=""
        />
      </div>
      <div className="max-w-md mx-auto bg-card text-card-foreground p-5 rounded-lg ">
        <h2 className="text-lg font-bold">Dr. M NEHAL AHMAD</h2>
        <p className="text-sm font-[500] text-[#1e78c0]">Dermatologists</p>
        <div className="flex justify-around space-x-4">
          <div className="flex items-center bg-gray-100 p-2 rounded-sm">
            <FaBrain className="text-lg text-[#ff11ae]" />

            <span className="ml-2 text-[11px]">
              Experiences
              <br />{" "}
              <span className="text-[#1e78c0] font-semibold"> 2 Years</span>
            </span>
          </div>
          <div className="flex items-center bg-gray-100 px-4 py-2rounded-sm">
            <IoStar className="text-lg text-[#ffa42d]" />
            <span className="ml-2 text-[11px]">
              Rating
              <br />{" "}
              <span className="text-[#1e78c0] font-semibold"> 4.8/5.0</span>
            </span>
          </div>
          <div className="flex items-center bg-gray-100 p-2 rounded-sm">
            <MdPeopleAlt className="text-lg text-[#5111ff]" />
            <span className="ml-2 text-[11px]">
              Patients
              <br /> <span className="text-[#1e78c0] font-semibold"> 75+ </span>
            </span>
          </div>
        </div>
        <h3 className="text-[16px] font-bold mt-2">About Doctor</h3>
        <p className="text-[12px] text-justify text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel.
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-bold mt-1">Location</h3>
          <div className="h-[20vh] rounded-lg overflow-hidden">
            <img src={map} alt="" />
          </div>
          <Link
            to="/shadule"
            className="bg-[#db2b6a] text-white p-3 rounded-lg  text-center w-[100%]"
          >
            Make Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctordetail;
