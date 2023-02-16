import React from "react";
import { useLoaderData } from "react-router-dom";
import SearchNav from "../../SearchPage/SearchProducts/SearchNav";
import Card from "./../Properties/Card";
import DestinationCard from "./DestinationCard";
import Dbanner from "../../../assets/dbanner.png";
import Navbar from "../../Shared/Navbar/Navbar";

const DestinationPage = () => {
  const destination = useLoaderData([]);
  console.log(destination);
  return (
    <div>
      <Navbar/>
      <div
        className="w-11/12 mx-auto h-48 md:h-76 mt-16 flex justify-center items-center"
        style={{
          backgroundImage: `url(${"https://images.pexels.com/photos/235721/pexels-photo-235721.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "center",
          backgroundPositionX: "center",
        }}
      >
        {/* <h2 className="text-5xl font-semibold text-orange-600 py-2">
          The goal is to die with <br /> memories not dreams.
        </h2> */}
      </div>
      <div className="w-4/5 mx-auto mt-12 grid gap-4 md:grid-cols-1">
        {destination.map((data) => (
          // <Card key={data._id} data={data}></Card>
          <DestinationCard key={data._id} data={data}></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
