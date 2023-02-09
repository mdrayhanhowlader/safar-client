// import React, { useContext, useState } from "react";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { format } from "date-fns";
// import SearchBannerImage from "../../../assets/bgImage.png";
// import { FaUser } from "react-icons/fa";
// import  './HeaderSearch.css';
// // import { SearchContext } from "../../../contexts/SearchProvider";
// import { useNavigate } from "react-router-dom";
// import { SearchContext } from "../../../contexts/SearchProvider";

// const HeaderSearch = () => {
//   const [destination, setDestination] = useState("");
//   const [openDate, setOpenDate] = useState(false);
//   const [openOptions, setOpenOptions] = useState(false);
//   const [dates, setDates] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);
//   const [options, setOptions] = useState({
//     adult: 1,
//     children: 0,
//     room: 1,
//   });

//   const MILLISECONDS_PER_DAY= 1000 * 60 * 60* 24;
//     const dayDiff = (date1, date2) => {
//         const timeDiff = Math.abs(date2.getTime() - date1.getTime());
//         const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
//         return diffDays;
//     }
//     const days = dayDiff(dates[0].endDate, dates[0].startDate)

//   const {dispatch} = useContext(SearchContext);
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if(destination){
//       dispatch({ type: "NEW_SEARCH", payload: { destination, days, options } });
//       navigate("/searchpage", {state: {destination, days, options}});
//     }
//     else{
//       navigate('/')
//     }
//   }

//   const handleOption = (name, operation) => {
//     setOptions((prev) => {
//       return {
//         ...prev,
//         [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
//       };
//     });
//   };

//   // search location
//   // const handleSearch = (e) => {
//   //   const location = e.target.value;
//   //   console.log(location, date[0].startDate, date[0].endDate);
//   // };
//   return (
//     <div
//       className="w-full mx-auto h-44 md:h-[250px] md:flex md:items-center justify-center bg-blue-900 relative z-10 mb-24"
//       style={{
//         // backgroundImage: `url(${SearchBannerImage})`,
//         backgroundImage: `url("https://media.istockphoto.com/id/185109771/photo/shopping-street-of-maldives.jpg?b=1&s=170667a&w=0&k=20&c=z_7GZBae0qs323Y85S5CSItDgs6xDmU0ymxP8-8Iji0=")`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPositionY: "center",
//       }}
//     >
//       <div className="text-white lg:pb-28 ">
//         <h2 className="lg:text-7xl font-serif text-center">
//           Explore, travel and love
//         </h2>
//       </div>
//       <div className="w-full md:w-[60%] px-2 mx-auto h- md:h-4 rounded-full bg-white flex justify-between sm:mx-4 md:justify-around items-center lg:py-8 absolute top-14 md:top-52 border shadow border-slate-50">
//         <div>
//           <input
//             name="name"
//             type="text"
//             placeholder="Where are you going?"
//             className="py-2 border-none outline-none text-xs lg:text-lg"
//             onChange={(e) => setDestination(e.target.value)}
//           />
//         </div>
//         <div>
//           {openDate && (
//             <DateRange
//               editableDateInputs={true}
//               onChange={(item) => setDates([item.selection])}
//               moveRangeOnFirstSelection={false}
//               ranges={dates}
//               className="absolute top-16"
//             />
//           )}
//         </div>
//         <span
//           onClick={() => setOpenDate(!openDate)}
//           className=" cursor-pointer text-xs lg:text-lg"
//         >
//           {`${format(dates[0].startDate, "MM/dd/yyyy")} - ${format(
//             dates[0].endDate,
//             "MM/dd/yyyy"
//           )}`}
//         </span>

//         {/* <div className="py-2 flex items-center">
//           <span className="text-[10px] lg:text-lg">2 adults 2 children 1 room</span>
//         </div> */}
//         {/* <div>
//           <button className="px-2 md:px-4 rounded-sm bg-blue-700 text-white py-2">
//             Search
//           </button>
//         </div> */}
//         <div className="headerSearchItem">
//           <span
//             onClick={() => setOpenOptions(!openOptions)}
//             className="headerSearchText"
//           >
//             {options.adult > 1
//               ? `${options.adult} adults · ${options.children} children · ${options.room} room`
//               : `${options.adult} adult · ${options.children} children · ${options.room} room`}
//           </span>
//           {openOptions && (
//             <div className="options mt-4">
//               <div className="optionItem">
//                 <span className="optionText">Adult</span>
//                 <div className="optionCounter">
//                   <button
//                     disabled={options.adult <= 1}
//                     className="optionCounterButton"
//                     onClick={() => handleOption("adult", "d")}
//                   >
//                     -
//                   </button>
//                   <span className="optionCounterNumber">{options.adult}</span>
//                   <button
//                     className="optionCounterButton"
//                     onClick={() => handleOption("adult", "i")}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <input type="submit" onClick={() => handleSearch()} value="Search" className="px-2 md:px-4 rounded-sm bg-blue-700 text-white lg:text-lg py-2"/>
//       </div>
//     </div>
//   );
// };

// export default HeaderSearch;
import React, { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import SearchBannerImage from "../../../assets/bgImage.png";
import { FaUser } from "react-icons/fa";
import  './HeaderSearch.css';
// import { SearchContext } from "../../../contexts/SearchProvider";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../contexts/SearchProvider";

const HeaderSearch = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions ,setOpenOptions] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1, children: 0, room: 1
  })

  const MILLISECONDS_PER_DAY= 1000 * 60 * 60* 24;
    const dayDiff = (date1, date2) => {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }
    const days = dayDiff(dates[0].endDate, dates[0].startDate)

  const {dispatch} = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    if(destination){
      dispatch({ type: "NEW_SEARCH", payload: { destination, days, options } });
      navigate("/searchpage", {state: {destination, days, options}});
    }
    else{
      navigate('/')
    }
  }

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  // search location
  // const handleSearch = (e) => {
  //   const location = e.target.value;
  //   console.log(location, date[0].startDate, date[0].endDate);
  // };
  return (
    <div
      className="w-full mx-auto h-44 md:h-[550px] md:flex md:items-center justify-center bg-blue-900 relative"
      style={{
        backgroundImage: `url(${SearchBannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
    >
      <div className="text-white lg:pb-28 ">
        <h2 className="lg:text-7xl font-serif text-center">
          Explore, travel and love
        </h2>
      </div>
      <div className="w-full md:w-[60%] px-2 mx-auto h-12 md:h-8 bg-white rounded flex justify-between sm:mx-4 md:justify-around items-center lg:py-12 absolute top-14 md:top-80">
        <div>
          <input
          
            name="name"
            type="text"
            placeholder="Where are you going?"
            className="py-2 border-none outline-none text-xs lg:text-lg"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              className="absolute top-16"
            />
          )}
        </div>
        <span
          onClick={() => setOpenDate(!openDate)}
          className=" cursor-pointer text-xs lg:text-lg"
        >
          {`${format(dates[0].startDate, "MM/dd/yyyy")} - ${format(
            dates[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>

        {/* <div className="py-2 flex items-center">
          <span className="text-[10px] lg:text-lg">2 adults 2 children 1 room</span>
        </div> */}
        {/* <div>
          <button className="px-2 md:px-4 rounded-sm bg-blue-700 text-white py-2">
            Search
          </button>
        </div> */}
        <div className="headerSearchItem">
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                {options.adult > 1 ? `${options.adult} adults · ${options.children} children · ${options.room} room` : `${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options mt-4">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <input type="submit" onClick={() => handleSearch()} value="Search" className="px-2 md:px-4 rounded-sm bg-blue-700 text-white lg:text-lg py-2"/>
      </div>
    </div>
  );
};

export default HeaderSearch;
