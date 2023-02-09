import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Destination from "../Destination/Destination";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import Offers from "../Offers/Offers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <HeaderSearch></HeaderSearch> */}
      {/* <Properties state={state}></Properties> */}
      <Offers></Offers>
      <Destination></Destination>
      {/* <TopRated></TopRated> */}
      {/* <Subscribe></Subscribe> */}
    </div>
  );
};

export default Home;
