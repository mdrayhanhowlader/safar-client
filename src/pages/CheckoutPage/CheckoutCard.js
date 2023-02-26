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
          <div className="w-full grid grid-cols-4 items-center">
            <div className="col-span-2 flex">
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
            <p className="col-span-1 text-xl font-medium mt-2 flex justify-center">${order?.total_price}</p>
            {console.log(order?.total_price)}
            <div className="col-span-1 mt-4 flex justify-end">
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
