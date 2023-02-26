import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { TfiEmail } from 'react-icons/tfi';
import { HiOutlinePhone } from 'react-icons/hi';
import guide from '../../assets/safar logo/2.png';
import cardbg from '../../assets/fullbg.png';
import { FaRegAddressCard } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { async } from '@firebase/util';

const AllGuides = () => {
    const [nw, setNw] = useState([]);
    const { data: guides = [] } = useQuery({
        queryKey: ['all-guides'],
        queryFn: async () => {
            const res = await fetch('https://safar-server-nasar06.vercel.app/users/all-guides');
            const data = await res.json();
            return data;
        }
    })


    // handle search
    const handleSearch = async (event) => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;

        const res = await fetch(`http://localhost:5000/users/all-guides?name=${search}&location=${search}`);
        const nData = await res.json();
        setNw(nData)
        console.log(nData)
        
    }
    return (
        <div style={{ backgroundImage: `url(${guide})` }} className="bg-cover">
            <div >
                <div >
            <Navbar/>

                </div>
                
                <div className='flex justify-between items-center mt-24 ml-10 md:ml-16 pb-24'>
                    <h1 className="md:text-5xl text-3xl text-indigo-900 font-semibold">Find Your Guide
                 <span className='text-orange-600'> To Ease</span> 
                 <br />
                    Your Journey.</h1>
                    <div style={{ backgroundImage: `url(${cardbg})` }}
                    className='flex bg-center justify-center w-1/2 mr-10 md:mr-16 py-6 border rounded-lg shadow-lg'>
                <form onSubmit={handleSearch}>
                    <input type="text" name='search' placeholder='location or id' className='p-2 border-y border-l outline-none rounded-l-lg'/>
                    <input type="submit" value="Search" className='p-2 text-white rounded-r-lg outline-none bg-blue-500 hover:bg-blue-400'/>
                </form>
            </div>
                </div>
            
            </div>
            {
                nw.length === 0 && 
                <div>
                <div className='grid gap-12 grid-cols-1 lg:grid-cols-1 p-6'>
                    {
                        guides?.map(guide =>
                            <div style={{ backgroundImage: `url(${cardbg})` }}
                            className="w-full lg:w-2/6 mx-auto odd:gap-4 lg:odd:mr-96 lg:even:ml-96 odd:flex-row-reverse border-2 shadow-lg shadow-blue-200 rounded-lg p-4 sm:flex sm:space-x-6 ">
                                <div className="flex-shrink-0 w-full mb-6 h-56 sm:h-44 sm:w-44 sm:mb-0">
                                    <img src={guide?.photo} alt="" className="object-cover object-center w-full h-full rounded-md bg-gray-500" />
                                </div>
                                <div 
                                className="flex w-full flex-col space-y-2">
                                    <div>
                                        <h2 className="text-2xl font-semibold">{guide?.name}</h2>
                                        <span className="text-sm text-gray-500">Tour Guide</span>
                                    </div>
                                    <div className="">
                                        <span className="flex items-center space-x-2">
                                            <FaRegAddressCard/>
                                            <span className="text-gray-500">{guide?.address}</span>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                            <TfiEmail className='text-blue-500'/>
                                            <span className="text-gray-500">{guide?.email}</span>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                            <HiOutlinePhone className='text-green-500'/>
                                            <span className="text-gray-500">{guide?.phone}</span>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                            <SlLocationPin className='text-orange-500'/>
                                            <span className="text-gray-500">{guide?.location}</span>
                                        </span>
                                        <Link to={`/guideprofile/${guide?._id}`}>
                                        <button className='bg-blue-500 px-2 rounded-lg py-0.5 my-1 text-white text-xs hover:bg-blue-400'>Details</button>
                                        </Link> 
                                        
                                    </div>
                                         
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
            }
            {
                nw?.length >= 0 &&
                <div>
                <div className='grid gap-12 grid-cols-1 lg:grid-cols-1 p-6'>
                    {
                        nw?.map(guide =>
                            <div style={{ backgroundImage: `url(${cardbg})` }}
                            className="w-full lg:w-2/6 mx-auto odd:gap-4 lg:odd:mr-96 lg:even:ml-96 odd:flex-row-reverse border-2 shadow-lg shadow-blue-200 rounded-lg p-4 sm:flex sm:space-x-6 ">
                                <div className="flex-shrink-0 w-full mb-6 h-56 sm:h-44 sm:w-44 sm:mb-0">
                                    <img src={guide?.photo} alt="" className="object-cover object-center w-full h-full rounded-md bg-gray-500" />
                                </div>
                                <div 
                                className="flex w-full flex-col space-y-2">
                                    <div>
                                        <h2 className="text-2xl font-semibold">{guide?.name}</h2>
                                        <span className="text-sm text-gray-500">Tour Guide</span>
                                    </div>
                                    <div className="">
                                        <span className="flex items-center space-x-2">
                                            <FaRegAddressCard/>
                                            <span className="text-gray-500">{guide?.address}</span>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                            <TfiEmail className='text-blue-500'/>
                                            <span className="text-gray-500">{guide?.email}</span>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                            <HiOutlinePhone className='text-green-500'/>
                                            <span className="text-gray-500">{guide?.phone}</span>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                            <SlLocationPin className='text-orange-500'/>
                                            <span className="text-gray-500">{guide?.location}</span>
                                        </span>
                                        <Link to={`/guideprofile/${guide?._id}`}>
                                        <button className='bg-blue-500 px-2 rounded-lg py-0.5 my-1 text-white text-xs hover:bg-blue-400'>Details</button>
                                        </Link> 
                                        
                                    </div>
                                         
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
            }
        </div>
    );
};

export default AllGuides;
