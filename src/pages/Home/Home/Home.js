import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Destination from "../Destination/Destination";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import Offers from "../Offers/Offers";
import Properties from "../Properties/Properties";
// import Subscribe from "../Subscibe/Subscribe";
import TopRated from "../TopRated/TopRated";

const Home = () => {
  const [state, setState] = useState();
  const handleSearch = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const res = await fetch(
      `https://safar-server-nasar06.vercel.app/search/location?location=${name}`
    );
    const data = await res.json();
    setState(data);
    console.log(data);
  };
  return (
    <div>
      {/* <Banner></Banner> */}
      <HeaderSearch handleSearch={handleSearch}></HeaderSearch>
      <Properties state={state}></Properties>
      <Offers></Offers>
      <Destination></Destination>
      <TopRated></TopRated>
      {/* <Subscribe></Subscribe> */}
    </div>
  );
};

export default Home;
