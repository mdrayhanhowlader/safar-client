import React, { useState } from "react";
import {
  FaBed,
  FaBell,
  FaBox,
  FaCaretDown,
  FaCaretRight,
  FaEnvelope,
  FaPager,
  FaPlus,
  FaRegSun,
  FaUikit,
  FaUser,
  FaBullhorn,
  FaClipboardList,
  FaBoxOpen,
  FaFileInvoiceDollar,
  FaUserEdit,
} from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FcCancel } from "react-icons/fc";
import { BiBasket } from "react-icons/bi";
import { Link, NavLink, Outlet } from "react-router-dom";
import DashboardNab from "../pages/Shared/Navbar/DashboardNab";
import { MdOutlineFreeCancellation, MdOutlineStarRate } from "react-icons/md";

const SellerDashboard = () => {
  useState("Seller Dashboard");
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
            className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 h-full text-[#8adfb7] transition-all duration-300 border-none z-10 sidebar shadow-lg border-r-4"
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
                  <p className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-black hover:text-white border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer">
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaBox className="w-4 mx-2 h-4"></FaBox>
                    </span>
                    <span className="ml-2  font-bold text-sm tracking-wide truncate">
                      Dashboard
                    </span>
                  </p>
                </li>
                {/* // products  */}
                <li>
                  <p
                    onClick={() => setProductsSubmenu(!productsSubmenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-black hover:text-white border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <BiBasket className="w-4 mx-2 h-4"></BiBasket>
                    </span>
                    <span className="ml-2 font-bold text-sm tracking-wide truncate">
                      My Rooms
                    </span>
                    <span>
                      {productsSubmenu ? (
                        <FaCaretDown className="ml-5" />
                      ) : (
                        <FaCaretRight className="ml-5" />
                      )}
                    </span>
                  </p>
                  <div className={`${productsSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <NavLink
                          to="/sellerdashboard/managesellerproduct"
                          className={({ isActive }) =>
                            isActive
                              ? "relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                              : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <FaBed className="w-4 mx-2 h-4"></FaBed>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            Manage Rooms
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/sellerdashboard/addsellerproduct"
                          className={({ isActive }) =>
                            isActive
                              ? "relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                              : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <FaPlus className="w-4 mx-2 h-4"></FaPlus>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            Add Room
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* // orders  */}
                <li>
                  <p
                    onClick={() => setOrdersSubmenu(!ordersSubMenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-black hover:text-white border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <HiOutlineShoppingCart className="w-4 mx-2 h-4"></HiOutlineShoppingCart>
                    </span>
                    <span className="ml-2 font-bold text-sm tracking-wide truncate">
                      Orders
                    </span>
                    <span>
                      {ordersSubMenu ? (
                        <FaCaretDown className="ml-5" />
                      ) : (
                        <FaCaretRight className="ml-5" />
                      )}
                    </span>
                  </p>
                  <div className={`${ordersSubMenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <NavLink
                          to="/sellerdashboard/managesellerorder"
                          className={({ isActive }) =>
                            isActive
                              ? "relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                              : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <MdOutlineFreeCancellation className="w-4 mx-2 h-4"></MdOutlineFreeCancellation>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            Manage Orders
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/sellerdashboard/managesellerreview"
                          className={({ isActive }) =>
                            isActive
                              ? "relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                              : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <MdOutlineStarRate className="w-4 mx-2 h-4"></MdOutlineStarRate>
                          </span>
                          <span className="md:ml-4text-sm tracking-wide truncate font-bold text-black">
                            Manage Review
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/sellerdashboard/cancelsellerorder"
                          className={({ isActive }) =>
                            isActive
                              ? "relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                              : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <FcCancel className="w-4 mx-2 h-4"></FcCancel>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            Cancel Orders
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* // promotions  */}
                <li>
                  <p
                    onClick={() => setPromotionSubmenu(!promotionSubmenu)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-black hover:text-white border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaUikit className="w-4 mx-2 h-4"></FaUikit>
                    </span>
                    <span className="ml-2 font-bold text-sm tracking-wide truncate">
                      Promotions
                    </span>
                    {promotionSubmenu ? (
                      <FaCaretDown className="ml-5" />
                    ) : (
                      <FaCaretRight className="ml-5" />
                    )}
                  </p>
                  <div className={`${promotionSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                              : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <FaBullhorn className="w-4 mx-2 h-4"></FaBullhorn>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            Campaign
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
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-black hover:text-white border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaPager className="w-4 mx-2 h-4"></FaPager>
                    </span>
                    <span className="ml-2 font-bold text-sm tracking-wide truncate">
                      Finance
                    </span>
                    {financeSubmenu ? (
                      <FaCaretDown className="ml-5" />
                    ) : (
                      <FaCaretRight className="ml-5" />
                    )}
                  </p>
                  <div className={`${financeSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <NavLink
                          to="/sellerdashboard/accountStatement"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                        }
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <FaClipboardList className="w-4 mx-2 h-4"></FaClipboardList>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            Account Statement
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/sellerdashboard/orderOverview"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                        }
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <FaBoxOpen className="w-4 mx-2 h-4"></FaBoxOpen>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            Order overview
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/sellerdashboard/transitionOverview"
                          className={({ isActive }) => isActive ? 'relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer' : 'relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer'
                        }
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <FaFileInvoiceDollar className="w-4 mx-2 h-4"></FaFileInvoiceDollar>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate font-bold text-black">
                            Transition overview
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <NavLink
                    to="/sellerdashboard/sellerchat"
                    className={({ isActive }) =>
                      isActive
                        ? "relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                        : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                    }
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaEnvelope className="w-4 mx-2 h-4 text-black"></FaEnvelope>
                    </span>
                    <span className="ml-2 font-bold text-sm tracking-wide truncate text-black font-bold">
                      Messages
                    </span>
                  </NavLink>
                </li>

                <li>
                  <a
                    href="/"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-black hover:text-white border-l-4 border-transparent hover:border-blue-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaBell className="w-4 mx-2 h-4"></FaBell>
                    </span>
                    <span className="ml-2 font-bold text-sm tracking-wide truncate">
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
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 hover:text-white dark:hover:bg-gray-600 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaUser className="w-4 mx-2 h-4"></FaUser>
                    </span>
                    <span className="ml-2 font-bold text-sm tracking-wide truncate">
                      My Account
                    </span>
                    {usersSubmenu ? (
                      <FaCaretDown className="ml-5" />
                    ) : (
                      <FaCaretRight className="ml-5" />
                    )}
                  </p>
                  <div className={`${usersSubmenu ? "visible" : "hidden"}`}>
                    <ul>
                      <li>
                        <NavLink
                          to="/sellerdashboard/sellerprofile"
                          className={({ isActive }) =>
                            isActive
                              ? "relative flex flex-row items-center h-11 focus:outline-none bg-sky-300 text-white-600 text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                              : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-black border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer"
                          }
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <FaUserEdit className="w-4 mx-2 h-4"></FaUserEdit>
                          </span>
                          <span className="md:ml-4 text-sm tracking-wide truncate text-black font-bold">
                            My Profile
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="/"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-sky-300 text-black hover:text-white border-l-4 border-transparent hover:border-blue-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaRegSun className="w-4 mx-2 h-4"></FaRegSun>
                    </span>
                    <span className="ml-2 font-bold text-sm tracking-wide truncate">
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
