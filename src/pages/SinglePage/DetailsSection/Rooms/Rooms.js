import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import { SearchContext } from "../../../../contexts/SearchProvider";
import "./Rooms.css";

const Rooms = ({ setOpenModal, hotel_id, state }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { dates } = useContext(SearchContext);
  const [getSize, setGetSize] = useState(false);
  const [getData, setGetData] = useState([]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(
        `https://safar-server-nasar06.vercel.app/rooms/get-all-rooms/${hotel_id}`,
        {}
      );
      const data = await res.json();
      return data;
    },
  });

  const handleSelect = (size) => {
    const rPacks = [size];

    if (!getSize) {
      setGetSize(true);
      setGetData([...getData, rPacks]);
      console.log(rPacks);
      setGetSize(false);
    }
  };

  console.log(getData);

  const handleReserve = () => {};

  return (
    <div className=" w-[100vw] h-[100vh] bg-[#0000006b] fixed flex top-0 left-0 items-center justify-center">
      <div className="relative bg-white p-5 rounded-lg">
        <ImCross
          //   icon={faCircleXmark}
          className="absolute top-0 right-0 cursor-pointer m-4"
          onClick={() => setOpenModal(false)}
        />
        <span className="font-bold text-2xl">Select your rooms:</span>
        {data?.map((item) => (
          <div className="flex items-center gap-14 p-5" key={item._id}>
            <div className="rItemInfo">
              <div className="font-semibold text-xl">
                <b>{item.name}</b>
              </div>
              <div className="rDesc">{}</div>
              <div className="rMax">{/* Max people: <b>2</b> */}</div>
              <div className="font-semibold">Price: ${item.price}</div>
            </div>
            <div className="flex flex-wrap gap-1 text-[8px] text-gray-600">
              {item?.bed?.map((singleBed) => (
                <div className="flex flex-row gap-3">
                  <label className="text-sm font-bold">{singleBed.size}</label>
                  <input
                    type="checkbox"
                    value={singleBed._id}
                    onClick={() => handleSelect(singleBed.size)}
                    // disabled={!isAvailable(singleBed)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div>
          {state.map((item, index) => (
            <div key={index}>
              Start date: {item.startDate.toString().slice(0, 15)} <br />
              End date: {item.endDate.toString().slice(0, 15)}
            </div>
          ))}
        </div>
        <button className="rButton" onClick={() => handleReserve}>
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Rooms;
