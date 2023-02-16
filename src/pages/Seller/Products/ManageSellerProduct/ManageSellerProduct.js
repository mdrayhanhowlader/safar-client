import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import ActiveSellerProduct from "./ActiveSellerProduct";
import DeactiveSellerProduct from "./DeactiveSellerProduct";
import ManageSellerProductNav from "./ManageSellerProductNav";

const ManageSellerProduct = () => {
  const [isActive, isSetActive] = useState("active");

  const [submenu, setSubmenu] = useState(0);
  const { user } = useContext(AuthContext);

  //handel edit product
  const handleSubMenu = (id) => {
    if (id === submenu) {
      setSubmenu(!submenu);
    }
  };

  const {
    data: organizerRooms,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["organizerRooms"],
    queryFn: async () => {
      const res = await fetch(
        `https://safar-server-nasar06.vercel.app/rooms/get-all-rooms/${user?.uid}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(organizerRooms);

  return (
    <section className="mt-16">
      <h2 className="w-11/12 mx-auto text-xl font-semibold">Rooms</h2>
      <div className="w-11/12 mx-auto mt-8">
        <ManageSellerProductNav
          isActive={isActive}
          isSetActive={isSetActive}
        ></ManageSellerProductNav>
      </div>
      {/* product table  */}
      {isActive === "active" && (
        <div>
          <ActiveSellerProduct
            isLoading={isLoading}
            submenu={submenu}
            setSubmenu={setSubmenu}
            handleSubMenu={handleSubMenu}
            organizerRooms={organizerRooms}
          ></ActiveSellerProduct>
        </div>
      )}

      {isActive === "deactive" && (
        <DeactiveSellerProduct
          submenu={submenu}
          setSubmenu={setSubmenu}
          handleSubMenu={handleSubMenu}
          organizerRooms={organizerRooms}
        ></DeactiveSellerProduct>
      )}
    </section>
  );
};

export default ManageSellerProduct;
