import { useQuery } from '@tanstack/react-query';
import { async } from 'q';
import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const AllGuides = () => {
    const {data: guides = []} = useQuery({
        queryKey: ['all-guides'],
        queryFn: async () => {
            const res = await fetch('https://safar-server-nasar06.vercel.app/users/all-guides');
            const data = await res.json();
            return data;
        }
    }) 
    return (
        <div>
        <Navbar/>
        {/* <div>
            <h1 className='text-2xl font-bold text-center my-2'>About Us</h1>
            <div className='lg:w-1/2 lg:mx-auto mx-6 my-4 shadow-2xl p-6 rounded-3xl'>
                <p className='text-center'>

                </p>
            </div>
        </div> */}
        <div>
            <h1 className='text-2xl font-bold text-center mt-12'>All Guides</h1>

            <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 p-6'>
                {
                    guides?.map(guide =>
                        <div key={guide._id} className='hover:shadow-lg lg:grid lg:gap-6 lg:grid-cols-6 border-4 border-sky-50 rounded-lg p-4'>
                            <div className='flex items-center col-span-2'>
                                <img className='h-48 w-full' src={guide?.photo} alt='' />
                            </div>
                            <div className='col-span-4'>
                                <div className='lg:flex '>
                                    <div className='mx-4 flex lg:flex-col'>

                                    <h1 className='text-green-600  text-lg font-semibold'>Name: {guide?.name}</h1>
                                       
                                        <p>Mobile: {guide?.phone}</p>

                                        <p>Email: {guide?.email}</p>
                                        <p>Address:  {guide?.address}</p>

                                        <p>Work Location: {guide?.location}</p>

                                        
                                        
                                    </div>
                                   
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>

        </div>
    </div>
    );
};

export default AllGuides;