import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";

const ManageSellerProduct = () => {
  const [submenu, setSubmenu] = useState(false);

  return (
    <section className="py-4">
      <h2 className="text-3xl">My Products</h2>
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
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              >Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-12 w-12">
                  <img
                    className="h-full w-full rounded-md object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                  product title will here
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  228390277
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  $500
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  10
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  10-02-2023
                </span>
              </td>

              <td className="px-6 py-4">
                {/* <div className="flex justify-end gap-4">
                  <a href="/">
                    <FaTrashAlt className="h-6 w-6"></FaTrashAlt>
                  </a>
                  <a href="/">
                    <HiPencilAlt className="h-6 w-6"></HiPencilAlt>
                  </a>
                </div>  */}

                 <div className="absolute">
                  <p onClick={() => setSubmenu(!submenu)} className="font-xxl font-bold cursor-pointer ">More</p>
                  <div className={`${submenu ? 'visible' : 'hidden'} z-10 relative bg-white shadow-md `}>
                  <ul>
                  <li className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded-md"><a href="/">Edit</a></li>
                  <li className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded-md"><a href="/">Active</a></li>
                  <li className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded-md"><a href="/">Deactivate</a></li>
                  <li className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded-md"><a href="/">Delete</a></li>
                  </ul>
                  </div>
 
                </div>

                
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-12 w-12">
                  <img
                    className="h-full w-full rounded-md object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                  product title will here
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  228390277
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  $500
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  10
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  10-02-2023
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <a href="/">
                    <FaTrashAlt className="h-6 w-6"></FaTrashAlt>
                  </a>
                  <a href="/">
                    <HiPencilAlt className="h-6 w-6"></HiPencilAlt>
                  </a>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-12 w-12">
                  <img
                    className="h-full w-full rounded-md object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                  product title will here
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  228390277
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  $500
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  10
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                  10-02-2023
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <a href="/">
                    <FaTrashAlt className="h-6 w-6"></FaTrashAlt>
                  </a>
                  <a href="/">
                    <HiPencilAlt className="h-6 w-6"></HiPencilAlt>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageSellerProduct;
