import React from "react";

const TopRated = () => {
  return (
    <section className="container mx-auto">
      {/* section title  */}
      <div className="py-8">
        <h2 className="text-4xl font-bold text-center">TOP RATED PROPERTIES</h2>
        <p className="text-xl font-semi-bold text-center mt-3">
          top rated features sub title
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* columns 1 */}
        <div className="bg-slate-300 lg:h-[332px] md:h-[332px] rounded-md hover:animate-bounce cursor-pointer">
          <div>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold ml-2 mt-4">cox bazar</h2>
            <p className="ml-2 mt-2 pb-2">140 properties</p>
          </div>
        </div>
        {/* columns 2 */}
        <div className="bg-slate-300 h-[332px] rounded-md lg:h-[332px] md:h-[332px]">
          <div>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold ml-2 mt-4">cox bazar</h2>
            <p className="ml-2 mt-2 pb-2">140 properties</p>
          </div>
        </div>
        {/* columns 3 */}
        <div className="bg-slate-300 h-[332px] rounded-md lg:h-[332px] md:h-[332px]">
          <div>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold ml-2 mt-4">cox bazar</h2>
            <p className="ml-2 mt-2 pb-2">140 properties</p>
          </div>
        </div>

        {/* columns 4 */}
        <div className="bg-slate-300 h-[332px] rounded-md lg:h-[332px] md:h-[332px]">
          <div>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold ml-2 mt-4">cox bazar</h2>
            <p className="ml-2 mt-2 pb-2">140 properties</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
