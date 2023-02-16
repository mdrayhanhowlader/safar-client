import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";



const AllOrders = () => {
    return (
        <div>
            <div className="w-full">
                <div className="bg-white shadow-md rounded">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50 text-slate-900 text-sm">
                                <th className="py-3 px-14 text-left">Id</th>
                                <th className="py-3 px-14 text-left">Name</th>
                                <th className="py-3 px-14 text-center">Room</th>
                                <th className="py-3 px-14 text-center">Date</th>
                                <th className="py-3 px-14 text-center">Price</th>
                                <th className="py-3 px-14 text-center">Status</th>
                                <th className="py-3 px-14 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-900 w-full border-2  text-sm font-medium">
                            <tr className="border-b     border-gray-200 hover:bg-blue-500  hover:shadow-3xl hover:shadow-blue-400 hover:text-slate-50">
                                <td className="py-3 px-14 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                            <span className="font-medium">#4573</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                            <img
                                                alt="hello"
                                                className="w-6 h-6 rounded-full"
                                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                            />
                                        </div>
                                        <span className="">Eshal Rosas</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        <h6 className="font-semibold">Deluxe One</h6>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        <h6 className="font-semibold">17 Feb 2023</h6>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className="rounded-full text-md font-semibold">
                                        $<span>10.00</span>
                                    </span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform ">
                                            <h4 className="text-red-600">Pending</h4>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform ">
                                            <AiTwotoneSetting className="text-lg" />
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr className="border-b my-6 border-gray-200 hover:bg-blue-500  hover:shadow-3xl hover:shadow-blue-400 hover:text-slate-50">
                                <td className="py-3 px-14 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                            <span className="font-medium">#4573</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                            <img
                                                alt="hello"
                                                className="w-6 h-6 rounded-full"
                                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                            />
                                        </div>
                                        <span className="">Eshal Rosas</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        <h6 className="font-semibold">Deluxe One</h6>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        <h6 className="font-semibold">17 Feb 2023</h6>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className="rounded-full text-md font-semibold">
                                        $<span>10.00</span>
                                    </span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform ">
                                            <h4 className="text-red-600">Pending</h4>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform ">
                                            <AiTwotoneSetting className="text-lg" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b my-6 border-gray-200 hover:bg-blue-500  hover:shadow-3xl hover:shadow-blue-400 hover:text-slate-50">
                                <td className="py-3 px-14 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                            <span className="font-medium">#4573</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                            <img
                                                alt="hello"
                                                className="w-6 h-6 rounded-full"
                                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                            />
                                        </div>
                                        <span className="">Eshal Rosas</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        <h6 className="font-semibold">Deluxe One</h6>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        <h6 className="font-semibold">17 Feb 2023</h6>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className="rounded-full text-md font-semibold">
                                        $<span>10.00</span>
                                    </span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform ">
                                            <h4 className="text-green-300">Completed</h4>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform ">
                                            <AiTwotoneSetting className="text-lg" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b my-6 border-gray-200 hover:bg-blue-500  shadow-0 hover:shadow-3xl hover:shadow-blue-400 hover:text-slate-50">
                                <td className="py-3 px-14 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                            <span className="font-medium">#4573</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                            <img
                                                alt="hello"
                                                className="w-6 h-6 rounded-full"
                                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                            />
                                        </div>
                                        <span className="">Eshal Rosas</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        <h6 className="font-semibold">Deluxe One</h6>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        <h6 className="font-semibold">17 Feb 2023</h6>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className="rounded-full text-md font-semibold">
                                        $<span>10.00</span>
                                    </span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform ">
                                            <h4 className="text-green-400">Active</h4>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform ">
                                            <AiTwotoneSetting className="text-lg" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;
