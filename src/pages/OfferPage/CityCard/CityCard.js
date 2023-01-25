import React from "react";
// import "./CityCard.css";

const CityCard = () => {
  return (
    <div className="w-[100%] bg-base-100 shadow-xl" >
      {/* <figure>
        <img className="w-[100%]" src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure> */}
      <div className="hover:shadow-xl" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
      <h1 className="mb-5 text-xl px-4 text-white font-bold pt-48 pb-4">Dhaka</h1>
      </div>
      <div className=" m-4">
        <span className="bg-teal-700 text-sm text-white p-1 rounded">Early 2023 Deal</span>
        <span className="text-sm mx-1">starting at </span>
        <span className="text-teal-700 text-xl">BDT 2,189 </span>
      </div>
      <div className=" my-2 text-center">
      <button className="bg-purple-600 w-[90%] py-2 rounded m-2 text-white ">View Details</button>
      </div>
    </div>
  );
};

export default CityCard;
