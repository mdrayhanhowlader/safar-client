import React from "react";
import { useLoaderData } from "react-router-dom";
import DestinationCard from "./DestinationCard";
import Navbar from "../../Shared/Navbar/Navbar";
import img from "../../../assets/fullbg.png";

const DestinationPage = () => {
  const destination = useLoaderData([]);
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="bg-cover bg-no-repeat pb-8 "
    >
      <div>
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
