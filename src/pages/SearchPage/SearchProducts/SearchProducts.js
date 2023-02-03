import React from "react";
import SearchNav from "./SearchNav";
import SearchProductCard from "./SearchProductCard/SearchProductCard";

const SearchProducts = ({ destination }) => {
  return (
    <div className="w-5/5 m-4 px-3 ">
      <div className="mb-12 md:flex md:justify-end">
        <SearchNav></SearchNav>
      </div>
      <div className="grid lg:grid-cols-1 gap-2">
        {destination.map((hotel) => (
          <SearchProductCard hotel={hotel}></SearchProductCard>
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
