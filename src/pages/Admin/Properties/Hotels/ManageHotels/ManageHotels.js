import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const ManageHotels = () => {
  const [submenu, setSubmenu] = useState(false);
  const {
    data: hotels,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["organizers"],
    queryFn: async () => {
      const res = await fetch(
        "https://safar-server-nasar06.vercel.app/destination/get-all-destinations"
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(hotels);

  return (
    <section className="m-4">
      <h2 className="text-2xl font-bold">All Hotels </h2>
      {/* table all users  */}
      
    </section>
  );
};

export default ManageHotels;
