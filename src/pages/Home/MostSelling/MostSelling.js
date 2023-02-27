import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MostSelling = () => {
  const [allHotels, setAllHotels] = useState([]);
  useEffect(() => {
    fetch(
      "https://safar-server-nasar06.vercel.app/destination/get-all-destinations"
    )
      .then((res) => res.json())
      .then((data) => setAllHotels(data?.result));
  }, []);

  console.log(allHotels, "hello bangladesfla;fjadljfaldfjaldsjfaldfjal");
  return (
    <div className="w-11/12 mx-auto my-16">
      <h2 className="text-center py-8 text-3xl font-semibold">
        Top Selling Hotel
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* card */}
        {allHotels.slice(0, 6).map((hotel) => (
          <Link to={`/singlePage/${hotel.hotel_id}`} key={hotel._id}>
            <div className="flex flex-col">
              <img className="w-full h-36" src={hotel.images[1]} alt="" />
              <div className="pt-2">
                <h2>{hotel.hotel_name}</h2>
              </div>
            </div>
          </Link>
        ))}
        {/* <div className="flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="p-2">
            <h2>Laboni Beach</h2>
            <p>Sold: 135</p>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="p-2">
            <h2>Laboni Beach</h2>
            <p>Sold: 135</p>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="p-2">
            <h2>Laboni Beach</h2>
            <p>Sold: 135</p>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="p-2">
            <h2>Laboni Beach</h2>
            <p>Sold: 135</p>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="p-2">
            <h2>Laboni Beach</h2>
            <p>Sold: 135</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MostSelling;
