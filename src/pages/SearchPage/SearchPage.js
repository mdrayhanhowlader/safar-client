import React from "react";
import Filters from "./Filters/Filters";
import SearchProducts from "./SearchProducts/SearchProducts";

const SearchPage = () => {
  return (
    <div className="flex">
      <Filters></Filters>
      <SearchProducts></SearchProducts>
    </div>
  );
};

export default SearchPage;
