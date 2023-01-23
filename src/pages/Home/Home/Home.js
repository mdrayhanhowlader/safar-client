import React from "react";
import Banner from "../Banner/Banner";
import Destination from "../Destination/Destination";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import Offers from "../Offers/Offers";
import Properties from "../Properties/Properties";
import Subscribe from "../Subscibe/Subscribe";
import TopRated from "../TopRated/TopRated";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <HeaderSearch></HeaderSearch>
      <Offers></Offers>
      <Destination></Destination>
      <TopRated></TopRated>
      <Properties></Properties>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
