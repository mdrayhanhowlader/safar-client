import React, { createContext, useReducer, useState } from "react";
import HeaderSearch from "../pages/Home/HeaderSearch/HeaderSearch";
import OfferPage from "../pages/OfferPage/OfferPage";

const InitialState = {
  city: undefined,
  date: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined
  }
}


export const SearchContext = createContext(InitialState);

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return action.payload;
    case 'RESET_SEARCH':
      return InitialState;
  
    default:
      return state;
  }
}

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, InitialState)



  // const [state, setState] = useState();
  // const handleGetLocation = async (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   console.log(name);
  //   const res = await fetch(
  //     `https://safar-server-nasar06.vercel.app/search/location?location=${name}`
  //   );
  //   const data = await res.json();
  //   setState(data);
  //   console.log(data);
  // };

  const searchInfo = {
    city: state.city,
    dates: state.dates,
    options: state.options,
    dispatch
  };
  return (
    <>
      <SearchContext.Provider value={searchInfo}>
        {children}
      </SearchContext.Provider>
    </>
  );
};

export default SearchProvider;
