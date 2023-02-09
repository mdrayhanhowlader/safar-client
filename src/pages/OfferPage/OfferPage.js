// import React from "react";
// import HeaderSearch from "../Home/HeaderSearch/HeaderSearch";
// import CityCard from "./CityCard/CityCard";

// const OfferPage = () => {
//     return (
//         <div className='w-[100%] mx-auto'>
//             <HeaderSearch></HeaderSearch>
//             <h2 className='text-xl my-2 mt-20 mx-4'>Explore more Early 2023 Deals</h2>
//             <div className="grid lg:grid-cols-3 gap-6 mx-4">
//             <CityCard></CityCard>
//             <CityCard></CityCard>
//             <CityCard></CityCard>
//             <CityCard></CityCard>
//             <CityCard></CityCard>
//             <CityCard></CityCard>
            
//         </div>
//         <h2 className='text-xl my-2 mt-20 mx-4'>Explore more Early 2023 Deals</h2>
//             <div className="grid lg:grid-cols-3 gap-6 mx-4">
//                 <CityCard></CityCard>
//                 <CityCard></CityCard>
//                 <CityCard></CityCard>
//                 <CityCard></CityCard>
//                 <CityCard></CityCard>
//                 <CityCard></CityCard>
//             </div>
//         </div>
//     );
// };

// export default OfferPage;


import React from 'react';
import HeaderSearch from '../Home/HeaderSearch/HeaderSearch';
import Subscribe from '../Home/Subscibe/Subscribe';
import CityCard from './CityCard/CityCard';

const OfferPage = () => {
    return (
        <div className='w-[100%] mx-auto'>
            <HeaderSearch></HeaderSearch>
            <h2 className='text-xl my-2 mt-20 mx-4'>Explore more Early 2023 Deals</h2>
            <div className="grid lg:grid-cols-3 gap-6 mx-4">
            <CityCard></CityCard>
            <CityCard></CityCard>
            <CityCard></CityCard>
            <CityCard></CityCard>
            <CityCard></CityCard>
            <CityCard></CityCard>
            
        </div>
        <h2 className='text-xl my-2 mt-20 mx-4'>Explore more Early 2023 Deals</h2>
            <div className="grid lg:grid-cols-3 gap-6 mx-4">
                <CityCard></CityCard>
                <CityCard></CityCard>
                <CityCard></CityCard>
                <CityCard></CityCard>
                <CityCard></CityCard>
                <CityCard></CityCard>
            </div>
        </div>
    );
};

export default OfferPage;