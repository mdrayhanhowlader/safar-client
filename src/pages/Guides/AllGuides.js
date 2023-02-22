import { useQuery } from "@tanstack/react-query";
import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlinePhone } from "react-icons/hi";
import guide from "../../assets/safar logo/2.png";
import { FaRegAddressCard } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

const AllGuides = () => {
  const { data: guides = [] } = useQuery({
    queryKey: ["all-guides"],
    queryFn: async () => {
      const res = await fetch(
        "https://safar-server-nasar06.vercel.app/users/all-guides"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div style={{ backgroundImage: `url(${guide})` }} className="bg-cover">
      <div>
        <div>
          <Navbar />
        </div>
        {/* <div className='lg:w-full lg:mx-auto mx-6 my-4 shadow-2xl p-6 rounded-3xl'>
                
            </div> */}
        <div className="flex items-center mt-24 ml-10 md:ml-16 pb-16 md:pb-24">
          <h1 className="text-5xl text-indigo-900 font-semibold">
            Find Your Guide
            <span className="text-orange-600"> To Ease</span>
            <br />
            Your Journey.
          </h1>
        </div>
      </div>
      <div>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 p-6">
          {guides?.map((guide) => (
            <div className="w-full border shadow-lg shadow-blue-300 border-gray-400 bg-slate-50 rounded-lg p-4 sm:flex sm:space-x-6 ">
              <div className="flex-shrink-0 w-full mb-6 h-56 sm:h-44 sm:w-44 sm:mb-0">
                <img
                  src={guide?.photo}
                  alt=""
                  className="object-cover object-center w-full h-full rounded-md dark:bg-gray-500"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold">{guide?.name}</h2>
                  <span className="text-sm dark:text-gray-400">Tour Guide</span>
                </div>
                <div className="">
                  <span className="flex items-center space-x-2">
                    <FaRegAddressCard />
                    <span className="dark:text-gray-400">{guide?.address}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <TfiEmail className="text-blue-500" />
                    <span className="dark:text-gray-400">{guide?.email}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <HiOutlinePhone className="text-green-500" />
                    <span className="dark:text-gray-400">{guide?.phone}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <SlLocationPin className="text-orange-500" />
                    <span className="dark:text-gray-400">
                      {guide?.location}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllGuides;
