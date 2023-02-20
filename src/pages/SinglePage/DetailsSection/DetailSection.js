import React, { useContext, useState } from "react";
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

  const locations = useLocation();

  const {
    hotel_name,
    description,
    location,
    hotel_id,
    regular_price,
    images,
    offer_price,
    facilities,
  } = hotelData;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { days, options } = useContext(SearchContext);
  console.log(typeof days);

  const [isHandleClick, setIsHandleClick] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [count, setCount] = useState(1);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const serviceFee = 100;

  const handleOpenCalender = () => {
    setIsHandleClick(true);
  };
  const handleCloseCalender = () => {
    setIsHandleClick(false);
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

  console.log(state);

  return (
    <div>
      <div className="md:flex p-4 w-full relative">
        <div
          className="w-full md:w-3/5 p-8"
          // style={{ width: "60%", padding: "2rem" }}
        >
          <LeftSide hotelData={hotelData} />
        </div>

        {/* right side / card */}
        <div
          className="static w-full md:w-2/5 p-8"
          // style={{ width: "40%", padding: "2rem" }}
        >
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
                    onChange={(item) => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
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
              <div className="flex justify-between my-2">
                <h1 className="text-green-800">{days} Nights</h1>
                <p>${regular_price * days}</p>
              </div>
              <div className="flex justify-between my-2">
                <h1 className="text-green-800">Service fee</h1>
                <p>${serviceFee}</p>
              </div>
            </div>

            {/* total price */}

            <div className="flex justify-between mt-6">
              <h1 className="font-bold">Total before taxes</h1>

              <p>${regular_price * days + serviceFee}</p>
            </div>
          </div>
        </div>
      </div>

      {/* review section & host details*/}
      <div
        className="p-8"
        // style={{ padding: "2rem" }}
      >
        <ReviewSection />
      </div>
      {openModal && (
        <Rooms
          state={state}
          setOpenModal={setOpenModal}
          hotel_id={hotel_id}
        ></Rooms>
      )}
      {/* <Rooms setOpenModal={setOpenModal} hotel_id={hotel_id}></Rooms> */}
    </div>
  );
};

export default DetailSection;
