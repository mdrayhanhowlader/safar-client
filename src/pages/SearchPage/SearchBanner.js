import React from "react";
import bgImg from "../../assets/guide3.png";

const SearchBanner = ({allHotels}) => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          backgroundPositionY: "center",
        }}
        className="p-8 w-full h-[280px] rounded-md my-6"
      >
        <h2 className="text-2xl font-bold">{allHotels ? allHotels[0].location.city : "Hotels"}</h2>
        <p className="text-2xl font-bold">{allHotels && allHotels.length} Hotels available in this area</p>
      </div>
    </div>
  );
};

export default SearchBanner;
