import React from "react";

const FiltersEventTime = () => {
  return <div className="my-2">
  <hr />
  <h2 className="text-base my-1 font-semibold">Event Time</h2>
  <input type="checkbox" className="checkbox mx-2" /><span className="text-sm text-gray-500">Morning</span><br />
  <span className="text-xs mx-7 mb-1 text-gray-500">8:00 am to 12:00 pm</span> <br />
  <input type="checkbox" className="checkbox mx-2" /><span className="text-sm text-gray-500">Afternoon</span><br />
  <span className="text-xs mx-7 mb-1 text-gray-500">12:00 am to 4:00 pm</span> <br />
  <input type="checkbox" className="checkbox mx-2" /><span className="text-sm text-gray-500">Evening</span><br />
  <span className="text-xs mx-7 mb-1 text-gray-500">4:00 pm to 7:00 pm</span> <br />
  <input type="checkbox" className="checkbox mx-2" /><span className="text-sm text-gray-500">Night</span> <br />
  <span className="text-xs mx-7 mb-1 text-gray-500">7:00 pm onwards</span>
</div>;
};

export default FiltersEventTime;
