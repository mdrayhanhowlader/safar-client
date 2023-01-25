import React from "react";

const TopRated = () => {
  return (
    <section className="container mx-auto my-8">
      {/* section title  */}
      <div className="py-8">
        <h2 className="text-4xl font-bold text-center">TOP RATED PROPERTIES</h2>
        <p className="text-xl font-semi-bold text-center mt-3">
          top rated features sub title
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {/* columns 1 */}
        <div className="bg-slate-300 rounded-md  cursor-pointer">
          <div>
            <img
              src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
              alt=""
            />
          </div>
          {/* <div className="pb-2">
            <h2 className="font-bold ml-2 mt-4">cox bazar</h2>
            <p className="ml-2 mt-2 pb-2">140 properties</p>
          </div> */}
        </div>
        {/* columns 2 */}
        <div className="bg-slate-300  rounded-md">
          <div>
            <img
              src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
              alt=""
            />
          </div>
          {/* <div className="pb-2">
            <h2 className="font-bold ml-2 mt-4">cox bazar</h2>
            <p className="ml-2 mt-2 pb-2">140 properties</p>
          </div> */}
        </div>
        {/* columns 3 */}
        <div className="bg-slate-300 rounded-md ">
          <div>
            <img
              src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
              alt=""
            />
          </div>
          {/* <div className="pb-2">
            <h2 className="font-bold ml-2 mt-4">cox bazar</h2>
            <p className="ml-2 mt-2 pb-2">140 properties</p>
          </div> */}
        </div>

        {/* columns 4 */}
        <div className="bg-slate-300 rounded-md ">
          <div>
            <img
              src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
              alt=""
            />
          </div>
          {/* <div className="pb-2">
            <h2 className="font-bold ml-2 mt-4">cox bazar</h2>
            <p className="ml-2 mt-2 pb-2">140 properties</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TopRated;
