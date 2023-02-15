import React from "react";
import { useLoaderData } from "react-router-dom";
import SearchNav from "../../SearchPage/SearchProducts/SearchNav";
import Card from "./../Properties/Card";
import DestinationCard from "./DestinationCard";

const DestinationPage = () => {
  const destination = useLoaderData([]);
  console.log(destination);
  return (
    <div>
      <div
        className="w-11/12 mx-auto h-48 md:h-96 mt-16"
        style={{
          backgroundImage: `url(${"https://media.istockphoto.com/id/1197074328/photo/summer-holidays-zanzibar-island.jpg?s=612x612&w=0&k=20&c=gR8fcx4wVz65JQIWjDgkxfLNnSeFoUwnSlAkAfc5J2c="})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "center",
          backgroundPositionX: "center",
        }}
      ></div>
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
