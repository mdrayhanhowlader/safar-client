import React from "react";
import { FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleProductCard = ({hotelData, info}) => {
  const {hotel_name,regular_price, offer_price, images, location, hotel_id} = hotelData;
  console.log('hotelData-------' ,hotelData);
  
  
  return (
    <div className="grid lg:grid-cols-3 border">
      {/*image section */}
      <div>
        <img
          className="h-full p-1 rounded-lg"
          src={images[0].url}
          alt=""
        />
      </div>

      {/* details/middle section */}
      <div className="m-2">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">{hotel_name}</h1>
          <FaRegHeart className="h-5 w-5 mt-1 mr-4" />
        </div>
        <div>
          <div className="flex">
            <h1> stars *</h1>
            <h1>Hotel</h1>
          </div>
        </div>
        <div className="mx-4 mt-4">
          <div className="flex justify-between ">
            <div className="flex">
              <FaMapMarkerAlt className="h-4 w-4 mt-1 mx-2" />
              <h1 className="">2.5 miles to {location.city}</h1>
            </div>
          </div>
        </div>
        <div className=" mx-4 mt-4 my-2">
          <div className="flex justify-between">
            <div className="flex">
              <button className="border rounded-full mx-1 w-12">8.7</button>
              <h1 className="">2.5 miles to {location.city}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* right side section */}
      <div>
        <div style={{ height: "100%", padding: ".4rem" }}>
          <div
            className="flex justify-between p-4"
            style={{
              height: "60%",
              backgroundColor: "#dcfce7",
              borderRadius: ".5rem",
            }}
          >
            <div className="">
              <div>
                <h1>
                  <small>Renaissance</small>
                </h1>
                <h1 className="text-xl font-bold text-green-800 mt-4">
                  <small>${regular_price}</small>
                </h1>
              </div>
            </div>
            <div>
              <Link to={`/singlePage/${hotel_id}`}>
                <button className="bg-green-700 text-white rounded-lg h-8 w-28 mt-6">
                  View Details
                </button>
              </Link>
            </div>
          </div>

          <div
            className="flex"
            style={{ height: "40%", width: "100%", padding: ".1rem" }}
          >
            <div
              style={{
                width: "40%",
                backgroundColor: "#dcfce7",
                borderRadius: ".5rem",
                marginRight: ".2rem",
              }}
            >
              <div className="p-2">
                <small>Renaissance</small>
                <h1 className="font-bold text-green-800">${offer_price}</h1>
              </div>
            </div>
            <div
              style={{
                width: "60%",
                backgroundColor: "#dcfce7",
                borderRadius: ".5rem",
                padding: ".3rem",
              }}
            >
              <div className="flex justify-center items-center">
                <div>
                  <small>Lowest Price:</small>
                  <small>${offer_price} Renaissance </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;