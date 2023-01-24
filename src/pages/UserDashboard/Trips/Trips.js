import React from "react";

const Trips = () => {
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
