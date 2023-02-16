import React from "react";
import useTitle from "../../../../hooks/useTitle";
import SellerAllOrdersList from "./SellerAllOrdersList";
import SellerOrderNav from "./SellerOrderNav";

const ManageSellerOrder = () => {
  useTitle('Manage Seller Orders')
  return (
    <div>
      <div className="w-full  py-4">
        <h2 className="text-2xl font-bold text-gray-800">Order</h2>
        <h6 className="text-md font-sm text-gray-700">28 orders found</h6>
      </div>
      <div className="overflow-x-auto">
        <div className="w-full ">
          <SellerOrderNav></SellerOrderNav>
        </div>
        <div className="w-full  flex items-center font-sans mt-6">
          <SellerAllOrdersList></SellerAllOrdersList>
        </div>
      </div>
    </div>
  );
};

export default ManageSellerOrder;
