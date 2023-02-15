import React from "react";
import SearchNav from "./SearchNav";
import SearchProductCard from "./SearchProductCard/SearchProductCard";

const SearchProducts = ({ allHotels, isLoading }) => {
  // const { stays } = destination;
  return (
    <div className="w-5/5 m-4 px-3 ">
      <div className="mb-12 md:flex md:justify-end">
        <SearchNav></SearchNav>
      </div>
      <div className="grid lg:grid-cols-1 gap-2">
        {isLoading
          ? (<><section className="bg-white-900 relative place-items-center grid h-screen w-screen gap-4">

            <div className="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

            <div className="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

            <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

            <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-900 filter mix-blend-overlay h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </section></>)
          : (<> {allHotels?.map((hotelData, i) => (
            <SearchProductCard key={i} hotelData={hotelData}></SearchProductCard>
          ))}</>)}
      </div>
    </div>
  );
};

export default SearchProducts;
