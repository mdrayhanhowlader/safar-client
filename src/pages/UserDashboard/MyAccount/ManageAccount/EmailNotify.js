import React from "react";
import { FaBell } from "react-icons/fa";

const EmailNotify = () => {
  return (
    <div className="bg-white rounded-md cursor-pointer p-4 border-2 border-blue-100">
      <div className="flex">
        <div className="w-12 h-12 bg-gray-100 overflow-hidden border-2 border-gray-400 rounded-full flex justify-center items-center">
          <FaBell className="text-sm lg:text-2xl"></FaBell>
        </div>

        <div className="ml-1">
          <h2 className="font-bold ml-2 mt-4 ">Email notifications</h2>
          <p className="ml-2 mt-2 pb-2">
          Decide what you want to be notified about, and unsubscribe from what you don't.
          </p>
          <p className="ml-2 text-blue-500">Manage Email notifications</p>
        </div>
      </div>
    </div>
  );
};

export default EmailNotify;
