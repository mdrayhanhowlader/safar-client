import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./../Properties/Card";

const DestinationPage = () => {
  const destination = useLoaderData([]);
  console.log(destination);
  return (
    <div className="w-3/5 mx-auto grid gap-4 md:grid-cols-2">
      {destination.map((data) => (
        <Card key={data._id} data={data}></Card>
      ))}
    </div>
  );
};

export default DestinationPage;
