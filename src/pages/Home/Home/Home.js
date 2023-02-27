import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Destination from "../Destination/Destination";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import MostSelling from "../MostSelling/MostSelling";
import Offers from "../Offers/Offers";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <HeaderSearch></HeaderSearch>
      {/* <Properties state={state}></Properties> */}
      <Offers></Offers>
      <Destination></Destination>
      {/* <TopRated></TopRated> */}
      {/* <Subscribe></Subscribe> */}
      <MostSelling></MostSelling>
    </div>
  );
};

export default Home;
