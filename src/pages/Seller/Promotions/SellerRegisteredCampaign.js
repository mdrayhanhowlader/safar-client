import React from "react";

const SellerRegisteredCampaign = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap-reverse justify-center md:justify-between">
      <div className="flex">
        <div className="flex flex-col md:flex-row md:max-w-3xl md:h-36 my-2 rounded-lg bg-white shadow-lg">
          <img
            className=" w-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://images.pexels.com/photos/5874711/pexels-photo-5874711.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="px-6 flex flex-col justify-start">
            <h5 className="text-rose-900 text-xl font-medium mb-2">
              Valentine Campaign
            </h5>
            <p className="text-rose-700 text-base mb-2">
              15% off for all visitors.
            </p>
            <p className="text-rose-600 text-xs mb-2">Feb 14th - Feb 15th</p>
            <button className="bg-rose-600 text-slate-50 mt-1 py-2">
              Registered
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col md:flex-row md:max-w-3xl md:h-36 my-2 rounded-lg bg-white shadow-lg">
          <img
            className=" w-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://images.pexels.com/photos/5874711/pexels-photo-5874711.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="px-6 flex flex-col justify-start">
            <h5 className="text-rose-900 text-xl font-medium mb-2">
              Valentine Campaign
            </h5>
            <p className="text-rose-700 text-base mb-2">
              15% off for all visitors.
            </p>
            <p className="text-rose-600 text-xs mb-2">Feb 14th - Feb 15th</p>
            <button className="bg-rose-600 text-slate-50 mt-1 py-2">
              Registered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerRegisteredCampaign;
