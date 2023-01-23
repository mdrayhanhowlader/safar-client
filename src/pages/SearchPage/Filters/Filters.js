import React from "react";
import FiltersCollections from "./FiltersCollections";
import FiltersDuration from "./FiltersDuration";
import FiltersEventTime from "./FiltersEventTime";
import FiltersPriceRange from "./FiltersPriceRange";

const Filters = () => {
  return (
    <div className="lg:w-1/4 m-3 px-3 ">
      <div className="flex justify-between my-4">
        <h2 className="font-bold">Filters </h2>
        <h2 className="text-sm text-gray-500">Reset </h2>
      </div>

      <FiltersCollections></FiltersCollections>
      <FiltersPriceRange></FiltersPriceRange>
      <FiltersEventTime></FiltersEventTime>
      <FiltersDuration></FiltersDuration>
    </div>
  );
};

export default Filters;
