import React from "react";
import LoginForm from "./LoginForm";
import Welcome from "./Welcome";

const Login = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto my-20 shadow-2xl grid md:grid-cols-3">
        <div className="bg-teal-500 p-4 text-slate-50">
          <Welcome></Welcome>
        </div>
        <div className="md:col-span-2">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
