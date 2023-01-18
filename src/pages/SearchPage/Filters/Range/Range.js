import React from "react";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";

const Range = () => {
  return (
    <div>
      {" "}
      <MultiRangeSlider
        min={1000}
        max={30000}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </div>
  );
};

export default Range;
