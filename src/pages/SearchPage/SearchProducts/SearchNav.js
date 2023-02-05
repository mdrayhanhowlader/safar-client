import React, { useState } from "react";

const SearchNav = () => {
  const [isHigh, setIsHigh] = useState(false);
  const handleLowToHigh = () => {
    setIsHigh(true);
  };
  const handleHighToLow = () => {
    setIsHigh(false);
  };
  return (
    <div>
      <div className="md:flex justify-center items-center font-normal">
        {/* price range start */}
        <div className="flex justify-center items-center">
          <p>PRICE</p>
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
                  ? "text-red-900"
                  : "text-slate-600 cursor-pointer"
              }
              onClick={handleLowToHigh}
              htmlFor="low"
            >
              Low to High
            </label>
          </div>

          <span className="ml-2 text-slate-600">|</span>
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
                  ? "text-red-900"
                  : "text-slate-600 cursor-pointer"
              }
              onClick={handleHighToLow}
              htmlFor="high"
            >
              High to Low
            </label>
          </div>
        </div>
        {/* price range end */}
        <div className="flex justify-center items-center mt-2 md:mt-0 pr-2">
          <h4 className="px-4 font-medium">SORT BY</h4>
          <select className="text-slate-600">
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
