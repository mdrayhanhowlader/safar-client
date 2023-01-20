import React, { useState } from "react";

const SearchNav = () => {
  const [isHigh, isSetHigh] = useState(false);
  const handleLowToHigh = () => {
    isSetHigh(true);
  };
  const handleHighToLow = () => {
    isSetHigh(false);
  };
  return (
    <div>
      <div className="flex justify-center items-center font-normal">
        <p>PRICE</p>
        {/* price range start */}
        <div className="flex justify-center items-center">
          {/* low to high */}
          <div>
            <input
              className="invisible"
              type="radio"
              id="low"
              name="fav_language"
              value="low"
            />
            <label
              className={
                isHigh === true
                  ? "text-red-600"
                  : "text-slate-600 cursor-pointer"
              }
              onClick={handleLowToHigh}
              for="low"
            >
              Low to High
            </label>
          </div>

          <span className="ml-2 text-slate-300">|</span>
          {/* high to low */}
          <div>
            <input
              className="invisible"
              type="radio"
              id="high"
              name="fav_language"
              value="high"
            />
            <label
              className={
                isHigh === false
                  ? "text-red-600"
                  : "text-slate-600 cursor-pointer"
              }
              onClick={handleHighToLow}
              for="high"
            >
              High to Low
            </label>
          </div>
        </div>
        {/* price range end */}
        <div className="flex justify-center items-center pr-2">
          <h4 className="px-4 font-medium">SORT BY</h4>
          <select className="text-red-500">
            <option value="option1">Relevance</option>
            <option value="option2">Newest</option>
            <option value="option3">Popularity</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
