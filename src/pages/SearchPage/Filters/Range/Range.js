import React from "react";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";

const Range = ({priceRangeResource}) => {
  const {setMin, setMax, refetch} = priceRangeResource;
  return (
    <div>
      {" "}
      <MultiRangeSlider
        min={50}
        max={200}
        onChange={({ min, max }) => {
          console.log(`min = ${min}, max = ${max}`)
          setMin(min);
          setMax(max);
          refetch()
        }}
      />
    </div>
  );
};

export default Range;
