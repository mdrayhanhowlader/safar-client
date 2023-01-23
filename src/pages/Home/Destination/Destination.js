import { useQuery } from "@tanstack/react-query";
import React from "react";

const Destination = () => {
  // get all destinations data from api
  const {
    data: destinations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["destinations"],
    queryFn: async () => {
      const res = await fetch(
        "https://safar-server.vercel.app/destinationcategories"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) return "destinations api is loading";
  if (error)
    return "An error has occurred on destinations route: " + error.message;

  console.log(destinations);
  return (
    <section className="container mx-auto">
      {/* section title  */}
      <div className="py-8">
        <h2 className="text-4xl font-bold text-center">Explore destinations</h2>
        <p className="text-xl font-semi-bold text-center mt-3">
          These popular destinations have a lot to offer
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {/* columns 1 */}
        {destinations.map((destination) => (
          <div
            key={destination._id}
            className="bg-slate-200 lg:h-[332px] md:h-[332px] rounded-md  cursor-pointer"
          >
            <div>
              <img src={destination.img} alt="" />
            </div>
            <div className="pb-2">
              <h2 className="font-bold ml-2 mt-4">{destination.district}</h2>
              <p className="ml-2 mt-2 pb-2">
                {destination.spots} Properties Available
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destination;
