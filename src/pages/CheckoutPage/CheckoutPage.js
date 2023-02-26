import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import {
  Navigate,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";
import CheckoutCard from "./CheckoutCard";

const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_STRIPE_PK);

const CheckoutPage = () => {
  const hotelData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { hotel_name } = hotelData;

  const location = useLocation();

  const { data: orders } = useQuery({
    queryKey: ["get-order"],
    queryFn: async () => {
      const res = await fetch(
        `https://safar-server-nasar06.vercel.app/orders/get-order-byEmail?email=${user?.email}`
      );
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  if (user?.displayName === null) {
    console.log(user);
    return (
      <Navigate to="/myaccount/profile" state={{ from: location }} replace />
    );
  }

  const orderPrice = orders?.map((or) => or?.total_price);

  const sum = orderPrice?.reduce((total, number) => {
    // console.log(total);
    // console.log(number);
    return total + number;
  }, 0);

  const vat = parseFloat((sum * 5) / 100);
  const subTotal = sum + vat + 1000;

  console.log(typeof subTotal);
  return (
    <div>
      <div className="md:w-11/12 mx-auto mt-6 ">
        {/* <h2 className="text-center text-3xl font-medium py-6"></h2> */}
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-12 pt-6">
          <div className="flex justify-between flex-wrap col-span-4">
            <div className=" rounded  w-full">
              <div className="w-full bg-white border ">
                <h3 className="text-md text-center font-medium bg-pink-500 text-slate-50 rounded-t-lg mb-12 py-1 rounded-b-md">
                  Room Price
                </h3>
                <div className="w-11/12 mx-auto">
                  <div className="flex justify-between mt-3">
                    <div className="text-lg text-slate-700 font-medium">
                      Total
                    </div>
                    <div className="text-lg text-right font-medium ">
                      ${sum}
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="text-lg text-slate-700 font-medium">
                      VAT (15%)
                    </div>
                    <div className="text-lg text-right font-medium">${vat}</div>
                  </div>
                  <div className="bg-blue-500 h-1 w-full mt-3"></div>
                  <div className="flex justify-between my-3">
                    <div className="text-lg text-slate-700 font-medium">
                      Subtotal
                    </div>
                    <div className="text-lg text-slate-700 font-medium">
                      ${subTotal}
                    </div>
                  </div>
                </div>
                <div className=" mt-6">
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
          <div className="bg-white rounded  col-span-8">
            {/* <!-- Order Summary  --> */}
            <div>
              <h3 className="text-xl mt-4 font-bold">Choose Your Room</h3>
              {/* <!--     BOX     --> */}
              <CheckoutCard orders={orders}></CheckoutCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;