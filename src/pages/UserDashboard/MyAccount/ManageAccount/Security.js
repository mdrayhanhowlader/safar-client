import React from "react";
import { FaLock } from "react-icons/fa";

const Security = () => {
  return (
    <div className="bg-white rounded-md cursor-pointer p-4 border-2 border-blue-100">
      <div className="flex">
        <div className="">
          <span className="bg-gray-100 overflow-hidden border-2 border-gray-400 rounded-full flex justify-center items-center p-[8px]">
            <FaLock className="text-2xl"></FaLock>
          </span>
        </div>

        <div className="ml-1">
          <h2 className="font-bold ml-2 mt-4 ">Security</h2>
          <p className="ml-2 mt-2 pb-2">
            Adjust your security settings and set up two-factor authentication.
          </p>
          <p className="ml-2 text-blue-500">Manage Account Security</p>
        </div>
      </div>
    </div>
  );
};

export default Security;
