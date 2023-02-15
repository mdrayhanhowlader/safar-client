import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const CheckoutPage = () => {
  return (
    <div>
      <div className="flex justify-center mt-6 bg-black">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <div className="bg-white rounded shadow">
            {/* <!-- Order Summary  --> */}
            <div>
              <h3 className="text-xl mt-4 font-bold p-8">Order Summary</h3>
              {/* <!--     BOX     --> */}
              <div className="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
                <div className="w-2/3">
                  <h3 className="text-lg font-medium">
                    APPAYAN GUEST HOUSE BARIDHARA
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Sold by <b>Aashir Khan</b>
                  </p>
                  <h4 className="text-red-700 text-xs font-bold mt-1">
                    Only 2 left in stock
                  </h4>
                </div>
                <div>
                  <h4 className="text-3xl font-medium">
                    <sup className="text-lg text-blue-500">$</sup> 89
                  </h4>
                  <h5 className="text-sm font-bold text-blue-500">60% OFF</h5>
                </div>
                <div className="w-full flex justify-between mt-4">
                  <button className="text-red-700 hover:bg-blue-100 px-2">
                    DELETE
                  </button>
                  <label
                    className="block uppercase tracking-wide text-gray-700"
                    for="grid-first-name"
                  >
                    QTY
                    <select
                      className="ml-3 h-8 border-none text-sm font-semibold bg-blue-500 text-white p-2 rounded"
                      id="grid-state"
                    >
                      <option className="bg-white text-black border-none">
                        1
                      </option>
                      <option className="bg-white text-black border-none">
                        2
                      </option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
                <div className="w-2/3">
                  <h3 className="text-lg font-medium">
                    APPAYAN GUEST HOUSE BARIDHARA
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Sold by <b>Taha Dildar</b>
                  </p>
                  <h4 className="text-red-700 text-xs font-bold mt-1">
                    Only 1 left in stock
                  </h4>
                </div>
                <div>
                  <h4 className="text-3xl font-medium">
                    <sup className="text-lg text-blue-500">$</sup> 20
                  </h4>
                  <h5 className="text-sm font-bold text-blue-500">40% OFF</h5>
                </div>
                <div className="w-full flex justify-between mt-4">
                  <button className="text-red-700 hover:bg-red-100 px-2">
                    DELETE
                  </button>
                  <label
                    className="block uppercase tracking-wide text-gray-700"
                    for="grid-first-name"
                  >
                    QTY
                    <select
                      className="ml-3 text-sm bg-blue-500 border border-purple-200 text-white p-2 rounded leading-tight"
                      id="grid-state"
                    >
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <button className="px-4 py-4 bg-blue-500 text-white w-full mt-3 rounded shadow font-bold hover:bg-blue-600">
              PROCEED TO CHECKOUT SCREEN
            </button>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="bg-white rounded shadow p-2 w-full">
              <div className="w-full bg-blue-50 px-8">
                <h3 className="text-2xl mt-4 font-bold">Price Breakdown</h3>
                <div className="flex justify-between mt-3">
                  <div className="text-xl text-black font-bold">Amount</div>
                  <div className="text-xl text-right font-bold ">$102</div>
                </div>
                <div className="flex justify-between mt-3">
                  <div className="text-xl text-black font-bold">VAT (15%)</div>
                  <div className="text-xl text-right font-bold">$12</div>
                </div>
                <div className="bg-orange-300 h-1 w-full mt-3"></div>
                <div className="flex justify-between mt-3">
                  <div className="text-xl text-black font-bold">
                    Total Amount
                  </div>
                  <div className="text-2xl text-black font-bold">$114</div>
                </div>
                <div className="my-6">
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                </div>
              </div>
            </div>
            {/* <div className="bg-white rounded shadow px-10 py-6 w-full mt-4 flex flex-wrap justify-center lg:w-2/4 lg:ml-3">
              <div className="pr-8">
                <h3 className="text-2xl mt-4 font-bold text-blue-500">
                  Thank You, Alex
                </h3>
                <h4 className="text-sm text-gray-600 font-bold">ORDER #5624</h4>
              </div>
              <img
                src="https://image.flaticon.com/icons/svg/1611/1611768.svg"
                alt=""
                className="w-24"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
