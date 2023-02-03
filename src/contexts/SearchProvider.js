import React, { createContext, useState } from "react";
import HeaderSearch from "../pages/Home/HeaderSearch/HeaderSearch";
import OfferPage from "../pages/OfferPage/OfferPage";

export const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [state, setState] = useState();
  const handleGetLocation = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
    const res = await fetch(
      `https://safar-server-nasar06.vercel.app/search/location?location=${name}`
    );
    const data = await res.json();
    setState(data);
    console.log(data);
  };

  const searchInfo = {};
  return (
    <>
      <SearchContext.Provider value={searchInfo}>
        {children}
      </SearchContext.Provider>
    </>
  );
};

export default SearchProvider;
