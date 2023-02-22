import React from "react";
import useTitle from "../../../hooks/useTitle";
import Navbar from "../../Shared/Navbar/Navbar";
import RegisterForm from "./RegisterForm";
import RegisterWelcome from "./RegisterWelcome";

const Register = () => {
  useTitle("Register");
  return (
    <div>
      <Navbar/>
      <div className="w-4/5 mx-auto my-20 shadow-3xl border border-blue-50 shadow-blue-500 grid md:grid-cols-3">
        <div
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1380241157/photo/travel-and-adventure-and-departure-concept-in-summer-surrounded-by-luggage-camera-sunglasses.jpg?b=1&s=170667a&w=0&k=20&c=jYmQ46RM280Qj0M59OrFZicWrfZYC1y4J0VVWwW_30A=")',
            backgroundSize: "cover",
          }}
          className="bg-white h-full text-white mb-6"
        >
          <RegisterWelcome></RegisterWelcome>
        </div>
        <div className="md:col-span-2">
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </div>
  );
};

export default Register;
