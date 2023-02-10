import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";

const PaymentDetails = () => {
  return (
    <div className="bg-white rounded-md cursor-pointer p-4 border-2 border-blue-100">
      <div className="flex">
        <div className="w-12 h-12 bg-gray-100 overflow-hidden border-2 border-gray-400 rounded-full flex justify-center items-center">
          <FaMoneyCheckAlt className="text-2xl"></FaMoneyCheckAlt>
        </div>

        <div className="ml-1">
          <h2 className="font-bold ml-2 mt-2 ">Payment Details</h2>
          <p className="ml-2 mt-2 pb-2">
            Securely add or remove payment methods to make it easier when you
            book.
          </p>
          <p className="ml-2 text-blue-500">Manage Payment Details</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
