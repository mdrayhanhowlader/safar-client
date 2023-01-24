import React from "react";

import EmailNotify from "./EmailNotify";
import OtherTravelers from "./OtherTravelers";
import PaymentDetails from "./PaymentDetails";
import PersonalDetails from "./PersonalDetails";
import Preferences from "./Preferences";
import Security from "./Security";

const ManageAccount = () => {
  return (
    <section className="container mx-auto">
      {/* section title  */}
      <div className="py-8">
        <h2 className="text-4xl font-bold">Account settings</h2>
        <p className="text-xl mt-3">Manage your Booking.com experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <PersonalDetails></PersonalDetails>
        <Preferences></Preferences>
        <Security></Security>
        <PaymentDetails></PaymentDetails>
        <EmailNotify></EmailNotify>
        <OtherTravelers></OtherTravelers>
      </div>
    </section>
  );
};

export default ManageAccount;
