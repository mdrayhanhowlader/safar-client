import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

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
        "https://safar-server-nasar06.vercel.app/destination/get-all-destination-categories"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) return "destinations api is loading";
  if (error)
    return "An error has occurred on destinations route: " + error.message;

  return (
    <section className="container mx-auto mb-8">
      {/* section title  */}
      <div className="py-8">
        <h2 className="text-gray-700 text-4xl font-bold text-center">
          Special Destinations
        </h2>
        <p className="text-xl font-semi-bold text-center mt-3">
          These popular destinations have a lot to offer
        </p>
      </div>
      <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-4 px-4">
        {/* columns 1 */}
        {destinations.map((destination) => (
          <Link
            key={destination._id}
            to={`/destinationPage/${destination.city}`}
          >
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-md">
              <div className="w-full h-[250px]">
                <img
                  className="h-full w-full object-cover transition-transform duration-500"
                  src={destination.img}
                  alt="Destination-img"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/30 group-hover:via-black/20 group-hover:to-black/30"></div>
              <div className="absolute inset-0 flex translate-y-0 flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0 visible group-hover:visible">
                <h1 className="font-dmserif text-3xl font-semibold uppercase text-white mb-8">
                  {destination.city}
                </h1>
              </div>
            </div>
            {/* <div
              style={{
                backgroundImage: `url(${destination.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionY: "center",
              }}
              className="shadow-md hover:shadow-lg border-slate-50 lg:h-[200px] md:h-[200px] rounded-md cursor-pointer contrast-100 hover:contrast-200 relative "
            >
              <div>
                <img className="h-60" src={destination.img} alt="" />
              </div>
              <div className=" text-slate-100 absolute flex flex-col justify-center items-center text-center bg-blend-lighten hover:bg-blend-darken h-full w-full">
                <h2 className="text-3xl font-bold ml-2 mt-4 uppercase hover:bg-sky-400 hover:text-slate-200 p-2 rounded-md">
                  {destination.city}
                </h2>
                <p className="ml-2 mt-2 pb-2 capitalize hover:hidden">
                  {destination.spots} Properties Available
                </p>
              </div>
            </div> */}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Destination;
