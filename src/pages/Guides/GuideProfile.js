import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import cardBg from '../../assets/safar logo/2.png';
import { FaRegAddressCard } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { HiOutlinePhone } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';

const GuideProfile = () => {
    useTitle('Profile');
    const guide = useLoaderData([]);
    console.log(guide)
    return (
        <div 
        style={{ backgroundImage: `url(${cardBg})` }}
        className='bg-cover'
        >
            <section className="bg-white ">
    <div className="max-w-6xl px-6 py-10 mx-auto">
        
        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
        {guide?.name}'s Profile
        </h1>

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-white border shadow-md shadow-blue-300 -z-10 md:h-96 rounded-2xl"></div>
            
            <div className="w-full p-6 bg-blue-200 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img className="h-48 w-48 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] mx-auto md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={guide?.photo} alt="" />
                
                <div className="mt-12 md:mx-6">
                    <div>
                        <p className="text-3xl font-medium tracking-tight ">{guide?.name}</p>
                        <p className=" ">Tour Guide</p>
                    </div>

                    <p class="my-4 text-lg leading-relaxed  md:text-lg"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda.</p>

                    <span className="flex items-center space-x-2">
                                            <FaRegAddressCard/>
                                            
                                            <span className="text-lg">{guide?.address}</span>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                            <TfiEmail className='text-blue-500'/>
                                            <span className="text-lg">{guide?.email}</span>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                            <HiOutlinePhone className='text-green-500'/>
                                            <span className="text-lg">{guide?.phone}</span>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                            <SlLocationPin className='text-orange-500'/>
                                            <span className="text-lg">{guide?.location}</span>
                                        </span>
                    
                    <div className="flex items-center  mt-6 md:justify-end">
                        

                        <button title="right arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 bg-blue-500 hover:bg-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</section>
            
        </div>
    );
};

export default GuideProfile;