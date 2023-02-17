import React from "react";
import { useLoaderData } from "react-router-dom";
import SearchNav from "../../SearchPage/SearchProducts/SearchNav";
import Card from "./../Properties/Card";
import DestinationCard from "./DestinationCard";
import destinationbackground from "../../../assets/destinationbackground.png";
import Navbar from "../../Shared/Navbar/Navbar";

const DestinationPage = () => {
  const destination = useLoaderData([]);
  return (
    <div>
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${destinationbackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "center",
          // backgroundPositionX: "center",
        }}
      >
        <Navbar />

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
