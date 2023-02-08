import React, { useState } from "react";
import Destination from "../Destination/Destination";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import Offers from "../Offers/Offers";

const Home = () => {
  return (
    <div>
      <HeaderSearch ></HeaderSearch>
      {/* <Properties state={state}></Properties> */}
      <Offers></Offers>
      <Destination></Destination>
      {/* <TopRated></TopRated> */}
      {/* <Subscribe></Subscribe> */}
    </div>
  );
};

export default Home;
