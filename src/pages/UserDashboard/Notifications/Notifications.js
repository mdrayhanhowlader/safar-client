import React from "react";
import { FaTimes } from "react-icons/fa";

const Notifications = () => {
  return (
    <section className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mt-8">Notifications</h2>
      <hr className="my-8" />
      <div className="py-4">
        <div className="border-4 border-sky-50 p-4 rounded-md lg:w-[800px]">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold py-2">Notification title</h3>
            <FaTimes className="text-2xl cursor-pointer"></FaTimes>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            eius architecto fuga mollitia ab, amet nam provident. Aperiam, sequi
            laudantium?
          </p>
        </div>
      </div>

      <div>
        <div className="border-4 border-sky-50 p-4 rounded-md lg:w-[800px]">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold py-2">Notification title</h3>
            <FaTimes className="text-2xl cursor-pointer"></FaTimes>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            eius architecto fuga mollitia ab, amet nam provident. Aperiam, sequi
            laudantium?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
