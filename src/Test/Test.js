import React, { useState } from 'react';
import { FaAngleDown, FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";
import CardDashboard from '../Test/CardDashboard/CardDashboard'
// import { StarRatingContext } from './StarRatingContext';


const Test = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenCard = () => {
        setIsOpen(true)
    }
    const handleCloseCard = () => {
        setIsOpen(false)
    }
    // const { rating, labelText } = useContext(StarRatingContext);
    return (
        <div className='flex justify-center'>
            <div className='flex justify-center'>
                <div>
                    <div className='grid lg:grid-cols-3 mx-auto' style={{ width: "70%", border: '1px solid gray' }}>

                        {/*image section */}
                        <div>
                            <img className='h-full p-1 rounded-lg' src='https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/headmast-desktop/welcomhotel-bhubaneswar.jpg' alt='' />
                        </div>

                        {/* details/middle section */}
                        <div className='m-2'>
                            <div className='flex justify-between'>
                                <h1 className='text-xl font-bold'>Dhaka gol gol</h1>
                                <FaRegHeart className='h-5 w-5 mt-1 mr-4' />
                            </div>
                            <div>
                                <div className='flex'>
                                    <h1> stars *</h1>
                                    <h1>Hotel</h1>
                                </div>
                            </div>
                            <div className='mx-4 mt-4' style={{ border: '1px solid gray' }}>
                                <div className='flex justify-between '>
                                    <div className='flex'>
                                        <FaMapMarkerAlt className='h-4 w-4 mt-1 mx-2' />
                                        <h1>2.5 miles to city centre</h1>
                                    </div>
                                    <FaAngleDown className='h-5 w-5 mt-1' />
                                </div>
                            </div>
                            <div className=' mx-4 mt-4 my-2' style={{ border: '1px solid gray' }}>
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <button className='rounded-xl text-white mx-1' style={{ backgroundColor: "green", width: '3vw' }}>8.7</button>
                                        <h1>2.5 miles to city centre</h1>
                                    </div>
                                    {
                                        isOpen ?

                                            <button onClick={handleCloseCard}><FaAngleDown className='h-5 w-5 mt-1' /></button>
                                            :
                                            <button onClick={handleOpenCard}><FaAngleDown className='h-5 w-5 mt-1' /></button>
                                    }
                                </div>
                            </div>
                        </div>

                        {/* right side section */}
                        <div>
                            <div style={{ height: '100%', padding: ".4rem" }} >

                                <div className='flex justify-between p-4' style={{ height: '60%', backgroundColor: '#dcfce7', borderRadius: ".5rem" }}>
                                    <div>
                                        <h1><small>Renaissance</small></h1>
                                        <h1 className='text-xl font-bold text-green-800 mt-4'><small>$167</small></h1>
                                    </div>
                                    <div>
                                        <h1><small>something</small></h1>
                                        <button style={{ backgroundColor: '#15803d', color: 'white', borderRadius: '1rem', height: '2rem', width: '6rem', marginTop: '3vh' }}>View Dial</button>
                                    </div>
                                </div>

                                <div className='flex' style={{ height: '40%', width: '100%', padding: ".1rem" }}>
                                    <div style={{ width: '40%', backgroundColor: '#dcfce7', borderRadius: ".5rem", marginRight: ".2rem" }}>
                                        <div className='p-2'>
                                            <small>Renaissance</small>
                                            <h1 className='font-bold text-green-800'>$167</h1>
                                        </div>
                                    </div>
                                    <div style={{ width: '60%', backgroundColor: '#dcfce7', borderRadius: ".5rem", padding: '.3rem' }}>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <small>Lowest Price:</small>
                                                <small>$167 Renaissance </small>
                                            </div>
                                            <FaAngleDown className='h-5 w-5' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={isOpen === true ? 'visible' : 'hidden'} style={{ marginTop: '-1.5rem' }}>
                        <CardDashboard handleCloseCard={handleCloseCard} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Test;