import React from "react";

const data = [
  {
    name: "amar mon valo nei",
    description: "thik moto pora lekah korle mon valo hobe",
    data: "12/32/43",
    image:
      "https://static.theprint.in/wp-content/uploads/2022/10/Hotel.jpg?compress=true&quality=80&w=376&dpr=2.6",
  },
  {
    name: "amar mon valo ",
    description: "thik moto pora lekah korle mon valo hobe",
    data: "12/32/43",
    image:
      "https://r1imghtlak.mmtcdn.com/e4d8c9c446cb11ebbd560242ac110003.jpeg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg",
  },
  {
    name: "amar mon kharap",
    description: "thik moto pora lekah korle mon valo hobe",
    data: "12/32/43",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjbTc_xo7Rknri6oKrsey7pkFgkgK4gIDy4EH_3gTiu21A2smpG0Dhm1TtKPX764zytE&usqp=CAU",
  },
  {
    name: "rayhan howlader ki bole",
    description: "thik moto pora lekah korle mon valo hobe",
    data: "12/32/43",
    image:
      "https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg",
  },
  {
    name: "nasar vai ki bole",
    description: "thik moto pora lekah korle mon valo hobe",
    data: "12/32/43",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLc_HbmjVK05jag5CMW-D-p_h6ZidtVD76WQ&usqp=CAU",
  },
];

const Grid = () => {
  return (
    <section className="mt-8 container mx-auto my-12 md:pl-3">
      <div className="grid md:grid-cols-3  gap-4">
        <div className="bg-yellow-500 w-[415px] h-[200px] rounded-md">
          <div className="grid md:grid-rows-2 gap-3">
            {data.map((d, i) => (
              <>
                {i === 0 && (
                  <div className="bg-rose-400 w-[410px] h-[200px]">
                    <h2 className="text-3xl font-bold p-4">{d.name}</h2>
                  </div>
                )}

                <div className="w-[410px] h-[200px] grid md:grid-cols-2 gap-4">
                  {i === 1 && (
                    <div className="bg-rose-800 w-[200px] h-[200px]">
                      <h2 className="text-white">{d.name}</h2>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="bg-rose-800 w-[200px] h-[200px]">
                       <h2 className="text-white">{d.name}</h2>
                    </div>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="bg-slate-300 h-[410px]"></div>

        <div className="grid md:grid-rows-2 gap-4">
          <div className="bg-blue-300 w-[400px] h-[195px]"></div>
          <div className="bg-blue-300 w-[400px] h-[195px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Grid;