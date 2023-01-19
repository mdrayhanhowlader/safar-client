import React from "react";
import SearchProductCard from "./SearchProductCard/SearchProductCard";

const SearchProducts = () => {
  return (
    <div className="w-3/4 m-4 px-3 ">
      <div className="grid grid-cols-3 gap-6">
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
