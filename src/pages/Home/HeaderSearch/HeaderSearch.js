import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import SearchBannerImage from "../../../assets/bgImage.png";
import { Link } from "react-router-dom";
const HeaderSearch = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // search location
  const handleSearch = (e) => {
    const location = e.target.value;
    console.log(location, date[0].startDate, date[0].endDate);
  };
  return (
    <div
      className="w-full mx-auto h-44 md:h-[550px] md:flex md:items-center justify-center bg-blue-900 relative"
      style={{
        backgroundImage: `url(${SearchBannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
    >
      <div className="text-white lg:pb-28 ">
        <h2 className="lg:text-7xl font-serif text-center">
          Explore, travel and love
        </h2>
      </div>
      <div className="w-full md:w-3/5 px-2 mx-auto h-12 md:h-8 bg-white rounded-lg flex justify-between sm:mx-4 md:justify-around items-center lg:py-12 absolute top-14 md:top-80">
        <div>
          <input
            onClick={handleSearch}
            type="text"
            placeholder="Where are you going?"
            className="headersearchinput border-none outline-none text-xs lg:text-lg"
          />
        </div>
        <div>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="absolute top-14"
            />
          )}
        </div>
        <span
          onClick={() => setOpenDate(!openDate)}
          className="headersearchtext  cursor-pointer text-xs lg:text-lg"
        >
          {`${format(date[0].startDate, "MM/dd/yyyy")} - ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>

        <div className="py-2 flex items-center">
          <span className="text-[10px] lg:text-lg">
            2 adults 2 children 1 room
          </span>
        </div>
        <div>
          <Link onClick={handleSearch} to="/">
            <button className="px-2 md:px-4 rounded-sm bg-blue-700 text-white py-2">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
