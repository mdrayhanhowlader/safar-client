import React, { useContext, useState } from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { CgEditUnmask } from "react-icons/cg";
import img from "../../../assets/safar logo/1.png";
import logo from "../../../assets/3.png";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import Submenu from "../../Shared/Navbar/Submenu";
import { Link } from "react-router-dom";

const Banner = () => {
  const [submenu, setSubmenu] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <div style={{ backgroundImage: `url(${img})` }} className="bg-cover">
      <div className="m-1 p-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <img className="w-16" src={logo} alt="" />

            <h1 className="text-2xl mt-5 font-serif">SAFAR</h1>
          </div>
          <div className="flex items-center mt-4 mx-4 lg:mt-0">
            {user?.uid ? (
              <div className="relative">
                {/* sub menu  */}
                <div className={`${submenu ? "visible" : "hidden"}`}>
                  <Submenu></Submenu>
                </div>
                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  {
                    <div
                      onClick={() => setSubmenu(!submenu)}
                      className="w-8 h-8 bg-blue-400 hover:bg-blue-500 overflow-hidden rounded-full"
                    >
                      <FaUser className="text-2xl text-white text-center mx-auto pt-2" />
                    </div>
                  }
                </button>
              </div>
            ) : (
              "login"
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full">
            <div className="flex justify-around ">
              <div className="md:mt-0 mt-16">
                <h2 className="text-3xl md:text-5xl font-semibold">
                  Where Ever You Go,
                </h2>
                <h2 className="text-3xl md:text-5xl font-semibold py-2">
                  Go With All
                </h2>
                <h2 className="text-3xl md:text-5xl font-semibold">
                  Your Heart.
                </h2>
              </div>
            </div>
            <div className=" w-11/12 mx-auto md:ml-20 md:py-8 pb-20 pt-6 md:flex border justify-evenly rounded-lg shadow-lg bg-white mt-12 ">
              <div className="flex md:flex-row flex-col items-center justify-center md:gap-8 gap-24">
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div>
                      <GiCommercialAirplane className="text-3xl text-blue-500" />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold">
                        International flights
                      </h1>
                      <p className="text-xs text-blue-500 ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="left-20 mt-4 absolute">
                    <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-xl px-5 py-1">
                      details
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div>
                      <CgEditUnmask className="text-3xl text-orange-600" />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold">
                        International flights
                      </h1>
                      <p className="text-xs text-blue-500 ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="left-20 mt-4 absolute">
                    <button className="bg-orange-400 hover:bg-orange-600 text-white rounded-xl px-5 py-1">
                      details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full hidden md:block">
            <div className="flex justify-center mb-6 ">
              <img
                className="object-cover w-14 h-14 p-1 rounded-full bg-gray-300 shadow-2xl "
                src="https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk="
                alt=""
              />
            </div>
            <div className="flex items-center gap-6 justify-end">
              <div className="mb-20">
                <img
                  className="object-cover w-14 h-14 p-1.5 rounded-full shadow-3xl bg-gray-300"
                  src="https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk="
                  alt=""
                />
              </div>
              <div className="rounded-full shadow-2xl shadow-sky-300 p-8">
                <img
                  className="object-cover w-96 h-96 rounded-full border-y-8 border-blue-500 shadow-2xl shadow-sky-300  bg-white"
                  src="https://www.cassidytravel.ie/images/family_holidays_to_lanzarote/cassidytravel_travelfinderworld_hero/?m=nbf"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="object-cover w-20 h-20 p-1 rounded-full shadow-3xl bg-gray-300 mx-2"
                  src="https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk="
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-center mt-6 ml-20">
              <img
                className="object-cover w-14 h-14 p-1 rounded-full shadow-3xl bg-gray-300 mx-2"
                src="https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk="
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
