import React from "react";

const SearchBanner = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-52 w-full">
      <div className="pt-16 pl-16">
        <h2 className="text-3xl text-slate-50 font-bold">
          Explore (District Name)
        </h2>
        <p className="text-md text-slate-200 font-semibold pt-4">
          120 Hotels available in this area
        </p>
      </div>
    </div>
  );
};

export default SearchBanner;
