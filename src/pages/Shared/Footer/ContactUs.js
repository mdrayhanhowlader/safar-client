import React from 'react';
import { FaMailBulk, FaMapMarkerAlt, FaMobile } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div>
            <h1 className='text-xl font-bold mx-5 mb-6'>Contact Us</h1>
            <div className='flex my-4'>
                <div className='mx-4'>
                    <FaMapMarkerAlt className='h-10 w-10 text-blue-400' />
                </div>
                <div className='mx-4'>
                    <h1 className='text-blue-500 font-bold'>Address</h1>
                    <p>302/4, Hallowzen Road, <br />Pharmaceutical 1210, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='flex my-4'>
                <div className='mx-4'>
                    <FaMobile className='h-10 w-10 text-blue-400' />
                </div>
                <div className='mx-4'>
                    <h1 className='text-blue-500 font-bold'>Phone</h1>
                    <p>+8801234567891 <br /> +8809988776655</p>
                </div>
            </div>
            <div className='flex my-4'>
                <div className='mx-4'>
                    <FaMailBulk className='h-10 w-10 mt-1 text-blue-400' />
                </div>
                <div className='mx-4'>
                    <h1 className='text-blue-500 font-bold'>Email</h1>
                    <p>safar.jarnn@gmail.com</p>
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <button className='text-white w-32 h-8 bg-blue-400 rounded hover:bg-blue-500 border'>Direct Message</button>
            </div>
        </div>
    );
};

export default ContactUs;