import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const CardDashboard = ({ handleCloseCard }) => {
  // const location = useLocation().pathname;
  // console.log(location)
  return (
    <div className="flex justify-center mt-6 ">
      <div
        className="flex bg-slate-100 justify-center p-2"
        style={{ width: "70%", border: "1px solid gray" }}
      >
        {/* navbar */}
        <div>
          <div className="flex justify-between">
            <div className="flex">
              <Link className="mx-2 " to="/test/overview">
                <button
                // className={location === '/test/overview' ? 'border-dashed border-2 border-sky-300' : 'text-black'}
                >
                  Overview
                </button>
              </Link>
              <Link className="mx-2 " to="/test/info">
                <button
                //   className={
                //     location === "/test/info"
                //       ? "border-dashed border-2 border-sky-300"
                //       : "text-black"
                //   }
                >
                  Info
                </button>
              </Link>
              <Link className="mx-2 " to="/test/photos">
                <button
                //   className={
                //     location === "/test/photos"
                //       ? "border-dashed border-2 border-sky-300"
                //       : "text-black"
                //   }
                >
                  Photos
                </button>
              </Link>
              <Link className="mx-2 " to="/test/reviews">
                <button
                //   className={
                //     location === "/test/reviews"
                //       ? "border-dashed border-2 border-sky-300"
                //       : "text-black"
                //   }
                >
                  Reviews
                </button>
              </Link>
              <Link className="mx-2 " to="/test/deals">
                <button
                //   className={
                //     location === "/test/deals"
                //       ? "border-dashed border-2 border-sky-300"
                //       : "text-black"
                //   }
                >
                  Deals
                </button>
              </Link>

              <div className="flex">
                <button onClick={handleCloseCard}>Close</button>
              </div>
            </div>
          </div>

          {/* outlet*/}
          <div className="mt-[-10]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDashboard;
