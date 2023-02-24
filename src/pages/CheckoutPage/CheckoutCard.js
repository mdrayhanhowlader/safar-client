import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const CheckoutCard = ({ orders }) => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {orders?.map((order) => (
        <div className="border w-full rounded mt-5 p-4 flex justify-between items-center flex-wrap">
          <div className="w-2/3">
            <h3 className="text-lg font-medium">{order?.hotel_name}</h3>
            <p className="text-xl font-medium mt-2">
              Price: ${order?.total_price}
            </p>
            {/* <p className="text-gray-600 text-xs">
              Sold by <b>{user?.displayName}</b>
            </p> */}
            {/* <h4 className="text-red-700 text-xs font-bold mt-1">
              Only 2 left in stock
            </h4> */}
          </div>
          {/* <div>
            <h4 className="text-xl font-medium">
              <sup className="text-blue-500">$</sup> 89
            </h4>
            <h5 className="text-sm font-bold text-blue-500">60% OFF</h5>
          </div> */}
          <div className="w-full flex justify-between mt-4">
            <button className="text-red-700 hover:bg-blue-100 px-2">
              DELETE
            </button>
            {/* <label
              className="block uppercase tracking-wide text-gray-700"
              for="grid-first-name"
            >
              QTY
              <select
                className="ml-3 h-8 border-none text-sm font-semibold bg-blue-500 text-white p-2 rounded"
                id="grid-state"
              >
                <option className="bg-white text-black border-none">1</option>
                <option className="bg-white text-black border-none">2</option>
              </select>
            </label> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutCard;
