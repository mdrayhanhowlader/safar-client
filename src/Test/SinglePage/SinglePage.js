import React from 'react';
import { FaIndent } from 'react-icons/fa';
import DetailSection from './DetailsSection/DetailSection';

const SinglePage = () => {
    return (
        <div>
            <div className='flex p-2' style={{ width: "100%" }}>
                <div style={{ width: "50%" }}>
                    <img className='w-full px-4' src='https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?b=1&s=170667a&w=0&k=20&c=qha_PaU54cu9QCu1UTlORP4-sW0MqLGERkdFKmC06lI=' alt='' />
                </div>
                <div style={{ width: "50%", height: "100%" }}>
                    <div className='grid gap-4 grid-cols-2'>

                        <div className='h-50'>
                            <img className='h-full w-full' src='https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?b=1&s=170667a&w=0&k=20&c=qha_PaU54cu9QCu1UTlORP4-sW0MqLGERkdFKmC06lI=' alt='' />
                        </div>
                        <div className='h-50'>
                            <img className='h-full w-full' src='https://live.staticflickr.com/65535/52530446584_cb1dce6453_z.jpg' alt='' />
                        </div>


                        <div className='h-50'>
                            <img className='h-full w-full' src='https://live.staticflickr.com/65535/52530446584_cb1dce6453_z.jpg' alt='' />
                        </div>
                        <div className='h-50 relative'>
                            <img className='h-full w-full' src='https://live.staticflickr.com/65535/52530446584_cb1dce6453_z.jpg' alt='' />
                            <div className='flex absolute bg-white hover:bg-slate-200 mx-2' style={{ width: "12rem", marginTop: "-7vh", padding: ".4rem" }}>
                                <FaIndent className='mt-1 mx-2' />
                                <button>show all photos</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
            <div>
                <DetailSection />
            </div>
        </div>
    );
};

export default SinglePage;