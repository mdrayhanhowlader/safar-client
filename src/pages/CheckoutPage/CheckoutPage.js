import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";
import CheckoutCard from "./CheckoutCard";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const CheckoutPage = () => {
  const hotelData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { hotel_name } = hotelData;

  const { data: orders } = useQuery({
    queryKey: ["get-order"],
    queryFn: async () => {
      const res = await fetch(
        `https://safar-server-nasar06.vercel.app/orders/get-order-byEmail?email=${user?.email}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const orderPrice = orders?.map((or) => or?.total_price);

  const sum = orderPrice?.reduce((total, number) => {
    console.log(total);
    console.log(number);
    return total + number;
  }, 0);

  const vat = parseFloat((sum * 15) / 100);
  const subTotal = sum + vat;
  return (
    <div>
      <div className="w-full flex justify-center mt-6 ">
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-12">
          <div className="bg-white rounded  col-span-7">
            {/* <!-- Order Summary  --> */}
            <div>
              <h3 className="text-xl text-center mt-4 font-bold">
                Order Summary
              </h3>
              {/* <!--     BOX     --> */}
              <CheckoutCard orders={orders}></CheckoutCard>
              {/* <div className="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
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
                  <h4 className="text-xl font-medium">
                    <sup className="text-blue-500">$</sup> 20
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
              </div> */}
            </div>
            <div className="w-1/2 mx-auto">
              <button className="py-2 px-2 mx-4 bg-blue-500 text-white mt-3 rounded shadow font-bold hover:bg-blue-600">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
          <div className="flex justify-between flex-wrap col-span-5">
            <div className="bg-white rounded  w-full">
              <div className="w-full bg-white pt-32 pb-8 px-2 md:px-8">
                <h3 className="text-2xl mt-4 font-semibold">Price Breakdown</h3>
                <div className="flex justify-between mt-3">
                  <div className="text-lg text-black font-medium">Total</div>
                  <div className="text-lg text-right font-medium ">${sum}</div>
                </div>
                <div className="flex justify-between mt-3">
                  <div className="text-lg text-black font-medium">
                    VAT (15%)
                  </div>
                  <div className="text-lg text-right font-medium">${vat}</div>
                </div>
                <div className="bg-orange-300 h-1 w-full mt-3"></div>
                <div className="flex justify-between mt-3">
                  <div className="text-lg text-black font-medium">Subtotal</div>
                  <div className="text-lg text-black font-medium">
                    ${subTotal}
                  </div>
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
