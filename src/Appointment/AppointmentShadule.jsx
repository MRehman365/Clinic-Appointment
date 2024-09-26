import React from "react";
import img1 from "../assets/WhatsApp Image 2024-09-24 at 6.57.25 AM.jpeg";
import { Link } from "react-router-dom";
import Date from "./Date";
import { IoArrowBack, IoSearch, IoOptions } from "react-icons/io5";

const AppointmentShadule = () => {
  return (
    <div className="h-[100vh] overflow-x-hidden flex flex-col justify-between">
      <div className="h-full doctor-detail relative rounded-lg  flex justify-between items-center bg-black">
        <Link className="absolute top-4 left-4 z-40" to="/doctordetail">
          <IoArrowBack className="text-white text-xl" />
        </Link>
        <img
          src={img1}
          className="absolute h-full w-full object-cover"
          alt=""
        />
        <div className="w-[40%] flex justify-center items-center z-10">
          <img
            src={img1}
            alt="img"
            className="h-[150px] w-[150px] rounded-full object-cover"
          />
        </div>
        <div className="w-[60%] flex flex-col justify-start z-10 p-4">
          <h2 className="text-base text-white py-1 font-bold">
            Dr. NEHAL AHMAD
          </h2>
          <p className="text-sm font-semibold text-[#ffffff]">Dermatologists</p>
          <p className="text-[12px] py-2 text-[#ffffff]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            corporis, voluptates ex sit consequatur illum et magnam voluptatem
            modi.
          </p>
        </div>
      </div>
      <div className="bg-white h-[60vh] rounded-xl relative -top-4">
      <div className="h-auto p-3">
        <Date />
        
      <div className="max-w-md mx-auto bg-card text-card-foreground rounded-lg ">
        <h3 className="text-[16px] font-bold mt-2">Notes</h3>
        <p className="text-[12px] text-justify text-gray-500  border p-2 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum Lorem ipsum
          dolor lor
        </p>
      </div>
      </div>
      <div className="flex w-full px-4">
        <div className="flex gap-2 w-full">
          <Link
            to="/home"
            className="bg-[#db2b6a] text-white p-3 rounded-lg  text-center w-[100%]"
          >
            Make Appointment
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AppointmentShadule;
