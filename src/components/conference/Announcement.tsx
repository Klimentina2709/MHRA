import React from "react";
import { FaBook, FaCalendar, FaCoffee, FaUser } from "react-icons/fa";

const Announcement = () => {
  return (
    <div className="w-full max-w-[80%] mx-auto ">
      <div className="rounded-full shadow-xl flex justify-evenly py-10">
        <div className="flex items-center">
          <FaCalendar className="text-orange-500 text-4xl mr-2" />
          <div className="flex flex-col">
            <span className="text-xl font-semibold">5</span>
            <span className="text-gray-500">дена</span>
          </div>
        </div>
        <div className="flex items-center">
          <FaUser className="text-orange-500 text-4xl mr-2" />
          <div className="flex flex-col">
            <span className="text-xl font-semibold">6</span>
            <span className="text-gray-500">неверојатни спикери</span>
          </div>
        </div>
        <div className="flex items-center">
          <FaCoffee className="text-orange-500 text-4xl mr-2" />
          <div className="flex flex-col">
            <span className="text-xl font-semibold">9</span>
            <span className="text-gray-500">ресторани</span>
          </div>
        </div>
        <div className="flex items-center">
          <FaBook className="text-orange-500 text-4xl mr-2" />
          <div className="flex flex-col">
            <span className="text-xl font-semibold">28</span>
            <span className="text-gray-500">едукативни книги</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
