import React, { useContext } from 'react';
import { FaIndent } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchProvider';
import DetailSection from './DetailsSection/DetailSection';

const SinglePage = () => {
    const data = useContext(SearchContext);
    const hotelData = useLoaderData();
    const {hotel_name, description, location, regular_price, images, offer_price, facilities } = hotelData;
    console.log(hotelData);
    return (
        <div>
            <div className='grid md:grid-cols-2 w-full'>
                <div>
                    <img className='w-full h-full md:px-4' src={images[0].url} alt='' />
                </div>
                <div>
                    <div className='grid gap-4 grid-cols-2 h-full'>

                        <div className=''>
                            <img className='h-full w-full' src={images[1].url} alt='' />
                        </div>
                        <div className=''>
                            <img className='h-full w-full' src={images[2].url} alt='' />
                        </div>

                        <div className=''>
                            <img className='h-full w-full' src={images[3].url} alt='' />
                        </div>
                        <div className=''>
                            <img className='h-full w-full' src={images[4].url} alt='' />
                            <div className='flex absolute bg-white hover:bg-slate-200 
                            m-2 mt-[-7vh] w-0.75rem px-2 py-1 
                            ' 
                            // style={{ width: "12rem", marginTop: "-7vh", padding: ".4rem" }}
                            >
                                <FaIndent className='mt-1 mr-1.5' />
                                <button>show all photos</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
            <div>
                <DetailSection hotelData={hotelData} />
            </div>
        </div>
    );
};

export default SinglePage;