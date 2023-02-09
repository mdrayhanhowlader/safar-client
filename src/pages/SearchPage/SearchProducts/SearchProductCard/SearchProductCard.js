import React from "react";
import SingleProductCard from "./SingleProductCard";

const SearchProductCard = ({hotelData, info}) => {
  return (
    <div>
      <SingleProductCard hotelData={hotelData} />
    </div>
  );
};

export default SearchProductCard;
