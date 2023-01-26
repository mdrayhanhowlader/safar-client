import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { BsSuitHeartFill } from "react-icons/bs";

const Card = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const dotSlide = slides.slice(0, 3);

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [changeColor, setChangeColor] = useState(false)
  const [like, setLike] = useState(true);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    // setChangeColor(true)
  };

  const handleLike = () => {
    setLike(true);
  };
  const handleDislike = () => {
    setLike(false);
  };

  return (
    <div className="w-full mx-auto bg-white border-2 border-sky-50 rounded-lg relative group">
      {/* card slider */}
      <div>
        <div
          className="w-full h-56 mx-auto bg-center bg-cover duration-500 rounded-t-lg "
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        {/* heart icon */}
        {!like === true ? (
          <div
            onClick={handleLike}
            className="absolute top-3 right-3 text-2xl text-red-500 cursor-pointer outline-1 outline-white"
          >
            <BsSuitHeartFill />
          </div>
        ) : (
          <div
            onClick={handleDislike}
            className="absolute top-3 right-3 text-2xl text-white cursor-pointer"
          >
            <BsSuitHeartFill />
          </div>
        )}
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[35%]  translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-black/200 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[35%]  translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-black/200 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        {/* dot filled */}
        <div className="flex top-48 left-0 right-0 justify-center absolute">
          {/* {slides.length && slides.length < 3 ? (
            slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={"text-2xl cursor-pointer text-white py-2"}
              >
                <RxDotFilled />
              </div>
            ))
          ) : (
            <>
              <div
                onClick={() => goToSlide(currentIndex - 1)}
                className={"text-2xl cursor-pointer text-white py-2"}
              >
                <RxDotFilled />
              </div>
              <div
                onClick={() => goToSlide(currentIndex + 1)}
                className={"text-2xl cursor-pointer text-white py-2"}
              >
                <RxDotFilled />
              </div>
            </>
          )} */}
          {dotSlide.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={
                slideIndex === currentIndex
                  ? "text-2xl cursor-pointer text-slate-700 rounded-full mx-1"
                  : "text-2xl cursor-pointer text-white rounded-full mx-1"
              }
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      {/* card body */}
      <div className="p-2 font-semibold">
        {/* title and rating */}
        <div className="flex justify-between items-center">
          {/* title */}
          <h4 className="text-md text-slate-800">Pattaya city thiland</h4>
          {/* rating */}
          <div className="flex justify-around items-center">
            <span>
              <AiFillStar />
            </span>
            <span className="ml-1 text-md text-slate-800">4.86</span>
          </div>
        </div>
        {/* body price */}
        <div className="text-start flex justify-start flex-col">
          <h6 className="mt-1 text-md text-slate-500">Marina View</h6>
          <h6 className="mt-1 text-md text-slate-500">Feb 1-6</h6>
          <div>
            <h6 className="text-md text-slate-800 mt-1">
              $<span>61</span> night
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
