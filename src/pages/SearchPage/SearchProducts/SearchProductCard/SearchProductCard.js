import React from "react";
import SingleProductCard from "./SingleProductCard";

const SearchProductCard = ({ hotel }) => {
  console.log(hotel);
  return (
    <div>
      <SingleProductCard hotel={hotel} />
    </div>
  );
};

export default SearchProductCard;
