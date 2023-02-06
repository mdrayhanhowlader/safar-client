import React, { useState } from "react";
import { Link } from "react-router-dom";
import SellerAvailableCampaign from "./SellerAvailableCampaign";
import SellerRegisteredCampaign from "./SellerRegisteredCampaign";

const SellerCampaign = () => {
  const [show, setShow] = useState("");
  return (
    <div>
      <div className="m-8">
        <h2>Campaign Management</h2>
        <div className="border-1 border-slate-600 m-2">
          {/* offer nav */}
          <div className="w-full p-3">
            <ul className="flex justify-start gap-2">
              <li
                className="bg-slate-400 p-2 cursor-pointer"
                onClick={() => setShow("available-campaign")}
              >
                Available Campaign
              </li>
              <li
                className="bg-slate-400 p-2 cursor-pointer"
                onClick={() => setShow("registered-campaign")}
              >
                Registered Campaign
              </li>
            </ul>
          </div>
          {/* offer body */}
          <div>
            {show === "available-campaign" && (
              <SellerAvailableCampaign></SellerAvailableCampaign>
            )}
            {show === "registered-campaign" && (
              <SellerRegisteredCampaign></SellerRegisteredCampaign>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerCampaign;
