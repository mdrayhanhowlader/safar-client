import React from "react";

const SellerDashboardOverview = () => {
  return (
    <div>
      <div className="px-4 py-8 w-full">
        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#A7F3D0] p-8 rounded-lg contrast-100">
            <h4 className="text-white text-3xl">
              Total Products <span className="font-semibold"> 120</span>
            </h4>
          </div>
          <div className="bg-[#A7F3D0] p-8 rounded-lg contrast-100">
            <h4 className="text-white text-3xl">
              Total Orders <span className="font-semibold"> 40</span>
            </h4>
          </div>
          <div className="bg-[#A7F3D0] p-8 rounded-lg contrast-100">
            <h4 className="text-white text-3xl">
              Total Earnings
              <span className="font-semibold">$1200</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboardOverview;
