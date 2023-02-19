import React from "react";
import useTitle from "../../hooks/useTitle";
import Navbar from "../Shared/Navbar/Navbar";

const Checkout = () => {
  useTitle('Checkout')
  return (
   <div>
    <Navbar/>
     <section>
      <h1 className="sr-only">Checkout</h1>

      <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
        <div className="py-12 bg-white md:py-24">
          <div className="max-w-lg px-4 mx-auto lg:px-8">
            <form className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-xs font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-xs font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-xs font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Phone"
                  className="block text-xs font-medium text-gray-700"
                >
                  Phone
                </label>

                <input
                  type="tel"
                  id="Phone"
                  className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                />
              </div>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Card Details
                </legend>

                <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                  <div>
                    <label htmlFor="CardNumber" className="sr-only">
                      {" "}
                      Card Number{" "}
                    </label>

                    <input
                      type="text"
                      id="CardNumber"
                      placeholder="Card Number"
                      className="relative w-full mt-1 border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                    />
                  </div>

                  <div className="flex -space-x-px">
                    <div className="flex-1">
                      <label htmlFor="CardExpiry" className="sr-only">
                        {" "}
                        Card Expiry{" "}
                      </label>

                      <input
                        type="text"
                        id="CardExpiry"
                        placeholder="Expiry Date"
                        className="relative w-full border-gray-200 rounded-bl-md focus:z-10 sm:text-sm"
                      />
                    </div>

                    <div className="flex-1">
                      <label htmlFor="CardCVC" className="sr-only">
                        {" "}
                        Card CVC{" "}
                      </label>

                      <input
                        type="text"
                        id="CardCVC"
                        placeholder="CVC"
                        className="relative w-full border-gray-200 rounded-br-md focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Billing Address
                </legend>

                <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                  <div>
                    <label htmlFor="Country" className="sr-only">
                      Country
                    </label>

                    <select
                      id="Country"
                      className="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                    >
                      <option>England</option>
                      <option>Wales</option>
                      <option>Scotland</option>
                      <option>France</option>
                      <option>Belgium</option>
                      <option>Japan</option>
                    </select>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="PostalCode">
                      {" "}
                      ZIP/Post Code{" "}
                    </label>

                    <input
                      type="text"
                      id="PostalCode"
                      placeholder="ZIP/Post Code"
                      className="relative w-full border-gray-200 rounded-b-md focus:z-10 sm:text-sm"
                    />
                  </div>
                </div>
              </fieldset>

              <div className="col-span-6">
                <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default Checkout;
