import React from "react";
import { useLoaderData } from "react-router-dom";
import Filters from "./Filters/Filters";
import SearchBanner from "./SearchBanner";
import SearchProducts from "./SearchProducts/SearchProducts";

const SearchPage = () => {
  const destination = useLoaderData();
  console.log(destination);
  return (
    <div className="w-full mx-auto">
      <div>
        <SearchBanner></SearchBanner>
      </div>
      <div className="lg:flex">
        <Filters></Filters>
        <SearchProducts destination={destination}></SearchProducts>
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
