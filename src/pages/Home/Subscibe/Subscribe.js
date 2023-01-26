import React from "react";

const Subscribe = () => {
  return (
    <section
      className="my-12 m-4 md:mx-0 lg:mx-0 bg-sky-300"
      // style={{background: '#00224F'}}
    >
      <div className="max-w-3xl px-6 py-16 mx-auto text-center">
        <h1
          className="text-3xl font-semibold text-rose-400 dark:text-gray-100"
          style={{ color: "#e7e7e7" }}
        >
          Save time, save money!
        </h1>
        <p className="max-w-md mx-auto mt-5 dark:text-gray-400 text-white">
          Sign up and we'll send the best deals to you
        </p>

        <div
          // className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2"
          className="w-4/5 mx-auto pt-6"
        >
          <form className="md:grid grid-cols-3 gap-1">
            {/* <input
              type="email"
              name="email"
              className="p-2 md:p-4 text-gray-700 bg-white border rounded-md sm:mx-2  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Your Email Address"
            />

            <input
              type="submit"
              value="Subscribe"
              className=" uppercase px-6 py-4 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 cursor-pointer mt-4 md:mt-0 lg:mt-0"
            /> */}

            <input
              className="w-full col-span-2 p-2 rounded"
              type="email"
              name=""
              id=""
              placeholder="Enter Email"
            />
            <input
              className="w-full col-span-1 bg-teal-800 rounded text-slate-50"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
