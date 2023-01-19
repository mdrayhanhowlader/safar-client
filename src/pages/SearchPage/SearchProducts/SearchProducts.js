import React from "react";
import SearchNav from "./SearchNav";
import SearchProductCard from "./SearchProductCard/SearchProductCard";

const SearchProducts = () => {
  return (
    <div className="lg:w-3/4 m-4 px-3 ">
      <div className="mb-4 flex justify-end">
        <SearchNav></SearchNav>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <SearchProductCard></SearchProductCard>
        <SearchProductCard></SearchProductCard>
        <SearchProductCard></SearchProductCard>
        <SearchProductCard></SearchProductCard>
        <SearchProductCard></SearchProductCard>
        <SearchProductCard></SearchProductCard>
      </div>
    </div>
  );
};

export default SearchProducts;
