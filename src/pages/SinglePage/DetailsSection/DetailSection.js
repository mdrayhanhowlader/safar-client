import React, { useContext, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { FaAngleDown, FaMinus, FaPlus, FaRegStar } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { SearchContext } from "../../../contexts/SearchProvider";
import LeftSide from "./LeftSide";
import ReviewSection from "./ReviewSection";
import Rooms from "./Rooms/Rooms";

const DetailSection = ({ hotelData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [day, setDay] = useState(0);
  const [allData, setAllData] = useState();
  const [roomPrice, setRoomPrice] = useState(0);
  const [roomName, setRoomName] = useState();

  const locations = useLocation();

  const { hotel_id, regular_price, hotel_name } = hotelData;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { days, options } = useContext(SearchContext);

  const [isHandleClick, setIsHandleClick] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [count, setCount] = useState(1);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const serviceFee = 100;

  const handleOpenCalender = () => {
    setIsHandleClick(true);
  };
  const handleCloseCalender = () => {
    // setIsHandleClick(false);
    const Sdays = dayDifference(date[0]?.endDate, date[0].startDate);
    setDay(Sdays);
  };

  const handleClickOpen = () => {
    setIsClick(true);
  };

  const handleClickClose = () => {
    setIsClick(false);
  };

  const countData = [{}];

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  const handleReserve = (getData) => {
    // console.log(getData);
    setAllData(getData);
    setOpenModal(false);
  };

  const rmName = allData?.map((rm) => rm.name);
  const rmNo = allData?.map((rm) => rm.rooms_no);
  const rmBed = allData?.map((rm) => rm.size);
  const totalPrice = allData?.map((dt) => dt.price);

  const sum = totalPrice?.reduce((total, number) => {
    console.log(total);
    console.log(number);
    return total + number;
  }, 0);
  // console.log(sum);

  const handleBook = () => {
    const totalPrice = sum * day * serviceFee;
    const orderInfo = {
      customer_email: user?.email,
      hotel_name,
      hotel_id,
      room_type_name: rmName,
      rooms_no: rmNo,
      bed: rmBed,
      total_price: totalPrice,
      checkIn_date: date[0].startDate,
      checkout_date: date[0].endDate,
    };
    console.log(orderInfo);
    fetch(`https://safar-server-nasar06.vercel.app/orders/add-order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/checkoutPage");
      });
  };

  return (
    <div>
      <div className="md:flex p-4 w-full relative">
        <div className="w-full md:w-3/5 p-8">
          <LeftSide hotelData={hotelData} />
        </div>

        {/* right side / card */}
        <div className="static w-full md:w-2/5 p-8">
          <div
            style={{
              border: "1px solid grey",
              borderRadius: ".5rem",
              padding: "1rem",
            }}
          >
            <div className="flex justify-between">
              <h1>${regular_price}/night</h1>
              <div className="flex">
                <FaRegStar className="mt-1 mx-2" />
                <p>
                  {" "}
                  5.0 - <Link to="/">12 Reviews</Link>
                </p>
              </div>
            </div>
            <div
              style={{
                border: "1px solid grey",
                borderTopLeftRadius: ".5rem",
                borderTopRightRadius: ".5rem",
                padding: ".5rem",
                marginTop: "5vh",
              }}
            >
              <div className="flex justify-around">
                {isHandleClick === true ? (
                  <div
                    onClick={handleCloseCalender}
                    className="flex justify-center items-center hover:bg-slate-100"
                    style={{ borderRadius: "2rem", width: "6rem" }}
                  >
                    <div>
                      <h1>
                        <small>Check-In</small>
                      </h1>
                      {/* <p>01/02/03</p> */}
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={handleOpenCalender}
                    className="flex justify-center items-center hover:bg-slate-100"
                    style={{ borderRadius: "2rem", width: "6rem" }}
                  >
                    <div>
                      <h1>
                        <small>Check-In</small>
                      </h1>
                      {/* <p>01/02/03</p> */}
                    </div>
                  </div>
                )}
                {isHandleClick === true ? (
                  <div
                    onClick={handleCloseCalender}
                    className="flex justify-center items-center hover:bg-slate-100"
                    style={{ borderRadius: "2rem", width: "6rem" }}
                  >
                    <div>
                      <h1>
                        <small>Check-Out</small>
                      </h1>
                      {/* <p>01/02/03</p> */}
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={handleOpenCalender}
                    className="flex justify-center items-center hover:bg-slate-100"
                    style={{ borderRadius: "2rem", width: "6rem" }}
                  >
                    <div>
                      <h1>
                        <small>Check-Out</small>
                      </h1>
                      {/* <p>01/02/03</p> */}
                    </div>
                  </div>
                )}
              </div>
              {
                <div className={isHandleClick === true ? "visible" : "hidden"}>
                  <DateRange
                    className="w-full"
                    editableDateInputs={true}
                    onChange={(item) => {
                      setDate([item.selection])
                      setIsHandleClick(false)
                      handleCloseCalender()
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                  />
                </div>
              }
            </div>

            {
              <div
                className="flex justify-between"
                style={{
                  border: "1px solid grey",
                  borderBottomLeftRadius: ".5rem",
                  borderBottomRightRadius: ".5rem",
                  padding: ".5rem",
                  marginTop: "-.2vh",
                }}
              >
                <div className="mx-2">
                  <h1>
                    <small>GUESTS</small>
                  </h1>
                  <p>{count} guests</p>
                </div>
                {isClick === true ? (
                  <div
                    onClick={handleClickClose}
                    className="flex items-center mx-2"
                  >
                    <FaAngleDown className="h-5 w-5" />
                  </div>
                ) : (
                  <div
                    onClick={handleClickOpen}
                    className="flex items-center mx-2"
                  >
                    <FaAngleDown className="h-5 w-5" />
                  </div>
                )}
              </div>
            }
            <div
              className={isClick === true ? "visible" : "hidden"}
              style={{ width: "100%" }}
            >
              <div>
                <div className="flex justify-between mx-4 my-6">
                  <div>
                    <h1 className="font-bold">Adults</h1>
                    <p>Age 13+</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      <button
                        disabled={count < 1}
                        onClick={() => setCount(count - 1)}
                        className="flex justify-center items-center hover:bg-slate-200"
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          border: "1px solid grey",
                          borderRadius: "5rem",
                        }}
                      >
                        <FaMinus className="h-3 w-3" />
                      </button>
                      <p className="mx-2">{count}</p>
                      <button
                        onClick={() => setCount(count + 1)}
                        className="flex justify-center items-center hover:bg-slate-200"
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          border: "1px solid grey",
                          borderRadius: "5rem",
                        }}
                      >
                        <FaPlus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* button */}
            {/* <div className="mt-4">
              <Link to="/checkoutPage">
                <button className="w-full h-8 bg-green-800 rounded-lg hover:bg-green-700 text-white">
                  Check Availability
                </button>
              </Link>
            </div> */}
            <div className="mt-4">
              <button
                onClick={handleClick}
                className="w-full h-8 bg-green-800 rounded-lg hover:bg-green-700 text-white capitalize"
              >
                reserve your room
              </button>
            </div>
            {/* you won't be charged yet */}
            <div>
              <div className="flex justify-center my-3">
                <h1>You won't be charged yet ?</h1>
              </div>
              <div>
                {allData?.map((info) => (
                  <div className="flex justify-between" key={info.price}>
                    <p>{info.size}</p>
                    <p>
                      ${info.price * day} x {day}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* total price */}

            <div className="flex justify-between mt-6">
              <h1 className="font-bold">Service Fee</h1>

              <p>${serviceFee}</p>
            </div>
            <div className="flex justify-between mt-6">
              <h1 className="font-bold">Total</h1>

              <p>${sum * day + serviceFee}</p>
            </div>
            {/* {getData?.map((item) => (
              <>
                <p>{item.size}</p>
                <p>{item.price}</p>
                <p>{item.sleep}</p>
              </>
            ))} */}
            <div className="mt-4">
              <button
                onClick={handleBook}
                className="w-full h-8 bg-green-800 rounded-lg hover:bg-green-700 text-white capitalize"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* review section & host details*/}
      <div className="p-8">
        <ReviewSection />
      </div>
      {openModal && (
        <Rooms
          state={date}
          setOpenModal={setOpenModal}
          hotel_id={hotel_id}
          hotelData={hotelData}
          // getSize={getSize}
          // setGetSize={setGetSize}
          // getData={getData}
          // setGetData={setGetData}
          handleReserve={handleReserve}
        ></Rooms>
      )}
      {/* <Rooms setOpenModal={setOpenModal} hotel_id={hotel_id}></Rooms> */}
    </div>
  );
};

export default DetailSection;
