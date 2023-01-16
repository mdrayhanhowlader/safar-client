
import React from "react";

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

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* columns 1 */}
        <div className="bg-slate-300 rounded-md cursor-pointer p-4">
          <div>
            <h2 className="font-bold ml-2 mt-4">New year, new adventures</h2>
            <p className="ml-2 mt-2 pb-2">
              Save 15% or more when you book and stay before March 31, 2023
            </p>
            <button className="bg-blue-400 text-white py-2 px-4 rounded-xl">
              Find Early 2023 deals
            </button>
          </div>
        </div>
        {/* columns 2 */}
        <div className="bg-slate-300 rounded-md cursor-pointer p-4">
          <div>
            <h2 className="font-bold ml-2 mt-4">New year, new adventures</h2>
            <p className="ml-2 mt-2 pb-2">
              Save 15% or more when you book and stay before March 31, 2023
            </p>
            <button className="bg-blue-400 text-white py-2 px-4 rounded-xl">
              Find Early 2023 deals
            </button>
          </div>
        </div>

        {/* columns 3 */}
        <div className="bg-slate-300 rounded-md cursor-pointer p-4">
          <div>
            <h2 className="font-bold ml-2 mt-4">New year, new adventures</h2>
            <p className="ml-2 mt-2 pb-2">
              Save 15% or more when you book and stay before March 31, 2023
            </p>
            <button className="bg-blue-400 text-white py-2 px-4 rounded-xl">
              Find Early 2023 deals
            </button>
          </div>
        </div>
        {/* columns 4 */}
        <div className="bg-slate-300 rounded-md cursor-pointer p-4">
          <div>
            <h2 className="font-bold ml-2 mt-4">New year, new adventures</h2>
            <p className="ml-2 mt-2 pb-2">
              Save 15% or more when you book and stay before March 31, 2023
            </p>
            <button className="bg-blue-400 text-white py-2 px-4 rounded-xl">
              Find Early 2023 deals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
