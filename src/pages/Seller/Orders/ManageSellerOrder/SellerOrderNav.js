import React, { useState } from "react";
import { Link } from "react-router-dom";

const SellerOrderNav = () => {
  const [isActive, isSetActive] = useState("allOrders");
  return (
    <div>
      <div>
        {/* nav left */}
        <div className="flex justify-start gap-2 md:gap-8">
          <div>
            <Link
              onClick={() => isSetActive("allOrders")}
              className={
                isActive === "allOrders"
                  ? "text-md text-slate-900 font-semibold pb-1 border-b-2 border-blue-600"
                  : "text-md text-slate-400 font-semibold"
              }
            >
              All orders
            </Link>
          </div>
          <div>
            <Link
              onClick={() => isSetActive("dispatch")}
              className={
                isActive === "dispatch"
                  ? "text-md text-slate-900 font-semibold pb-1 border-b-2 border-blue-600"
                  : "text-md text-slate-400 font-semibold"
              }
            >
              Dispatch
            </Link>
          </div>
          <div>
            <Link
              onClick={() => isSetActive("pending")}
              className={
                isActive === "pending"
                  ? "text-md text-slate-900 font-semibold pb-1 border-b-2 border-blue-600"
                  : "text-md text-slate-400 font-semibold"
              }
            >
              Pending
            </Link>
          </div>
          <div>
            <Link
              onClick={() => isSetActive("completed")}
              className={
                isActive === "completed"
                  ? "text-md text-slate-900 font-semibold pb-1 border-b-2 border-blue-600"
                  : "text-md text-slate-400 font-semibold"
              }
            >
              Completed
            </Link>
          </div>
        </div>
        {/* nav right */}
        <div></div>
      </div>
    </div>
  );
};

export default SellerOrderNav;
