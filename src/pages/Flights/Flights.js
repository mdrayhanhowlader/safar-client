import React from 'react';
import Navbar from '../../pages/Shared/Navbar/Navbar'
import './Flights.css'

const Flights = () => {
    return (
        <div>
            <Navbar />
            <div className='flights flex justify-center items-center'>
                <h1 className='text-5xl font-bold hover:text-blue-300'>We are coming soon.....</h1>
            </div>
        </div>
    );
};

export default Flights;