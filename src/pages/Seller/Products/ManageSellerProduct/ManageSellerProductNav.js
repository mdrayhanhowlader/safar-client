import React from "react";
import { Link } from "react-router-dom";

const ManageSellerProductNav = ({ isActive, isSetActive }) => {
  return (
    <div>
      <div>
        {/* nav left */}
        <div className="flex justify-start gap-2 md:gap-8">
          <div>
            <Link
              onClick={() => isSetActive("active")}
              className={
                isActive === "active"
                  ? "text-md text-slate-900 font-semibold pb-1 border-b-2 border-blue-600"
                  : "text-md text-slate-400 font-semibold"
              }
            >
              Active
            </Link>
          </div>
          <div>
            <Link
              onClick={() => isSetActive("deactive")}
              className={
                isActive === "deactive"
                  ? "text-md text-slate-900 font-semibold pb-1 border-b-2 border-blue-600"
                  : "text-md text-slate-400 font-semibold"
              }
            >
              Deactivated
            </Link>
          </div>
          <div>
            <Link
              onClick={() => isSetActive("delete")}
              className={
                isActive === "delete"
                  ? "text-md text-slate-900 font-semibold pb-1 border-b-2 border-blue-600"
                  : "text-md text-slate-400 font-semibold"
              }
            >
              Deleted
            </Link>
          </div>
        </div>
        {/* nav right */}
        <div></div>
      </div>
    </div>
  );
};

export default ManageSellerProductNav;
