import React from "react";

const Divisions = () => {
  return (
    <section className="mt-8 container mx-auto my-12 md:pl-3 px-4">
      <div className="grid md:grid-cols-3  gap-4">
        <div className="w-[410px] rounded-md">
          <div className="grid md:grid-rows-2 gap-3">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="w-[410px]">
                <img
                  className="h-full w-full"
                  src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
                  alt=""
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/20 group-hover:to-black/30"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Dhaka
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolore adipisci placeat.
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See More
                </button>
              </div>
            </div>

            {/* // inner grid of cols */}
            <div className="w-[410px]  grid grid-cols-2 gap-4">
              {/* cols-1  */}
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="w-[410px]">
                  <img
                    className="h-full w-full"
                    src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
                    alt=""
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/20 group-hover:to-black/30"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    Dhaka
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis dolore adipisci placeat.
                  </p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </div>
              {/* cols-2  */}
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="w-[410px]">
                  <img
                    className="h-full w-full"
                    src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
                    alt=""
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/20 group-hover:to-black/30"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    Dhaka
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis dolore adipisci placeat.
                  </p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* cols-2 of main grid or first grid */}
        <div className="">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-full w-[410px]">
              <img
                className="h-[565px] w-full"
                src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/20 group-hover:to-black/30"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white pb-12">
                Dhaka
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
        </div>
        {/* cols-3 of main grid or first grid  */}
        <div className="grid md:grid-rows-2 gap-4">
          {/* // inner cols of last grid  */}

          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="w-[410px]">
              <img
                className="h-full w-full"
                src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/20 group-hover:to-black/30"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Dhaka
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>

          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="w-[410px]">
              <img
                className="h-full w-full"
                src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/20 group-hover:to-black/30"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Dhaka
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divisions;
