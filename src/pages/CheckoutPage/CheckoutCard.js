import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { FiDelete } from "react-icons/fi";

const CheckoutCard = ({ orders }) => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {orders?.map((order) => (
        <div className="outline outline-slate-100 hover:outline-2 hover:outline-blue-500 w-full rounded mt-5 p-4 flex justify-between items-center flex-wrap">
          <div className="w-full flex justify-between items-center">
            <div className="flex">
              <input
                className="hidden"
                type="checkbox"
                name=""
                id={order?._id}
              />
              <label
                htmlFor={order?._id}
                className="text-lg font-medium ml-1 cursor-default"
              >
                {order?.hotel_name}
              </label>
            </div>
            <p className="text-xl font-medium mt-2">${order?.total_price}</p>
            {console.log(order?.total_price)}
            <div className="mt-4">
              <button className="text-rose-500 text-xl hover:text-red-800">
                <FiDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutCard;
