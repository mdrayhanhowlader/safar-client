import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useTitle from '../../../../hooks/useTitle';

const AllOrders = () => {
    useTitle('All Orders');
    const [submenu, setSubmenu] = useState(0);
    //handel edit product
    const handleSubMenu = (id) => {
        if (id === submenu) {
            setSubmenu(!submenu);
        }
    };

    const { data: allOrders, isLoading } = useQuery({
        queryKey: ["all-orders"],
        queryFn: async () => {
            const res = await fetch(
                "https://safar-server-nasar06.vercel.app/orders/get-all-orders"
            );
            const data = await res.json();
            return data;
        },
    });
    console.log(allOrders)
    return (

        <section className="p-4">
            <h2 className="text-2xl font-bold">
                {allOrders?.length} All Orders
            </h2>
            {/* table all organizer  */}
            <div>
                <div className="rounded-md border border-gray-50 mr-2 mt-5">
                    <table className="w-11/12 mx-auto border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-gray-50">
                            <tr>
                                {/* <th
                                    scope="col"
                                    className="px-6 py-4 font-semibold text-gray-900"
                                >
                                    Photo
                                </th> */}
                                <th
                                    scope="col"
                                    className="px-6 py-4 font-semibold text-gray-900"
                                >
                                    Order_Id
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
                                    Price
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
                            ) :
                                (
                                    allOrders?.map((orders) => (
                                        <tr key={orders._id} className="hover:bg-gray-50">
                                            <td className="px-4 py-4">
                                                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                                                    {orders?._id
                                                        ? orders?._id
                                                        : "Unknown"}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4">
                                                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                                                    {orders?.customer_email}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4">
                                                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                                                    {orders?.hotel_name
                                                        ? orders?.hotel_name
                                                        : "Unknown"}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4">
                                                <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                                                    {orders?.total_price ? orders?.total_price : "NaN"}
                                                </span>
                                            </td>

                                            <td className="px-6 py-4">
                                                <div className="relative">
                                                    <p
                                                        onClick={() =>
                                                            setSubmenu(orders?._id) &
                                                            handleSubMenu(orders?._id)
                                                        }
                                                        className="font-xxl font-bold cursor-pointer "
                                                    >
                                                        More
                                                    </p>

                                                    {submenu === orders?._id && (
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







        // <div>
        //     <div className="w-full">
        //         <div className="bg-white shadow-md rounded">
        //             <table className="w-full">
        //                 <thead>
        //                     <tr className="bg-slate-50 text-slate-900 text-sm">
        //                         <th className="py-3 px-14 text-left">Id</th>
        //                         <th className="py-3 px-14 text-left">Name</th>
        //                         <th className="py-3 px-14 text-center">Room</th>
        //                         <th className="py-3 px-14 text-center">Date</th>
        //                         <th className="py-3 px-14 text-center">Price</th>
        //                         <th className="py-3 px-14 text-center">Status</th>
        //                         <th className="py-3 px-14 text-center">Action</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody className="text-slate-900 w-full border-2  text-sm font-medium">
        //                     <tr className="border-b     border-gray-200 hover:bg-blue-500  hover:shadow-3xl hover:shadow-blue-400 hover:text-slate-50">
        //                         <td className="py-3 px-14 text-left whitespace-nowrap">
        //                             <div className="flex items-center">
        //                                 <div className="mr-2">
        //                                     <span className="font-medium">#4573</span>
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-left">
        //                             <div className="flex items-center">
        //                                 <div className="mr-2">
        //                                     <img
        //                                         alt="hello"
        //                                         className="w-6 h-6 rounded-full"
        //                                         src="https://randomuser.me/api/portraits/men/1.jpg"
        //                                     />
        //                                 </div>
        //                                 <span className="">Eshal Rosas</span>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex items-center justify-center">
        //                                 <h6 className="font-semibold">Deluxe One</h6>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex items-center justify-center">
        //                                 <h6 className="font-semibold">17 Feb 2023</h6>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <span className="rounded-full text-md font-semibold">
        //                                 $<span>10.00</span>
        //                             </span>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex item-center justify-center">
        //                                 <div className="w-4 mr-2 transform ">
        //                                     <h4 className="text-red-600">Pending</h4>
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex item-center justify-center">
        //                                 <div className="w-4 mr-2 transform ">
        //                                     <AiTwotoneSetting className="text-lg" />
        //                                 </div>
        //                             </div>
        //                         </td>
        //                     </tr>

        //                     <tr className="border-b my-6 border-gray-200 hover:bg-blue-500  hover:shadow-3xl hover:shadow-blue-400 hover:text-slate-50">
        //                         <td className="py-3 px-14 text-left whitespace-nowrap">
        //                             <div className="flex items-center">
        //                                 <div className="mr-2">
        //                                     <span className="font-medium">#4573</span>
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-left">
        //                             <div className="flex items-center">
        //                                 <div className="mr-2">
        //                                     <img
        //                                         alt="hello"
        //                                         className="w-6 h-6 rounded-full"
        //                                         src="https://randomuser.me/api/portraits/men/1.jpg"
        //                                     />
        //                                 </div>
        //                                 <span className="">Eshal Rosas</span>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex items-center justify-center">
        //                                 <h6 className="font-semibold">Deluxe One</h6>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex items-center justify-center">
        //                                 <h6 className="font-semibold">17 Feb 2023</h6>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <span className="rounded-full text-md font-semibold">
        //                                 $<span>10.00</span>
        //                             </span>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex item-center justify-center">
        //                                 <div className="w-4 mr-2 transform ">
        //                                     <h4 className="text-red-600">Pending</h4>
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex item-center justify-center">
        //                                 <div className="w-4 mr-2 transform ">
        //                                     <AiTwotoneSetting className="text-lg" />
        //                                 </div>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                     <tr className="border-b my-6 border-gray-200 hover:bg-blue-500  hover:shadow-3xl hover:shadow-blue-400 hover:text-slate-50">
        //                         <td className="py-3 px-14 text-left whitespace-nowrap">
        //                             <div className="flex items-center">
        //                                 <div className="mr-2">
        //                                     <span className="font-medium">#4573</span>
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-left">
        //                             <div className="flex items-center">
        //                                 <div className="mr-2">
        //                                     <img
        //                                         alt="hello"
        //                                         className="w-6 h-6 rounded-full"
        //                                         src="https://randomuser.me/api/portraits/men/1.jpg"
        //                                     />
        //                                 </div>
        //                                 <span className="">Eshal Rosas</span>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex items-center justify-center">
        //                                 <h6 className="font-semibold">Deluxe One</h6>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex items-center justify-center">
        //                                 <h6 className="font-semibold">17 Feb 2023</h6>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <span className="rounded-full text-md font-semibold">
        //                                 $<span>10.00</span>
        //                             </span>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex item-center justify-center">
        //                                 <div className="w-4 mr-2 transform ">
        //                                     <h4 className="text-green-300">Completed</h4>
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex item-center justify-center">
        //                                 <div className="w-4 mr-2 transform ">
        //                                     <AiTwotoneSetting className="text-lg" />
        //                                 </div>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                     <tr className="border-b my-6 border-gray-200 hover:bg-blue-500  shadow-0 hover:shadow-3xl hover:shadow-blue-400 hover:text-slate-50">
        //                         <td className="py-3 px-14 text-left whitespace-nowrap">
        //                             <div className="flex items-center">
        //                                 <div className="mr-2">
        //                                     <span className="font-medium">#4573</span>
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-left">
        //                             <div className="flex items-center">
        //                                 <div className="mr-2">
        //                                     <img
        //                                         alt="hello"
        //                                         className="w-6 h-6 rounded-full"
        //                                         src="https://randomuser.me/api/portraits/men/1.jpg"
        //                                     />
        //                                 </div>
        //                                 <span className="">Eshal Rosas</span>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex items-center justify-center">
        //                                 <h6 className="font-semibold">Deluxe One</h6>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex items-center justify-center">
        //                                 <h6 className="font-semibold">17 Feb 2023</h6>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <span className="rounded-full text-md font-semibold">
        //                                 $<span>10.00</span>
        //                             </span>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex item-center justify-center">
        //                                 <div className="w-4 mr-2 transform ">
        //                                     <h4 className="text-green-400">Active</h4>
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-6 text-center">
        //                             <div className="flex item-center justify-center">
        //                                 <div className="w-4 mr-2 transform ">
        //                                     <AiTwotoneSetting className="text-lg" />
        //                                 </div>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>
        // </div>
    );
};

export default AllOrders;
