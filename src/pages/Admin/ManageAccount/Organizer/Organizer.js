import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useTitle from "../../../../hooks/useTitle";

const Organizer = () => {
  useTitle('All Organizers');
  const [submenu, setSubmenu] = useState(false);

  const {data: organizers, isLoading, refetch} = useQuery({
    queryKey: ['organizers'],
    queryFn: async () => {
      const res = await fetch("https://safar-server-nasar06.vercel.app/users/all-organizers");
      const data = await res.json();
      return data;
    }
  })

  // console.log(organizers)
  // organizers.map(organizer => console.log(organizer))

  return (
    <section className="p-4">
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
              <td className="px-4 py-8 absolute" onClick={() => setSubmenu(!submenu)}>
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
      </div>
    </section>
  );
};

export default Organizer;
