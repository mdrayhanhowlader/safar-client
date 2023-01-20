import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const HeaderSearch = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="w-full mx-auto h-16 md:h-52 md:flex md:items-center justify-center bg-blue-900 relative">
      <div className="w-full md:w-3/5 mx-auto h-12 md:h-8 bg-white border-4 border-orange-500 flex justify-between md:justify-around items-center py-6 px-0 absolute top-14 md:top-44">
        <div>
          <input
            type="text"
            placeholder="Where are you going?"
            className="headersearchinput border-none outline-none text-xs md:text-md"
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
          className="headersearchtext text-gray-400 cursor-pointer text-xs md:text-md"
        >
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>

        {/* <div>
          <span>2 adults 2 children 1 room</span>
        </div> */}
        <div>
          <button className="px-2 md:px-4 bg-blue-700 text-white py-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
