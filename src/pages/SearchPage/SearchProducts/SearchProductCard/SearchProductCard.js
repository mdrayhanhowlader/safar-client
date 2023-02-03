import React from "react";
import SingleProductCard from "./SingleProductCard";

const SearchProductCard = ({hotelData}) => {
  console.log(hotelData);
  return (
    <div>
      <SingleProductCard hotelData={hotelData} />
    </div>
  );
};

export default SearchProductCard;
