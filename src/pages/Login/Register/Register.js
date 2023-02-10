import React from "react";
import RegisterForm from "./RegisterForm";
import RegisterWelcome from "./RegisterWelcome";

const Register = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto my-20 shadow-2xl grid md:grid-cols-3">
        <div className="bg-teal-500 text-slate-50">
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
