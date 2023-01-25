import React from "react";
import { FaUserEdit } from "react-icons/fa";

const PersonalDetails = () => {
  return (
    <div className="bg-white rounded-md cursor-pointer p-4 border-2 border-blue-100">
      <div className="flex">
        <div className="w-12 h-12 bg-gray-100 overflow-hidden border-2 border-gray-400 rounded-full flex justify-center items-center">
          <FaUserEdit className="text-2xl"></FaUserEdit>
        </div>

        <div className="ml-1">
          <h2 className="font-bold ml-2 mt-4 ">Personal details</h2>
          <p className="ml-2 mt-2 pb-2">
            Update your info and find out how it's used.
          </p>
          <p className="ml-2 text-blue-500">Manage Your personal details</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
