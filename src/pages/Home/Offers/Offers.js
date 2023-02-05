import React from "react";
import { Link } from "react-router-dom";
// import SearchBannerImage from "../../../assets/search-banner.jpg";

const Offers = () => {
  return (
    <section className="container mx-auto my-10 p-10">
      {/* section title  */}
      <div className="py-8">
        <h2 className="text-4xl font-bold text-center">OFFERS</h2>
        <p className="text-xl font-semi-bold text-center mt-3">
          Promotions, deals, and special offers for you
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 text-slate-50">
        {/* columns 1 */}

        <Link
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/9711952/pexels-photo-9711952.jpeg?auto=compress&cs=tinysrgb&w=600")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "center",
          }}
          href="#"
          className="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
        >
          <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
            {" "}
            4.5
          </span>

          <div className="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
            <h3 className="text-2xl font-bold">Lalbag kella</h3>
            <p className="text-sm">Dhaka</p>
          </div>
        </Link>
        <Link
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/122107/pexels-photo-122107.jpeg?auto=compress&cs=tinysrgb&w=600")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "center",
          }}
          href="#"
          className="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
        >
          <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
            4.5
          </span>

          <div className="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
            <h3 className="text-2xl font-bold">Cox's Bazar</h3>

            <p className="text-sm">Chattogram</p>
          </div>
        </Link>
        <Link
          style={{
            backgroundImage: `url("https://3.bp.blogspot.com/-Qwtv0KFoYvo/UcVxR4RajKI/AAAAAAAAAB0/OYnmZWe-td8/s1600/Kuakata+001.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "center",
          }}
          href="#"
          className="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
        >
          <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
            {" "}
            4.5
          </span>

          <div className="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
            <h3 className="text-2xl font-bold">Kuakata</h3>

            <p className="text-sm">Barishal</p>
          </div>
        </Link>
        <Link
          style={{
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/201_Dome_Mosque%2C_Tangail.jpg/1024px-201_Dome_Mosque%2C_Tangail.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "center",
          }}
          href="#"
          className="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
        >
          <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
            4.5
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1.5 h-4 w-4 text-yellow-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg> */}
          </span>

          <div className="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
            <h3 className="text-2xl font-bold">Tangail</h3>

            <p className="text-sm">Dhaka</p>
          </div>
        </Link>

        {/* <div
          className="bg-slate-300 rounded-md cursor-pointer p-4"
          style={{
            // backgroundImage: `url(${SearchBannerImage})`,
            backgroundImage: `url("https://images.pexels.com/photos/2397414/pexels-photo-2397414.jpeg?auto=compress&cs=tinysrgb&w=600")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "center",
            opacity: "0.9",
          }}
        >
          <div>
            <h2 className="font-bold ml-2 mt-4">New year, new adventures</h2>
            <p className="ml-2 mt-2 pb-2">
              Save 15% or more when you book and stay before March 31, 2023
            </p>
            <button className="bg-teal-400 text-white py-2 px-4 rounded-lg">
              Find Early 2023 deals
            </button>
          </div>
        </div> */}
        {/* columns 2 */}
        {/* <div
          className="bg-slate-300 rounded-md cursor-pointer p-4 opacity-70 hover:opacity-95"
          style={{
            // backgroundImage: `url(${SearchBannerImage})`,
            backgroundImage: `url("https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=600")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "center",
          }}
        >
          <div>
            <h2 className="font-bold ml-2 mt-4">New year, new adventures</h2>
            <p className="ml-2 mt-2 pb-2">
              Save 15% or more when you book and stay before March 31, 2023
            </p>
            <button className="bg-teal-400 text-white py-2 px-4 rounded-lg">
              Find Early 2023 deals
            </button>
          </div>
        </div> */}

        {/* columns 3 */}
        {/* <div
          className="bg-slate-300 rounded-md cursor-pointer p-4"
          style={{
            // backgroundImage: `url(${SearchBannerImage})`,
            backgroundImage: `url("https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=600")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "center",
            opacity: "0.9",
          }}
        >
          <div>
            <h2 className="font-bold ml-2 mt-4">New year, new adventures</h2>
            <p className="ml-2 mt-2 pb-2">
              Save 15% or more when you book and stay before March 31, 2023
            </p>
            <button className="bg-teal-400 text-white py-2 px-4 rounded-lg">
              Find Early 2023 deals
            </button>
          </div>
        </div> */}
        {/* columns 4 */}
        {/* <div
          className="bg-slate-300 rounded-md cursor-pointer p-4"
          style={{
            // backgroundImage: `url(${SearchBannerImage})`,
            backgroundImage: `url("https://images.pexels.com/photos/2674064/pexels-photo-2674064.jpeg?auto=compress&cs=tinysrgb&w=600")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "center",
            opacity: "0.9",
          }}
        >
          <div>
            <h2 className="font-bold ml-2 mt-4">New year, new adventures</h2>
            <p className="ml-2 mt-2 pb-2">
              Save 15% or more when you book and stay before March 31, 2023
            </p>
            <button className="bg-teal-400 text-white py-2 px-4 rounded-lg">
              Find Early 2023 deals
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Offers;
