import React, { createContext, useEffect, useReducer, useState } from "react";
import HeaderSearch from "../pages/Home/HeaderSearch/HeaderSearch";
import OfferPage from "../pages/OfferPage/OfferPage";



const InitialState = {
<<<<<<< HEAD
  // destination: JSON.parse(localStorage.getItem("destination")),
  // days: JSON.parse(localStorage.getItem("days")),
  // options: JSON.parse(localStorage.getItem("options")),
=======
  destination: JSON.parse(localStorage.getItem("destination")) ,
  dates: JSON.parse(localStorage.getItem("dates")) ,
  days: JSON.parse(localStorage.getItem("days")),
  options: JSON.parse(localStorage.getItem("options"))
>>>>>>> 3bb2a504158ce10bd05074255445d86e64dc63ae
};
console.log("InitialStateI", InitialState)

export const SearchContext = createContext(InitialState);

const searchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return InitialState;

    default:
      return state;
  }
};

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, InitialState);
  
  console.log(state.dates)
  return (
    <>
      <SearchContext.Provider
        value={{
          destination: state.city,
          dates: state.dates,
          days: state.days,
          options: state.options,
          dispatch,
        }}
      >
        {children}
      </SearchContext.Provider>
    </>
  );
};
