import React, { useContext } from "react";
import { FaIndent } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchProvider";
import DetailSection from "./DetailsSection/DetailSection";
import "react-photo-view/dist/react-photo-view.css";
import useTitle from "../../hooks/useTitle";

const SinglePage = () => {
  const data = useContext(SearchContext);
  const hotelData = useLoaderData();

  const {
    hotel_name,
    description,
    location,
    regular_price,
    images,
    offer_price,
    facilities,
  } = hotelData;
  useTitle(hotel_name);

  return (
    <div>
      <div className="grid md:grid-cols-2 w-full p-2 border-2 border-gray-400 rounded-lg">
        <div className="md:mb-0 mb-4">
          <img className="w-full h-full md:px-4" src={images[0]} alt="" />
        </div>
        <div>
          <div className="grid gap-4 grid-cols-2 h-full">
            <div className="">
              {/* photo view start */}
              <PhotoProvider>
                <PhotoView src={images[1]?.url}>
                  <img className="h-full w-full" src={images[1]} alt="" />
                  {/* <img className="h-full w-full" src={images[1]?.url} alt="" />
                  <img className="h-full w-full" src={images[1]?.url} alt="" /> */}
                </PhotoView>
                {/* <PhotoView src={images[2]?.url}>
                  <img className="h-full w-full" src={images[2]?.url} alt="" />
                </PhotoView> */}
              </PhotoProvider>
              {/* photo view end */}
            </div>
            <div className="">
              <img className="h-full w-full" src={images[2]} alt="" />
            </div>

            <div className="">
              <img className="h-full w-full" src={images[3]} alt="" />
            </div>
            <div className="">
              <img className="h-full w-full" src={images[4]} alt="" />
              <div className="flex absolute bg-white hover:bg-slate-200 m-2 mt-[-7vh] w-0.75rem px-2 py-1">
                <FaIndent className="mt-1 mr-1.5" />
                <button>show all photos</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DetailSection hotelData={hotelData} />
      </div>
    </div>
  );
};

export default SinglePage;
