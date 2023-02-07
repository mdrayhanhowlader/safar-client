import React, { useState } from "react";
import {
  FaBell,
  FaBox,
  FaEnvelope,
  FaPager,
  FaRegSun,
  FaUikit,
  FaUser,
} from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiBasket } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import DashboardNab from "../pages/Shared/Navbar/DashboardNab";

const SellerDashboard = () => {
  const [productsSubmenu, setProductsSubmenu] = useState(false);
  const [ordersSubMenu, setOrdersSubmenu] = useState(false);
  const [promotionSubmenu, setPromotionSubmenu] = useState(false);
  const [financeSubmenu, setFinanceSubmenu] = useState(false);
  const [usersSubmenu, setUsersSubmenu] = useState(false);
  return (
    <div>
      <DashboardNab></DashboardNab>
      <div className="grid grid-cols-5 gap-1">
        <div>
          <div
            // style={{
            //   backgroundImage: `url('https://img.freepik.com/premium-photo/white-snow-hill-snow-mountain-background-with-cloudy-sky_31949-7.jpg?w=2000')`,
            // }}
            className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 h-full text-[#A7F3D0] transition-all duration-300 border-none z-10 sidebar shadow-lg border-r-4"
          >
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
              <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-black uppercase"></div>
                  </div>
                </li>
                {/* // Dashboard  */}
                <li>
                  <p className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer">
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaBox className="w-4 mx-2 h-4"></FaBox>
                    </span>
                    <span className="ml-2 text-black font-bold text-sm tracking-wide truncate">
                      Dashboard
                    </span>
                  </p>
                </li>
                {/* // products  */}
                <li>
                  <p
                    onClick={() => setProductsSubmenu(!productsSubmenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <BiBasket className="w-4 mx-2 h-4"></BiBasket>
                    </span>
                    <span className="ml-2 text-black font-bold text-sm tracking-wide truncate">
                      Products
                    </span>
                  </p>
                  <div className={`${productsSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <Link
                          to="/sellerdashboard/managesellerproduct"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                        >
                          <span className="md:ml-4 text-black text-sm tracking-wide truncate">
                            Manage Product
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sellerdashboard/addsellerproduct"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                        >
                          <span className="md:ml-4 text-black text-sm tracking-wide truncate">
                            Add Product
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* // orders  */}
                <li>
                  <p
                    onClick={() => setOrdersSubmenu(!ordersSubMenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <HiOutlineShoppingCart className="w-4 mx-2 h-4"></HiOutlineShoppingCart>
                    </span>
                    <span className="ml-2 text-black font-bold text-sm tracking-wide truncate">
                      Orders
                    </span>
                  </p>
                  <div className={`${ordersSubMenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <Link
                          to="/sellerdashboard/managesellerorder"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                        >
                          <span className="md:ml-4 text-black text-sm tracking-wide truncate">
                            Manage Orders
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sellerdashboard/managesellerreview"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                        >
                          <span className="md:ml-4 text-black text-sm tracking-wide truncate">
                            Manage Review
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sellerdashboard/cancelsellerorder"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                        >
                          <span className="md:ml-4 text-black text-sm tracking-wide truncate">
                            Cancel Orders
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* // promotions  */}
                <li>
                  <p
                    onClick={() => setPromotionSubmenu(!promotionSubmenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaUikit className="w-4 mx-2 h-4"></FaUikit>
                    </span>
                    <span className="ml-2 text-black font-bold text-sm tracking-wide truncate">
                      Promotions
                    </span>
                  </p>
                  <div className={`${promotionSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <Link
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          to="/sellerdashboard/sellercampaign"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            Campaign
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          to="/sellerdashboard/selleroffer"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            Offer
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* // finance  */}
                <li>
                  <p
                    onClick={() => setFinanceSubmenu(!financeSubmenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaPager className="w-4 mx-2 h-4"></FaPager>
                    </span>
                    <span className="ml-2 text-black font-bold text-sm tracking-wide truncate">
                      Finance
                    </span>
                  </p>
                  <div className={`${financeSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-black text-sm tracking-wide truncate">
                            Account Statement
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-black text-sm tracking-wide truncate">
                            Order overview
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-black text-sm tracking-wide truncate">
                            Transition overview
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a
                    href="/"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaEnvelope className="w-4 mx-2 h-4"></FaEnvelope>
                    </span>
                    <span className="ml-2 text-black font-bold text-sm tracking-wide truncate">
                      Messages
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaBell className="w-4 mx-2 h-4"></FaBell>
                    </span>
                    <span className="ml-2 text-black font-bold text-sm tracking-wide truncate">
                      Notifications
                    </span>
                    <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                      1.2k
                    </span>
                  </a>
                </li>
                {/* <li className="px-5 hidden md:block">
                      <div className="flex flex-row items-center mt-5 h-8">
                        <div className= text-black"text-sm font-light tracking-wide text-gray-400 uppercase">
                          Settings
                        </div>
                      </div>
                    </li> */}

                {/* // Users  */}
                <li>
                  <p
                    onClick={() => setUsersSubmenu(!usersSubmenu)}
                    href="/"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaUser className="w-4 mx-2 h-4"></FaUser>
                    </span>
                    <span className="ml-2 text-black font-bold text-sm tracking-wide truncate">
                      Users
                    </span>
                  </p>
                  <div className={`${usersSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-black text-sm tracking-wide truncate">
                            All Users
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-black text-sm tracking-wide truncate">
                            Active Users
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-black text-sm tracking-wide truncate">
                            Inactive Users
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-black text-sm tracking-wide truncate">
                            Make Admin
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="/"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaRegSun className="w-4 mx-2 h-4"></FaRegSun>
                    </span>
                    <span className="ml-2 text-black font-bold text-sm tracking-wide truncate">
                      Settings
                    </span>
                  </a>
                </li>
              </ul>
              <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs text-black">
                Copyright @2023
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4 mt-[50px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
