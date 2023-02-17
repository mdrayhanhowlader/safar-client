import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import profileImage from "../../../../assets/profile.png";


const AllUsers = () => {

  const [submenu, setSubmenu] = useState(0);
  //handel edit product
  const handleSubMenu = (id) => {
    if (id === submenu) {
      setSubmenu(!submenu);
    }
  };


  const { data: users, isLoading } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await fetch(
        "https://safar-server-nasar06.vercel.app/users/all-users"
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(users)

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold">All Users </h2>
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
                  Photo
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
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-semibold text-gray-900"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-semibold text-gray-900"
                >
                  User Id
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
                users?.map((user) => (
                  <tr key={users._id} className="hover:bg-gray-50">
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      {user.profile_img ? (
                        <div className="relative h-16 w-16">
                          <img
                            className="h-full w-full rounded-md object-cover object-center"
                            src={user?.profile_img}
                            alt=""
                          />
                          <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                        </div>
                      ) : (
                        <div className="relative h-16 w-16">
                          <img
                            className="h-full w-full rounded-md object-cover object-center"
                            src={profileImage}
                            alt=""
                          />
                        </div>
                      )}
                    </th>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                        {user?.name
                          ? user?.name
                          : "Unknown"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                        {user?.email}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                        {user?.location
                          ? user?.location.slice(0, 15)
                          : "Unknown"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                        {user?._id ? user?._id : "Unknown"}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="relative">
                        <p
                          onClick={() =>
                            setSubmenu(user?._id) &
                            handleSubMenu(user?._id)
                          }
                          className="font-xxl font-bold cursor-pointer "
                        >
                          More
                        </p>

                        {submenu === user?._id && (
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
    </section>
  );
};

export default AllUsers;
