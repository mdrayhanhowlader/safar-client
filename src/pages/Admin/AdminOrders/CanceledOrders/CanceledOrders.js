import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import useTitle from '../../../../hooks/useTitle';

const CanceledOrders = () => {
    const { user } = useContext(AuthContext)
    useTitle('Canceled Orders');

    const { data: bookedOrders, isLoading } = useQuery({
        queryKey: ["completed-orders"],
        queryFn: async () => {
            const res = await fetch(
                `https://safar-server-nasar06.vercel.app/orders/get-order-byEmail?email=${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });
    console.log(bookedOrders)
    return (
        <section className="p-4">
            <h2 className="text-2xl font-bold">
                {bookedOrders?.length} Orders Cancelled
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
                                bookedOrders?.map((order) => (
                                    <tr key={order._id} className="hover:bg-gray-50">
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                                                {order?._id
                                                    ? order?._id
                                                    : "Unknown"}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                                                {order?.customer_email}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                                                {order?.hotel_name
                                                    ? order?.hotel_name
                                                    : "Unknown"}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                                                {order?.total_price ? order?.total_price : "NaN"}
                                            </span>
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

export default CanceledOrders;