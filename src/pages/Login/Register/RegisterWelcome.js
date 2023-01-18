import React from "react";
import { Link } from "react-router-dom";

const RegisterWelcome = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl mt-28">Welcome Back!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          exercitationem!
        </p>
        <div className="mt-4">
          <Link to="/login">
            {" "}
            <button className="bg-transparent rounded-full px-16 py-2  border">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterWelcome;
