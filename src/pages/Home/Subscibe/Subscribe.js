import React from "react";

const Subscribe = () => {
  return (
    <section className="my-12 m-4 md:mx-0 lg:mx-0" style={{background: '#00224F'}}>
      <div className="max-w-3xl px-6 py-16 mx-auto text-center">
        <h1 className="text-3xl font-semibold text-rose-400 dark:text-gray-100" style={{color: '#e7e7e7'}}>
        Save time, save money!
        </h1>
        <p className="max-w-md mx-auto mt-5 dark:text-gray-400 text-white">
        Sign up and we'll send the best deals to you
        </p>

        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
          <form>
            <input
              type="email"
              name="email"
              className="px-12 py-3 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Your Email Address"
            />

            <input
              type="submit"
              value="Subscribe"
              className=" uppercase px-6 py-4 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 cursor-pointer mt-4 md:mt-0 lg:mt-0"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
