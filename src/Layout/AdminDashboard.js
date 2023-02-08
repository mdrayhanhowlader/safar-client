import React, { useState } from "react";
import { FaBell, FaBox, FaEnvelope, FaPager, FaUikit } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import DashboardNab from "../pages/Shared/Navbar/DashboardNab";
import "./Dashboard.css";

const AdminDashboard = () => {
  const [propertiesSubmenu, setPropertiesSubmenu] = useState(false);
  const [hotelsSubmenu, setHotelsSubmenu] = useState(false);
  const [ordersSubMenu, setOrdersSubmenu] = useState(false);
  const [accountSubmenu, setAccountSubmenu] = useState(false);
  const [financeSubmenu, setFinanceSubmenu] = useState(false);
  const [messageSubmenu, setMessageSubmenu] = useState(false);

  return (
    <div>
      <DashboardNab></DashboardNab>
      <div className="grid grid-cols-5 gap-1">
        <div>
          <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 h-full text-white transition-all duration-300 border-none z-10">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
              <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                      Dashboard
                    </div>
                  </div>
                </li>
                {/* // Properties  */}
                <li>
                  <p
                    onClick={() => setPropertiesSubmenu(!propertiesSubmenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaBox className="w-5 h-5"></FaBox>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Properties
                    </span>
                  </p>
                  <div
                    className={`${propertiesSubmenu ? "visible" : "hidden"}`}
                  >
                    <ul>
                      <li>
                        <p
                          onClick={() => setHotelsSubmenu(!hotelsSubmenu)}
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4 cursor-pointer"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            Hotels
                          </span>
                        </p>

                        {/* inner sub menu of hotels  */}
                        <div
                          className={`${hotelsSubmenu ? "visible" : "hidden"}`}
                        >
                          <ul>
                            <li>
                              <Link
                                to="/dashboard/managehotel"
                                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-8"
                                href="/"
                              >
                                <span className="md:ml-4 text-sm tracking-wide truncate">
                                  Manage Hotels
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/dashboard/pendingHotel"
                                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-8"
                                href="/"
                              >
                                <span className="md:ml-4 text-sm tracking-wide truncate">
                                  Pending Hotel
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/dashboard/blockedhotel"
                                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-8"
                                href="/"
                              >
                                <span className="md:ml-4 text-sm tracking-wide truncate">
                                  Blocked Hotel
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* // orders  */}
                <li>
                  <p
                    onClick={() => setOrdersSubmenu(!ordersSubMenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <HiOutlineShoppingCart className="w-5 h-5"></HiOutlineShoppingCart>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Orders
                    </span>
                  </p>
                  <div className={`${ordersSubMenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <Link
                          to="/dashboard/allorders"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            All Orders
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard/completedorders"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            completed Orders
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard/canceledorders"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            Canceled Orders
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* // Manage Account  */}
                <li>
                  <p
                    onClick={() => setAccountSubmenu(!accountSubmenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaUikit className="w-5 h-5"></FaUikit>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Manage Account
                    </span>
                  </p>
                  <div className={`${accountSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <Link
                          to="/dashboard/alladmin"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            All Admin
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard/editors"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            Editors
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard/organizer"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            All Organizer
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard/allusers"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            All Users
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
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaPager className="w-5 h-5"></FaPager>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Finance
                    </span>
                  </p>
                  <div className={`${financeSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            Payments Received
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            Payouts to organizer
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            Refund to customer
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Message  */}
                <li>
                  <p
                    onClick={() => setMessageSubmenu(!messageSubmenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaEnvelope className="w-5 h-5"></FaEnvelope>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Messages
                    </span>
                  </p>

                  <div className={`${messageSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            Live Chat
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            message to the organizer
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            message to the customer
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-4"
                          href="/"
                        >
                          <span className="md:ml-4 text-sm tracking-wide truncate">
                            message to the subscribes
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Notifications  */}
                <li>
                  <a
                    href="/"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaBell className="w-5 h-5"></FaBell>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Notifications
                    </span>
                    <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                      1.2k
                    </span>
                  </a>
                </li>
                {/* <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center mt-5 h-8">
                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                      Settings
                    </div>
                  </div>
                </li> */}
              </ul>
              <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
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

export default AdminDashboard;
