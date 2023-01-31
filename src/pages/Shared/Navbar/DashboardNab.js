import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const DashboardNab = () => {
    return (
        <div className="fixed w-full flex items-center justify-between h-14 text-white z-10 bg-blue-800">
        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14">
          <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" alt='' />
          <span className="hidden md:block">Safar</span>
        </div>
        <div className="flex justify-between items-center h-14 header-right">
          <div className="rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
            <input type="search" name="" id="" placeholder="Search" className="w-full pl-3 text-sm text-white outline-none focus:outline-none bg-transparent" />
          </div>
          <ul className="flex items-center">
            
            <li>
              <div className="block w-px h-6 mx-3 bg-gray-400"></div>
            </li>
            <li>
              <a href="/" className="flex items-center mr-4 hover:text-blue-100">
                <span className="inline-flex mr-1">
                <FaSignOutAlt className='w-5 h-5'></FaSignOutAlt>
                </span>

                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default DashboardNab;