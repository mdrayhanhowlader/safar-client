import React, { useState } from "react";
import {
  FaBed,
  FaCalendarTimes,
  FaCheckDouble,
  FaDigitalOcean,
  FaHotjar,
  FaSwimmingPool,
  FaUmbrellaBeach,
  FaWifi,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftSide = ({ hotelData }) => {
  const [readMore, setReadMore] = useState(false);

  const {
    hotel_name,
    description,
    room_type,
    location,
    regular_price,
    images,
    offer_price,
    facilities,
  } = hotelData;

  const offersData = [
    {
      title: "Ocean view",
      icon: <FaDigitalOcean />,
    },
    {
      title: "Beach access – Beachfront",
      icon: <FaUmbrellaBeach />,
      example: "example is example",
    },
    {
      title: "Wifi",
      icon: <FaWifi />,
      example: "example is example",
    },
    {
      title: "Private outdoor pool - infinity, saltwater",
      icon: <FaSwimmingPool />,
      example: "example is example",
    },
    {
      title: "Kitchen",
      icon: <FaHotjar />,
      example: "example is example",
    },
    {
      title: "Wifi",
      icon: <FaWifi />,
      example: "example is example",
    },
    {
      title: "Private outdoor pool - infinity, saltwater",
      icon: <FaSwimmingPool />,
      example: "example is example",
    },
    {
      title: "Kitchen",
      icon: <FaHotjar />,
      example: "example is example",
    },
  ];
  return (
    <>
      <div className="p-2">
        <div
          className="flex justify-between"
          style={{ borderBottom: "1px solid grey" }}
        >
          <div>
            <h1 className="text-2xl font-bold mb-1">{hotel_name}</h1>
            <p>8 guests - {room_type.length} bedrooms - 5 beds - 5 baths</p>
          </div>
          <div className="mb-8">
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
            />
          </div>
        </div>
        <div style={{ borderBottom: "1px solid grey", marginTop: "5vh" }}>
          <div className="flex my-6">
            <FaHotjar className="h-6 w-6 mt-1 mx-2" />
            <div>
              <h1 className="text-xl font-bold">Xabir is a Superhost</h1>
              <p>
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </p>
            </div>
          </div>
          <div className="flex my-6">
            <FaCheckDouble className="h-6 w-6 mt-1 mx-2" />
            <div>
              <h1 className="text-xl font-bold">Great check-in experience</h1>
              <p>
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </p>
            </div>
          </div>
          <div className="flex my-8">
            <FaCalendarTimes className="h-6 w-6 mt-1 mx-2" />
            <div>
              <h1 className="text-xl font-bold">
                Free cancellation for 48 hours.
              </h1>
            </div>
          </div>
        </div>

        <div className="my-6" style={{ borderBottom: "1px solid grey" }}>
          <h1 className="text-3xl font-bold text-green-800">SafarCover</h1>
          <p className="my-3">
            Every booking includes free protection from Host cancellations,
            listing inaccuracies, and other issues like trouble checking in.
          </p>
          <Link to="/">
            <p className="text-green-800 font-bold mb-6">Learn more..</p>
          </Link>
        </div>

        <div style={{ borderBottom: "1px solid grey" }}>
          <h1 className="text-3xl font-bold text-green-800 mb-2">Details</h1>
          <p>{readMore ? description : description?.slice(0, 120)}</p>
          <button
            className="btn text-green-800 font-bold mb-6"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? (
              "show less"
            ) : (
              <>
                <button>read more...</button>
              </>
            )}
          </button>
        </div>

        {/* Where you will sleep & will be map */}
        <div>
          <h1 className="text-xl font-bold my-4">Where you'll Sleep</h1>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 p-4">
            <div style={{ border: "1px solid grey", borderRadius: ".5rem" }}>
              <div className="p-1">
                <FaBed className="h-6 w-6" />
                <h1 className="text-md font-bold">Bedroom 1</h1>
                <div>
                  <p>1 King Bed</p>
                </div>
              </div>
            </div>
            <div style={{ border: "1px solid grey", borderRadius: ".5rem" }}>
              <div className="p-1">
                <FaBed className="h-6 w-6" />
                <h1 className="text-md font-bold">Bedroom 2</h1>

                <div>
                  <p>1 King Bed</p>
                </div>
              </div>
            </div>
            <div style={{ border: "1px solid grey", borderRadius: ".5rem" }}>
              <div className="p-1">
                <div className="flex">
                  <FaBed className="h-6 w-6" />
                  <h1 className="text-md font-bold ml-2">Bedroom 3</h1>
                </div>
                <p>1 King Bed</p>
              </div>
            </div>
          </div>
        </div>

        {/* What this place offers */}
        <div className="my-4">
          <h1 className="text-xl font-bold">What this place offers</h1>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {offersData.map((offers, index) => (
              <div key={index} className="flex my-2">
                <div className="mx-4 mt-1">{offers.icon}</div>
                <p>{offers.title}</p>
              </div>
            ))}
          </div>
          <div
            className="flex justify-center my-4 border border-gray-400 rounded-lg"
            // style={{ border: "1px solid grey", borderRadius: ".5rem", width: "25%" }}
          >
            <h1>
              <Link className="text-green-800 hover:text-green-600 font-semibold my-6">
                Show all amenities
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
