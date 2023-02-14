import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl mt-28 text-center">Welcome Back!</h2>
        <p className="text-center my-4">
          If you haven't account yet, Please Create an account by click on the
          link below!
        </p>
        <div className="mt-4 text-center">
          <Link to="/register">
            <button className="bg-transparent hover:bg-teal-300 rounded-full px-16 py-2  border mt-6">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
