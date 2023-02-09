import React, { createContext, useEffect, useReducer, useState } from "react";
import HeaderSearch from "../pages/Home/HeaderSearch/HeaderSearch";
import OfferPage from "../pages/OfferPage/OfferPage";

const InitialState = {
  destination: JSON.parse(localStorage.getItem("destination")),
  days: JSON.parse(localStorage.getItem("days")),
  options: JSON.parse(localStorage.getItem("options")),
};

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
  useEffect(() => {
    localStorage.setItem("destination", JSON.stringify(state.destination));
    localStorage.setItem("days", JSON.stringify(state.days));
    localStorage.setItem("options", JSON.stringify(state.options));
  }, [state.destination,state.days,state.options]);
  
  return (
    <>
      <SearchContext.Provider
        value={{
          city: state.city,
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
