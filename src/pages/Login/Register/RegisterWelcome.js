import React from "react";
import { Link } from "react-router-dom";

const RegisterWelcome = () => {
  return (
    <div>
      <div>
        <div className="">
          <h2 className="text-3xl mt-32 text-center mb-8">Welcome Back!</h2>
          <p className="text-center font-semibold">
            If you have already an account on our website, Please click on the
            button below for login now!
          </p>
          <div className="mt-4 text-center">
            <Link to="/login">
              <button className="bg-transparent rounded-full px-16 py-2  border hover:bg-teal-500 hover:transition-transform hover:translate-y-">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterWelcome;
