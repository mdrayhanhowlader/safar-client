import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import useTitle from '../../../../hooks/useTitle';
import profileImage from "../../../../assets/profile.png";


const Editors = () => {
    const { user } = useContext(AuthContext);
    useTitle('Edit Users');

    const [submenu, setSubmenu] = useState('');
    //handel edit product
    const handleSubMenu = () => {
        setSubmenu(!submenu);
    }
    return (
        <section className="p-4">
            <h2 className="text-2xl font-bold">
                All Editors
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
                                    Contact
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



                            <tr className="hover:bg-gray-50">
                                <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    {user?.profile_img ? (
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
                                </td>
                                <td className="px-4 py-4">
                                    <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                                        Email
                                    </span>
                                </td>
                                <td className="px-4 py-4">
                                    <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                                        name
                                    </span>
                                </td>
                                <td className="px-4 py-4">
                                    <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                                        contact
                                    </span>
                                </td>

                                <td className="px-6 py-4">
                                    <div className="relative">
                                        <p
                                            onClick={() =>
                                                handleSubMenu(submenu)
                                            }
                                            className="font-xxl font-bold cursor-pointer "
                                        >
                                            More
                                        </p>
                                        {submenu && (
                                            <div className="absolute ml-8 bg-white  shadow-md">
                                                <ul>
                                                    <li className="py-2 px-4 text-center text-red-700 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer">
                                                        Remove Editor
                                                    </li>
                                                    <li className="py-2 px-4 text-center text-green-500 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer">
                                                        Make Admin
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Editors;