import React, { useContext } from "react";
import { FaBell, FaHeart, FaShuttleVan, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Submenu = () => {
  const {logOut} = useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="absolute top-full  md:right-0 bg-white p-4 w-56">
      <ul className="text-gray-700  pt-1">
        <li className="">
          <Link
          to='/myaccount'
            className="flex items-center rounded hover:bg-gray-400 py-2 px-4  whitespace-no-wrap"
            
          >
            <FaUserAlt></FaUserAlt>
           <span className="mx-1">Manage Account</span> 
          </Link>
        </li>
        <li className="">
          <Link
           to="/myaccount/trips"
            className="flex items-center hover:bg-gray-400 py-2 px-4  whitespace-no-wrap"

          >
            <FaShuttleVan></FaShuttleVan>
            <span className="mx-1">Trips</span>
          </Link>
        </li>
        <li className="">
          <Link
           to="/myaccount/notification"
            className="flex items-center hover:bg-gray-400 py-2 px-4  whitespace-no-wrap"

          >
            <FaBell></FaBell>
            <span className="mx-1">Notifications</span>
          </Link>
        </li>
        <li className="">
          <Link
           to="/myaccount/wishlists"
            className="flex items-center hover:bg-gray-400 py-2 px-4  whitespace-no-wrap"

          >
            <FaHeart></FaHeart>
            <span className="mx-1">Wishlists</span>
          </Link>
        </li>
        <li className="">
          <button
            onClick={handleSignOut}
            className=" hover:bg-gray-400 py-2 px-8  whitespace-no-wrap"

          >
            Log out
          </button>
        </li>
      
      </ul>
    </div>
  );
};

export default Submenu;
