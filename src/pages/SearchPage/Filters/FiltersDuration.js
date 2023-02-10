import React from "react";

const FiltersDuration = () => {
  return <div>
  <hr />
  <h2 className="text-base my-1 font-semibold">Duration</h2>
  <input type="checkbox" className="checkbox mx-2" /><span className="text-sm text-gray-500">less than 1 hour</span><br />
  <input type="checkbox" className="checkbox mx-2" /><span className="text-sm text-gray-500">1-2 hours</span><br />
  <input type="checkbox" className="checkbox mx-2" /><span className="text-sm text-gray-500">2-4 hours</span><br />
  <input type="checkbox" className="checkbox mx-2" /><span className="text-sm text-gray-500">more than 4 hours</span>
</div>;
};

export default FiltersDuration;
