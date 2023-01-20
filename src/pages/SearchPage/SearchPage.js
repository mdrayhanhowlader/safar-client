import React from "react";
import Filters from "./Filters/Filters";
import SearchBanner from "./SearchBanner";
import SearchProducts from "./SearchProducts/SearchProducts";

const SearchPage = () => {
  return (
    <div className="container mx-auto">
      <div>
        <SearchBanner></SearchBanner>
      </div>
      <div className="flex">
        <Filters></Filters>
        <SearchProducts></SearchProducts>
      </div>
    </div>
  );
};

export default SearchPage;

{
  /* import SearchBanner from "./SearchBanner";

const SearchPage = () => {
  return (
    <div>
      <div>
        <SearchBanner></SearchBanner>
      </div>
    </div>
  );
}; */
}
