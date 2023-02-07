import React from 'react';
import { FaAngleDown, FaAngleUp, FaCog, FaInfoCircle, FaRegCreditCard, FaUserFriends } from 'react-icons/fa';
import { HiArrowTrendingUp, HiShoppingCart } from "react-icons/hi2";

const ManageSellerReview = () => {
    return (
        <div>
            <h2 className="text-xl font-bold text-center">Manage Seller Review</h2>

            <div className='p-2'>
                {/* Manage header */}
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='flex justify-between bg-slate-50 p-4 rounded-lg'>
                        <div className='p-2'>
                            <div className='flex justify-around h-7 w-20 rounded-2xl mb-6 bg-green-500'>
                                <div className='flex items-center'>
                                    <FaAngleUp />
                                </div>
                                <button>12%</button>
                            </div>
                            <div className=''>
                                <h1 className='text-xl'>Clients</h1>
                                <p className='text-2xl font-semi-bold'>765</p>
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='flex justify-center items-center rounded-md bg-slate-100 hover:bg-slate-200 mb-6 h-7 w-7'>
                                <FaCog className='h-5 w-5' />
                            </div>
                            <FaUserFriends className='h-11 w-11 text-green-500' />
                        </div>
                    </div>
                    <div className='flex justify-between bg-slate-50 p-4 rounded-lg'>
                        <div className='p-2'>
                            <div className='flex justify-around h-7 w-20 rounded-2xl mb-6 bg-red-500'>
                                <div className='flex items-center'>
                                    <FaAngleDown />
                                </div>
                                <button>16%</button>
                            </div>
                            <div className=''>
                                <h1 className='text-xl'>Sales</h1>
                                <p className='text-2xl font-semi-bold'>$4765</p>
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='flex justify-center items-center rounded-md bg-slate-100 hover:bg-slate-200 mb-6 h-7 w-7'>
                                <FaCog className='h-5 w-5' />
                            </div>
                            <HiShoppingCart className='h-11 w-11 text-blue-500' />
                        </div>
                    </div>
                    <div className='flex justify-between bg-slate-50 p-4 rounded-lg'>
                        <div className='p-2'>
                            <div className='flex justify-around h-7 w-28 rounded-2xl mb-6 bg-green-500'>
                                <div className='flex items-center'>
                                    <FaInfoCircle />
                                </div>
                                <button>Overview</button>
                            </div>
                            <div className=''>
                                <h1 className='text-xl'>Clients</h1>
                                <p className='text-2xl font-semi-bold'>765</p>
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='flex justify-center items-center rounded-md bg-slate-100 hover:bg-slate-200 mb-6 h-7 w-7'>
                                <FaCog className='h-5 w-5' />
                            </div>
                            <HiArrowTrendingUp className='text-red-500 text-5xl font-medium' />
                        </div>
                    </div>
                </div>


                {/* Manage Body */}
                <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 my-6'>
                    <div className='flex justify-between bg-slate-50 p-2 rounded-lg'>
                        <div className='flex items-center p-2'>
                            <div className='flex'>
                                <div className='flex items-center mt-6 mx-4'>
                                    <div className='flex justify-center items-center rounded-lg mb-6 h-9 w-9 bg-slate-200'>
                                        <FaRegCreditCard className='h-6 w-6' />
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className=''>
                                        <h1 className='text-xl'>$765.76</h1>
                                        <p className='font-semi-bold'>3 days ago via Turcotte</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center p-2'>
                            <div>
                                <div className='flex justify-center items-center mb-2'>
                                    <h1>Home loan account</h1>
                                </div>
                                <div className='flex justify-center items-center text-white rounded-2xl h-5 w-16 bg-green-500'>
                                    <small>Deposit</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between bg-slate-50 p-2 rounded-lg'>
                        <div className='flex items-center p-2'>
                            <div className='flex'>
                                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                            <div className='mx-6'>
                                <h1 className='text-xl'>Howell Hand</h1>
                                <p className='font-semi-bold'>Mar 3, 2022 @ percy64</p>
                            </div>
                        </div>
                        <div className='flex items-center p-2'>
                            <div className='flex justify-center items-center text-white rounded-2xl h-6 w-20 bg-green-500 hover:bg-green-600'>
                                <HiArrowTrendingUp className='mx-1' />
                                <h1 className='mx-1'>70%</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 my-6'>
                    <div className='flex justify-between bg-slate-50 p-2 rounded-lg'>
                        <div className='flex items-center p-2'>
                            <div className='flex'>
                                <div className='flex items-center mt-6 mx-4'>
                                    <div className='flex justify-center items-center rounded-lg mb-6 h-9 w-9 bg-slate-200'>
                                        <FaRegCreditCard className='h-6 w-6 text-blue-500' />
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className=''>
                                        <h1 className='text-xl'>$765.76</h1>
                                        <p className='font-semi-bold'>3 days ago via Turcotte</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center p-2'>
                            <div>
                                <div className='flex justify-center items-center mb-2'>
                                    <h1>Savings account</h1>
                                </div>
                                <div className='flex justify-center items-center text-white rounded-2xl h-5 w-16 bg-blue-500'>
                                    <small>Payment</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between bg-slate-50 p-2 rounded-lg'>
                        <div className='flex items-center p-2'>
                            <div className='flex'>
                                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                            <div className='mx-6'>
                                <h1 className='text-xl'>Howell Hand</h1>
                                <p className='font-semi-bold'>Mar 3, 2022 @ percy64</p>
                            </div>
                        </div>
                        <div className='flex items-center p-2'>
                            <div className='flex justify-center items-center text-white rounded-2xl h-6 w-20 bg-green-500 hover:bg-green-600'>
                                <HiArrowTrendingUp className='mx-1' />
                                <h1 className='mx-1'>70%</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageSellerReview;