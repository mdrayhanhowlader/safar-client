import React from "react";
import useTitle from "../../../hooks/useTitle";

const Trips = () => {
  // const {} = useQuery;
  useTitle("Trips");
  return (
    <section className="container mx-auto mt-12 px-8">
      <h2 className="text-2xl font-bold">Trips</h2>
      <hr className="my-8" />
      <div>
        <h2 className="text-xl font-bold">No trips booked...yet!</h2>
        <p className="py-3">
          Time to dust off your bags and start planning your next adventure
        </p>
        <button className="py-3 px-8 my-3 hover:bg-gray-100 border-2  font-bold rounded-md">
          Start Searching
        </button>

        <h2 className="text-2xl mb-4 font-bold">My Trips</h2>
        <hr className="py-2" />
        <div className="grid md:grid-cols-5 lg:grid-cols-5 gap-2 bg-blue-50 p-2 rounded-md">
          <div className="md:w-40 md:h-28 flex items-center">
            <img
              className="rounded-md w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhGQd1lnDokX8rl_VXEgALX9nBDre-dQVrQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <h2 className="text-xl font-semibold">order id here</h2>
          </div>
          <div className="flex items-center">
            <h2 className="text-xl font-semibold">hotel name will here</h2>
          </div>
          <div className="flex items-center">
            <h2 className="text-xl font-semibold">$245</h2>
          </div>
          <div className="flex items-center">
            <h2 className="text-xl font-semibold">Order status</h2>
          </div>
        </div>

        <hr className="mt-12" />
      </div>
      <p className="mt-8">
        Can’t find your reservation here?
        <a className="hover:text-blue-500" href="/">
          Visit the Help Center
        </a>
      </p>
    </section>
  );
};

export default Trips;
