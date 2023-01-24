import React from "react";
import { FaUserFriends } from "react-icons/fa";

const OtherTravelers = () => {
  return (
    <div className="bg-white rounded-md cursor-pointer p-4 border-2 border-blue-100">
      <div className="flex">
        <div className="w-12 h-12 bg-gray-100 overflow-hidden border-2 border-gray-400 rounded-full flex justify-center items-center">
          <FaUserFriends className="text-2xl"></FaUserFriends>
        </div>

        <div className="ml-1">
          <h2 className="font-bold ml-2 mt-4 ">Other travelers</h2>
          <p className="ml-2 mt-2 pb-2">
          Add or edit info about the people you’re traveling with.
          </p>
          <p className="ml-2 text-blue-500">Manage Travels</p>
        </div>
      </div>
    </div>
  );
};

export default OtherTravelers;
