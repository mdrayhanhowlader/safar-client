import React from 'react';
import { FaFacebook, FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';

const OurTeam = () => {

    const devData = [
        {
            name: "Nesar Ahmed",
            about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            name: "Syed Abdul Hakim",
            about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            name: "Nurul Islam",
            about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            name: "Rayhan Howlader",
            about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            name: "Mohiuddin Shimul",
            about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            name: "Abdullah Al-Mamun",
            about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        }
    ]
    return (
        <div>
            {/* <div>
                <h1 className='text-2xl font-bold text-center my-2'>About Us</h1>
                <div className='lg:w-1/2 lg:mx-auto mx-6 my-4 shadow-2xl p-6 rounded-3xl'>
                    <p className='text-center'>

                    </p>
                </div>
            </div> */}
            <div>
                <h1 className='text-2xl font-bold text-center mt-12'>Our Team</h1>

                <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 p-6'>
                    {
                        devData.map(dev =>
                            <div className='hover:shadow-lg lg:grid lg:gap-6 lg:grid-cols-6 border-4 border-sky-50 rounded-lg p-4'>
                                <div className='flex items-center col-span-2'>
                                    <img className='h-48 w-full' src='https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg' alt='' />
                                </div>
                                <div className='col-span-4'>
                                    <div className='lg:flex '>
                                        <div className='mx-4 flex lg:flex-col'>
                                            <div className='flex items-center justify-center hover:bg-slate-200 my-2 lg:mx-0 mx-6 border rounded-full h-8 w-8'>
                                                <FaGithub />
                                            </div>
                                            <div className='flex items-center justify-center hover:bg-slate-200 my-2 lg:mx-0 mx-6 border rounded-full h-8 w-8'>
                                                <FaLinkedin />
                                            </div>
                                            <div className='flex items-center justify-center hover:bg-slate-200 my-2 lg:mx-0 mx-6 border rounded-full h-8 w-8'>
                                                <FaFacebook />
                                            </div>
                                            <div className='flex items-center justify-center hover:bg-slate-200 my-2 lg:mx-0 mx-6 border rounded-full h-8 w-8'>
                                                <FaGlobe />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex lg:justify-start justify-center my-2'>
                                                <h1 className='text-green-600 font-bold'>{dev.name}</h1>
                                            </div>
                                            <div className='flex justify-center'>
                                                <small className='lg:text-start text-center'>
                                                    {dev.about}
                                                </small>
                                            </div>
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

export default OurTeam;