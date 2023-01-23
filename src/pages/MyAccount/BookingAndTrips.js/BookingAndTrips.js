import React from "react";

const BookingAndTrips = () => {
  return (
    <section className="container mx-auto border-2 border-blue-100 p-10">
      <div>
        <div className="flex justify-center">
          <img
            src="https://cf.bstatic.com/psb/mytrips/static/media/bookings-empty.f6d1e091536ec081c442de892cdb505e.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold text-3xl text-center py-6">
            Your trips live here
          </h2>
          <p className="text-center text-md py-3">
            This page shows all your bookings. If you made a booking but don't
            see it here, you can import it <br /> using your booking
            confirmation number and PIN.
          </p>
          <p className="text-center text-blue-500 pb-8">Import booking</p>
        </div>
      </div>
    </section>
  );
};

export default BookingAndTrips;
