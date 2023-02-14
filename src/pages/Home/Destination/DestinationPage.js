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
