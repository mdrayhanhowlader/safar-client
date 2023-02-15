import React from "react";
import { FaSlidersH } from "react-icons/fa";

const Preferences = () => {
  return (
    <div className="bg-white rounded-md cursor-pointer p-4 border-2 border-blue-100">
      <div className="flex">
        <div className="">
          <span className="bg-gray-100 overflow-hidden border-2 border-gray-400 rounded-full flex justify-center items-center p-[8px]">
            <FaSlidersH className="text-2xl"></FaSlidersH>
          </span>
        </div>

        <div className="ml-1">
          <h2 className="font-bold ml-2 mt-4 ">Preferences</h2>
          <p className="ml-2 mt-2 pb-2">
            Change your language, currency, and accessibility requirements.
          </p>
          <p className="ml-2 text-blue-500">Manage Preferences</p>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
