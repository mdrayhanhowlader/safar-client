import React, { useContext } from "react";
// import SearchBannerImage from "../../../assets/search-banner.jpg";

const Offers = () => {
  return (
    <section className="container mx-auto p-10">
      {/* section title  */}
      <div className="py-8">
        <h2 className="text-4xl font-bold text-center">OFFERS</h2>
        <p className="text-xl font-semi-bold text-center mt-3">
          Promotions, deals, and special offers for you
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 text-slate-50">
        {/* columns 1 */}
        <div
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
        </div>
        {/* columns 2 */}
        <div
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
        </div>

        {/* columns 3 */}
        <div
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
        </div>
        {/* columns 4 */}
        <div
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
        </div>
      </div>
    </section>
  );
};

export default Offers;
