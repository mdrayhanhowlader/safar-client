import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const ManageHotels = () => {
  const [submenu, setSubmenu] = useState(0);
    //handel edit product
    const handleSubMenu = (id) => {
        if (id === submenu) {
          setSubmenu(!submenu);
        }
      };

  const {
    data: hotels,
    isLoading,
  } = useQuery({
    queryKey: ["organizers"],
    queryFn: async () => {
      const res = await fetch(
        "https://safar-server-nasar06.vercel.app/destination/get-all-destinations"
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(hotels);

  return (
    <section className="m-4">
      <h2 className="text-2xl font-bold">All Hotels </h2>
      {/* table all users  */}
      <div>
        <div className="rounded-md border border-gray-50 mr-2 mt-5">
          <table className="w-11/12 mx-auto border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 font-semibold text-gray-900"
                >
                  Hotel
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-semibold text-gray-900"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-semibold text-gray-900"
                >
                  Hotel Id
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-semibold text-gray-900"
                >
                  Country
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-semibold text-gray-900"
                >
                  City
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-semibold text-gray-900"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {isLoading ? (
                <tr>
                  <td>
                    <span>Loading...</span>
                  </td>
                </tr>
              ) : (
                hotels?.map((hotel) => (
                  <tr key={hotel._id} className="hover:bg-gray-50">
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="relative h-16 w-16">
                        <img
                          className="h-full w-full rounded-md object-cover object-center"
                          src={hotel.images[0]}
                          alt=""
                        />
                        <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                        {hotel.hotel_name}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                        {hotel.hotel_id}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                       {hotel.location[0].country}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                      {hotel.location[0].city}
                      </span>
                    </td>


                    <td className="px-6 py-4">
                      <div className="relative">
                        <p
                         onClick={() =>
                            setSubmenu(hotel?._id) &
                            handleSubMenu(hotel?._id)
                          }
                          className="font-xxl font-bold cursor-pointer "
                        >
                          More
                        </p>

                        {
                            submenu === hotel?._id &&
                            <div
                            className="z-10 absolute right-0 bg-white  shadow-md"
                          >
                            <ul>
                              <li className="py-2 px-4 text-center hover:bg-blue-500 hover:text-white rounded-md cursor-pointer">
                                Deactive
                              </li>
                              <li className="py-2 px-4 text-center text-red-700 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer">
                                Delete
                              </li>
                            </ul>
                          </div>
                        }


                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageHotels;
