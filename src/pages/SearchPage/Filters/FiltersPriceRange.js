import React from "react";
import Range from "./Range/Range";

const FiltersPriceRange = () => {
  return (
    <div>
      <div>
        <hr />
        <h2 className="text-base my-1 font-semibold">Price Range</h2>
        <div>
          <Range></Range>
        </div>
        <div className="my-2">
          <input
            name="deals"
            type="radio"
            className="checkbox mx-2 accent-sky-200 "
          />
          <span className="text-sm text-gray-500">Value Packs</span>
          <br />
          <input
            name="deals"
            type="radio"
            className="checkbox mx-2 accent-sky-200 "
          />
          <span className="text-sm text-gray-500">Budget Packs</span>
          <br />
          <input
            name="deals"
            type="radio"
            className="checkbox mx-2 accent-sky-200 "
          />
          <span className="text-sm text-gray-500">Exclusive Deals</span>
          <br />
          <input
            name="deals"
            type="radio"
            className="checkbox mx-2 accent-sky-200 "
          />
          <span className="text-sm text-gray-500">Premium Grabs</span> <br />
          <input
            name="deals"
            type="radio"
            className="checkbox mx-2 accent-sky-200 "
          />
          <span className="text-sm text-gray-500">Luxurious</span> <br />
        </div>
      </div>
    </div>
  );
};

export default FiltersPriceRange;
