import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

const ManageSellerProduct = () => {
  const [submenu, setSubmenu] = useState(false);
  const {user} = useContext(AuthContext)

  const handleSubMenu = () => {
    setSubmenu(!submenu);
  };

  const {
    data: organizerRooms,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["organizerRooms"],
    queryFn: async () => {
      const res = await fetch(
        "https://safar-server-nasar06.vercel.app/rooms/get-all-rooms/9062086"
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <section className="py-4">
      <h2 className="text-3xl">My Rooms</h2>
      {/* product table  */}
      <div className="rounded-lg border border-gray-200 mr-2 mt-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Product
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Title
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Product/SKU
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Price
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Stock
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Date
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
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
              organizerRooms.map((room) => (
                <tr key={room._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                  <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="relative h-12 w-12">
                      <img
                        className="h-full w-full rounded-md object-cover object-center"
                        src={room.images[0].url}
                        alt=""
                      />
                      <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-400">Product live link</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                      {room.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                      {room.room_no}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                      {room.price}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                      {room.sleep}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                      10-02-2023
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="absolute">
                  <p onClick={() => handleSubMenu(!true)} className="font-xxl font-bold cursor-pointer ">More</p>
                  <div className={`${submenu ? 'visible' : 'hidden'} z-10 relative bg-white shadow-md `}>
                  <ul>
                  <li className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded-md"><a href="/">Edit</a></li>
                  <li className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded-md"><a href="/">Active</a></li>
                  <li className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded-md"><a href="/">Deactivate</a></li>
                  <li className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded-md"><a href="/">Delete</a></li>
                  </ul>
                  </div>
 
                </div>  

                    {/* <div className="flex justify-end gap-4">
                      <a href="/">
                        <FaTrashAlt className="h-4 w-4"></FaTrashAlt>
                      </a>
                      <a href="/">
                        <HiPencilAlt className="h-4 w-4"></HiPencilAlt>
                      </a>
                    </div> */}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageSellerProduct;
