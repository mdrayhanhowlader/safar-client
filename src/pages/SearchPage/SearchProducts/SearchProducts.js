import React from "react";
import SearchNav from "./SearchNav";

const SearchProducts = () => {
  return (
    <div className="w-full mt-12">
      <div className="md:float-right pr-6">
        <SearchNav></SearchNav>
      </div>
    </div>
  );
};

export default SearchProducts;
