import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useTitle from "../../../../hooks/useTitle";
import profileImage from "../../../../assets/profile.png";

const Organizer = () => {
  useTitle("All Organizers");
  const [submenu, setSubmenu] = useState(0);
  //handel edit product
  const handleSubMenu = (id) => {
    if (id === submenu) {
      setSubmenu(!submenu);
    }
  };
  useTitle("All Organizers");
  const [submenu, setSubmenu] = useState(false);

  const { data: organizers, isLoading } = useQuery({
    queryKey: ["all-organizers"],
    queryFn: async () => {
      const res = await fetch(
        "https://safar-server-nasar06.vercel.app/users/all-organizers"
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <section className="p-4">
<<<<<<< HEAD
      <h2 className="text-2xl font-bold">
        All Organizers {organizers?.length}
      </h2>
      {/* table all organizer  */}
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
                  Hotel Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-semibold text-gray-900"
                >
                  Phone
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
                organizers?.map((organizer) => (
                  <tr key={organizer._id} className="hover:bg-gray-50">
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      {organizer.img ? (
                        <div className="relative h-16 w-16">
                          <img
                            className="h-full w-full rounded-md object-cover object-center"
                            src={organizer?.img}
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
                        {organizer?.full_name
                          ? organizer?.full_name
                          : "Unknown"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                        {organizer?.email}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                        {organizer?.hotel_name
                          ? organizer?.hotel_name
                          : "Unknown"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                        {organizer?.contact ? organizer?.contact : "Unknown"}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="relative">
                        <p
                          onClick={() =>
                            setSubmenu(organizer?._id) &
                            handleSubMenu(organizer?._id)
                          }
                          className="font-xxl font-bold cursor-pointer "
                        >
                          More
                        </p>

                        {submenu === organizer?._id && (
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
=======
      <h2 className="text-2xl">All Organizers </h2>
      {/* table all users  */}
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
                Photo & Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Email
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                City
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Country
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Zip/Postal
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
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <th className="flex items-center gap-3 px-4 py-4 font-normal text-gray-900">
                <div className="relative h-16 w-16">
                  <img
                    className="w-full rounded-md object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="text-sm">
                  <div className="text-gray-400">Organizer name</div>
                </div>
              </th>
              <td className="px-4 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  mdnuruli291@gmail.com
                </span>
              </td>
              <td className="px-4 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  Chandpur
                </span>
              </td>
              <td className="px-4 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  Bangladesh
                </span>
              </td>
              <td className="px-4 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  1210
                </span>
              </td>
              <td className="px-4 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  10-02-2023
                </span>
              </td>
              <td
                className="px-4 py-8 absolute"
                onClick={() => setSubmenu(!submenu)}
              >
                <span className="inline-flex items-center gap-1 px-2 py-1 text-sm font-semibold cursor-pointer">
                  Edit
                </span>
                <div
                  className={`${
                    submenu ? "visible" : "hidden"
                  } z-10 relative bg-white shadow-md `}
                >
                  <ul>
                    <li className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded-md">
                      <a href="/">Active</a>
                    </li>
                    <li className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded-md">
                      <a href="/">Deactivate</a>
                    </li>
                    <li className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded-md">
                      <a href="/">Remove</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
>>>>>>> 0aa261bf35983ca16aa297c64bcdf5802f191caa
      </div>
    </section>
  );
};

export default Organizer;
