import React from "react";
import LoginForm from "./LoginForm";
import Welcome from "./Welcome";

const Login = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto my-20 shadow-2xl grid md:grid-cols-3">
      <div className="md:col-span-2">
          <LoginForm/>
        </div>
        <div
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1380241157/photo/travel-and-adventure-and-departure-concept-in-summer-surrounded-by-luggage-camera-sunglasses.jpg?b=1&s=170667a&w=0&k=20&c=jYmQ46RM280Qj0M59OrFZicWrfZYC1y4J0VVWwW_30A=")',
            backgroundSize: "cover",
          }}
          className="bg-teal-500 p-4 text-slate-50"
        >
          <Welcome/>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
