import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import SellerAvailableCampaign from "./SellerAvailableCampaign";
import SellerRegisteredCampaign from "./SellerRegisteredCampaign";

const SellerCampaign = () => {
  useTitle('Campaign');
  const [show, setShow] = useState("available-campaign");
  return (
    <div>
      <div className="m-8">
        <h2>Campaign Management</h2>
        <div className="border-1 border-slate-600 m-2">
          {/* offer nav */}
          <div className="w-full py-3 text-slate-700">
            <ul className="flex justify-start gap-2">
              <li
                className={
                  show === "available-campaign"
                    ? " p-2 cursor-pointer border-b-2 border-orange-400"
                    : "p-2 cursor-pointer"
                }
                onClick={() => setShow("available-campaign")}
              >
                Available Campaign
              </li>
              <li
                className={
                  show === "registered-campaign"
                    ? " p-2 cursor-pointer border-b-2 border-orange-400 "
                    : "p-2 cursor-pointer"
                }
                onClick={() => setShow("registered-campaign")}
              >
                Registered Campaign
              </li>
            </ul>
          </div>
          {/* offer body */}
          <div className="p-2 border-2 border-slate-300">
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
