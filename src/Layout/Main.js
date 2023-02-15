
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import img from "../assets/safar logo/1.png";

const Main = () => {
  return (
    <div>
      {/* <div style={{ backgroundImage: `url(${img})` }} className=' bg-top bg-cover '>
      <Navbar/>
      </div> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;