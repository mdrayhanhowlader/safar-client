import React from "react";
import FiltersCollections from "./FiltersCollections";
import FiltersDuration from "./FiltersDuration";
import FiltersEventTime from "./FiltersEventTime";

const Filters = () => {
  return <div className="w-1/4 m-3 px-3 ">
    <div className="flex justify-between my-4">
    <h2 className="font-bold">Filters </h2>
    <h2 className="text-sm text-gray-500">Reset </h2>
    </div>
    
    <FiltersCollections></FiltersCollections>
    <FiltersEventTime></FiltersEventTime>
    <FiltersDuration></FiltersDuration>
  </div>;
};

export default Filters;
