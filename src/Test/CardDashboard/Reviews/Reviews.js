import React from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
    return (
        <div className=''>
            <div className='grid gap-3 grid-cols-1'>

                <div className='grid grid-cols-1 lg:grid-cols-3' style={{ height: '5rem', width: '100%', padding: '.5rem', border: '1px solid gray', borderRadius: '.5rem' }}>

                    <div className='flex items-center justify-center'>
                        <h1 className='text-xl font-bold'>icon</h1>
                    </div>

                    <div>
                        <h1><small>packageType</small></h1>
                        <h1><small>details: details </small></h1>
                    </div>

                    <div className='flex items-center justify-center'>
                        <div>
                            <h1 className='font-bold'>$price</h1>
                            <h1><small>/night</small></h1>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        // <div className='flex justify-center'>
        //     <div>
        //         <h1 className='text-xl font-bold'>Rating overview</h1>
        //         <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
        //             <div>
        //                 <Link to='/'><small>Safar Rating Index based on 23  reviews from:</small></Link>
        //                 <h1><small>Hotels.com(9.3/10), Expedia(9.2/10)</small> </h1>
        //             </div>
        //             <div className='flex justify-between mx-2'>
        //                 <div>
        //                     <h1>Location</h1>
        //                     <h1>Rooms</h1>
        //                     <h1>Service</h1>
        //                 </div>
        //                 <div>
        //                     <h1>Not yet rating</h1>
        //                     <h1>Not yet rating</h1>
        //                     <h1>Not yet rating</h1>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Reviews;

