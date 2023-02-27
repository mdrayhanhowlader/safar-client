import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const ManageHotels = () => {
  const [submenu, setSubmenu] = useState(0);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const pages = Math.ceil(count / size);

  //handel edit product
  const handleSubMenu = (id) => {
    if (id === submenu) {
      setSubmenu(!submenu);
    }
  };

  const {
    data: hotels,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["get-all-destination", page, size],
    queryFn: async () => {
      const res = await fetch(
        `https://safar-server-nasar06.vercel.app/destination/get-all-destinations?page=${page}&size=${size}`
      );
      const data = await res.json();
      setCount(data?.count);
      const hotelData = data.result;
      return hotelData;
    },
  });

  // handle deactive hotel data
  const handleDeactiveHotel = useCallback((id) => {
    fetch(``, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "deactive" }),
    });
  }, []);

  // handle hotel data
  const handleDeleteHotel = async (id) => {
    await fetch(
      `https://safar-server-nasar06.vercel.app/rooms/delete-room/${id}`,
      {
        method: "DELETE",
      }
    ).catch((err) => console.log(err));
    refetch();
  };

  // console.log(hotels);
  return (
    <section className="m-4">
      <h2 className="text-2xl font-bold">All Hotels </h2>
      {/* table all hotels  */}
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
                    <span>
                      <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="orange"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                      />
                    </span>
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
                        {hotel?.hotel_name}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                        {hotel?.hotel_id}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                        {hotel.location[0]?.country}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                        {hotel.location[0]?.city}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="relative">
                        <p
                          onClick={() =>
                            setSubmenu(hotel?._id) & handleSubMenu(hotel?._id)
                          }
                          className="font-xxl font-bold cursor-pointer "
                        >
                          More
                        </p>

                        {submenu === hotel?._id && (
                          <div className="z-10 absolute right-0 bg-white  shadow-md">
                            <ul>
                              <li className="py-2 px-4 text-center hover:bg-blue-500 hover:text-white rounded-md cursor-pointer">
                                Deactive
                              </li>
                              <li className="py-2 px-4 text-center text-red-700 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer">
                                Delete
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        {/* <div>
          <p className="font-semibold my-2">
            Currently selected page: {page + 1} and size: {size}
          </p>
        </div> */}
        <div className="flex items-center justify-center mt-4">
          <div className="">
            {page > 0 && (
              <button
                onClick={() => setPage(page - 1)}
                className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-blue-100 rounded-md sm:flex  hover:bg-blue-600 hover:text-white"
              >
                Prev
              </button>
            )}
          </div>

          {[...Array(pages).keys()].map((number, index) => (
            <div className="inline-flex" key={index}>
              <button
                className={`${
                  page === number
                    ? "bg-blue-600 items-center px-4 py-2 mx-1 font-bold text-white  rounded-md"
                    : "items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-blue-100 rounded-md sm:flex  hover:bg-blue-600 hover:text-white"
                }`}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            </div>
          ))}

          {hotels?.length > 0 && (
            <div>
              <button
                onClick={() => setPage(page + 1)}
                className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-blue-100 rounded-md sm:flex  hover:bg-blue-600 hover:text-white"
              >
                Next
              </button>
            </div>
          )}

          {/* <select
            className="border border-black py-2 rounded-md"
            defaultValue={"10"}
            onChange={(event) => setSize(event.target.value)}
          >
            <option value="05">05</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select> */}
        </div>
      </div>
    </section>
  );
};

export default ManageHotels;
