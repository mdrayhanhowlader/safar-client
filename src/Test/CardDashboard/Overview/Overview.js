import React from 'react';

const Overview = () => {

    const cardData = [
        {
            title: "Dot dot dot ",
            price: 190,
            icon: "Icon/Logo",
            packageType: "Type of packages & bla bla bla will be added",
            details: "something"
        },
        {
            title: "Dot dot dot ",
            price: 190,
            icon: "Icon/Logo",
            packageType: "Type of packages & bla bla bla will be added",
            details: "something"
        },
        {
            title: "Dot dot dot ",
            price: 190,
            icon: "Icon/Logo",
            packageType: "Type of packages & bla bla bla will be added",
            details: "something"
        },
        {
            title: "Dot dot dot ",
            price: 190,
            icon: "Icon/Logo",
            packageType: "Type of packages & bla bla bla will be added",
            details: "something"
        },
        {
            title: "Dot dot dot ",
            price: 190,
            icon: "Icon/Logo",
            packageType: "Type of packages & bla bla bla will be added",
            details: "something"
        },
    ]
    return (
        <div className='flex justify-center'>
            <div>
                <div className='mt-6'>
                    <h1>Deals you will love</h1>
                    <div className='grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-3'>
                        {
                            cardData.map(card =>
                                <div style={{ height: '12rem', width: '10rem', backgroundColor: '#dcfce7', padding: '.5rem', border: '1px solid gray', borderRadius: '.5rem' }}>
                                    <h1>{card.title}</h1>
                                    <div className='flex justify-end'>
                                        <div>
                                            <p>{card.price}</p>
                                            <small>/per night</small>
                                            <p className='mt-4'>{card.icon}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
                <div className='mt-6'>
                    <h1>All Deals</h1>
                    <div className='grid gap-3 grid-cols-1'>
                        {
                            cardData.map(data =>
                                <div className='grid grid-cols-1 lg:grid-cols-3' style={{ height: '5rem', width: '100%', padding: '.5rem', border: '1px solid gray', borderRadius: '.5rem' }}>

                                    <div className='flex items-center justify-center'>
                                        <h1 className='text-xl font-bold'>{data.icon}</h1>
                                    </div>

                                    <div>
                                        <h1><small>{data.packageType}</small></h1>
                                        <h1><small>details: {data.details} </small></h1>
                                    </div>

                                    <div className='flex items-center justify-center'>
                                        <div>
                                            <h1 className='font-bold'>${data.price}</h1>
                                            <h1><small>/night</small></h1>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Overview;