import React from "react";
import { FaBell, FaShuttleVan, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SellerSubmenu = () => {



    return (
        <div className="absolute top-full md:right-0 bg-slate-300 p-2 w-48">
            <ul className="text-gray-700  pt-1">
                <li className="">
                    <Link
                        to='/myprofile'
                        className="flex items-center rounded hover:bg-sky-300 hover:text-black py-2 px-4  whitespace-no-wrap"

                    >
                        <FaUserAlt></FaUserAlt>
                        <span className="mx-1">My Profile</span>
                    </Link>
                </li>
                <li className="">
                    <Link
                        to="/Settings"
                        className="flex items-center hover:bg-sky-300 hover:text-black py-2 px-4  whitespace-no-wrap"

                    >
                        <FaShuttleVan></FaShuttleVan>
                        <span className="mx-1">Settings</span>
                    </Link>
                </li>
                <li className="">
                    <Link
                        to="/message"
                        className="flex items-center hover:bg-sky-300 hover:text-black py-2 px-4  whitespace-no-wrap"

                    >
                        <FaBell></FaBell>
                        <span className="mx-1">Message</span>
                    </Link>
                </li>
                <li className="">
                    <button
                        className=" hover:bg-sky-100 rounded-2xl hover:text-black py-2 px-6 mx-3  whitespace-no-wrap"
                    >
                        Log out
                    </button>
                </li>

            </ul>
        </div>
    );
};

export default SellerSubmenu;
