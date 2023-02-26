import React, { useState } from "react";
import {
  FaBell,
  FaBox,
  FaBullhorn,
  FaCheck,
  FaDollarSign,
  FaHandHoldingUsd,
  FaHome,
  FaHourglassHalf,
  FaPager,
  FaUikit,
} from "react-icons/fa";
import {
  HiChat,
  HiChatAlt,
  HiChatAlt2,
  HiOutlineCurrencyDollar,
  HiOutlineHome,
  HiOutlineMail,
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiUserGroup,
} from "react-icons/hi";
import { Outlet, NavLink } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import DashboardNab from "../pages/Shared/Navbar/DashboardNab";
import "./Dashboard.css";
import { FcCancel } from "react-icons/fc";

const AdminDashboard = () => {
  const [propertiesSubmenu, setPropertiesSubmenu] = useState(false);
  const [hotelsSubmenu, setHotelsSubmenu] = useState(false);
  const [ordersSubMenu, setOrdersSubmenu] = useState(false);
  const [accountSubmenu, setAccountSubmenu] = useState(false);
  const [financeSubmenu, setFinanceSubmenu] = useState(false);
  const [promotionSubmenu, setPromotionSubmenu] = useState(false);
  const [messageSubmenu, setMessageSubmenu] = useState(false);
  useTitle('Dashboard')
  return (
    <div>
      <DashboardNab></DashboardNab>
      <div className="grid grid-cols-5 gap-1">
        <div>
          <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 h-full transition-all duration-300 border-none z-10 text-[#8adfb7] shadow-lg border-r-4">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
              <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-bold tracking-wide text-gray-400 uppercase">
                      Dashboard
                    </div>
                  </div>
                </li>
                {/* // Properties  */}
                <li>
                  <p
                    onClick={() => setPropertiesSubmenu(!propertiesSubmenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaBox className="w-5 h-5"></FaBox>
                    </span>
                    <span className="ml-2 text-black font-bold text-sm tracking-wide truncate">
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
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                        >
                          <span className="inline-flex justify-center items-center ml-8">
                            <FaHome></FaHome>
                          </span>

                          <span className="ml-2 text-black font-bold text-sm tracking-wide truncate ">
                            Hotels
                          </span>
                        </p>

                        {/* inner sub menu of hotels  */}
                        <div
                          className={`${hotelsSubmenu ? "visible" : "hidden"}`}
                        >
                          <ul>
                            <li>
                              <NavLink
                                to="/dashboard/managehotel"
                                className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                                }
                              // className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                              >
                                <span className="inline-flex justify-center items-center ml-8">

                                  <HiOutlineHome></HiOutlineHome>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate text-black font-bold">
                                  Manage Hotels
                                </span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/dashboard/pendingHotel"
                                className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                                }
                              // className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                              >
                                <span className="inline-flex justify-center items-center ml-8">

                                  <FaHourglassHalf></FaHourglassHalf>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate text-black font-bold">
                                  Pending Hotel
                                </span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/dashboard/blockedhotel"
                                className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                                }
                              // className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                              >
                                <span className="inline-flex justify-center items-center ml-8">

                                  <FaHourglassHalf></FaHourglassHalf>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate text-black font-bold">
                                  Blocked Hotel
                                </span>
                              </NavLink>
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
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <HiOutlineShoppingCart className="w-5 h-5"></HiOutlineShoppingCart>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate text-black font-bold">
                      Orders
                    </span>
                  </p>
                  <div className={`${ordersSubMenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <NavLink
                          to="/dashboard/allorders"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-8">
                            <HiOutlineShoppingBag className="text-xl"></HiOutlineShoppingBag>
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate text-black font-bold">
                            All Orders
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/completedorders"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-8">
                            <FaCheck></FaCheck>
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate font-bold text-black">
                            Completed Orders
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/canceledorders"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-8">
                            <FcCancel className="w-4 h-4"></FcCancel>
                          </span>

                          <span className="ml-2 text-sm tracking-wide truncate font-bold text-black">
                            Canceled Orders
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* // Manage Account  */}
                <li>
                  <p
                    onClick={() => setAccountSubmenu(!accountSubmenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaUikit className="w-5 h-5"></FaUikit>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate font-bold text-black">
                      Manage Account
                    </span>
                  </p>
                  <div className={`${accountSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <NavLink
                          to="/dashboard/alladmin"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-8">
                            <HiUserGroup className="font-bold"></HiUserGroup>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            All Admin
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/editors"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-8">
                            <HiUserGroup className="font-bold"></HiUserGroup>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            Editors
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/organizer"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-8">
                            <HiUserGroup className="font-bold"></HiUserGroup>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            All Organizer
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/allusers"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-8">
                            <HiUserGroup className="font-bold"></HiUserGroup>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            All Users
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* // finance  */}
                <li>
                  <p
                    onClick={() => setFinanceSubmenu(!financeSubmenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaPager className="w-5 h-5"></FaPager>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate font-bold text-black">
                      Finance
                    </span>
                  </p>
                  <div className={`${financeSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <NavLink
                          to="/dashboard/paymentreceived"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-8">
                            <HiOutlineCurrencyDollar className="text-xl"></HiOutlineCurrencyDollar>
                          </span>

                          <span className="ml-2 text-sm tracking-wide truncate font-bold text-black">
                            Payments Received
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/payoutToOrganizer"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-8">
                            <FaDollarSign className=""></FaDollarSign>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            Payouts to organizer
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/refundtocustomer"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-8">
                            <FaHandHoldingUsd className="text-xl"></FaHandHoldingUsd>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            Refund to customer
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* promotions */}
                <li>
                  <p
                    onClick={() => setPromotionSubmenu(!promotionSubmenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaPager className="w-5 h-5"></FaPager>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate font-bold text-black">
                      Promotions
                    </span>
                  </p>
                  <div className={`${promotionSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <NavLink
                          to="/dashboard/campaign"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-8">
                            <FaBullhorn className="text-xl"></FaBullhorn>
                          </span>

                          <span className="ml-2 text-sm tracking-wide truncate font-bold text-black">
                            Campaign
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Message  */}
                <li>
                  <p
                    onClick={() => setMessageSubmenu(!messageSubmenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <HiOutlineMail className="w-5 h-5"></HiOutlineMail>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate font-bold text-black">
                      Messages
                    </span>
                  </p>

                  <div className={`${messageSubmenu ? "visible" : "hidden"} ml-2`}>
                    <ul>
                      <li>
                        <NavLink
                          to="/dashboard/livechat"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <HiChatAlt2 className="w-5 h-5"></HiChatAlt2>
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate font-bold text-black">
                            Live Chat
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/toOrganizer"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <HiChatAlt className="w-5 h-5"></HiChatAlt>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            message to organizer
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/tocustomer"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <HiChat className="w-5 h-5"></HiChat>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            message to customer
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/tosubscriber"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <HiChat className="w-5 h-5"></HiChat>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            message to subscribes
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Notifications  */}
                <li>
                  <p className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer">
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaBell className="w-5 h-5"></FaBell>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate font-bold text-black">
                      Notifications
                    </span>
                    <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                      1.2k
                    </span>
                  </p>
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
    </div >
  );
};

export default AdminDashboard;
