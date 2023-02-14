import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const SellerProfile = () => {
  const { user } = useContext(AuthContext);
  const [orgInfo, setOrgInfo] = useState('')
  // console.log(user.email)

  const { data: organizerInfo } = useQuery({
    queryKey: ['organizerInfo'],
    queryFn: async () => {
      const res = await fetch(`https://safar-server-nasar06.vercel.app/destination/get-hotel-details?email=${user?.email}`);
      const data = await res.json();
      setOrgInfo(data)
      return data;
    }
  })
  // console.log(orgInfo)

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const full_name = form.full_name.value;
    const bank_account = form.bank_account.value;
    const nid_no = form.nid_no.value;

    const organizerProfile = {
      full_name: full_name,
      contact: orgInfo?.contact,
      email: user?.email,
      bank_account: bank_account,
      hotel_id: orgInfo?.hotel_id,
      hotel_name: orgInfo?.hotel_name,
      nid_no: nid_no

    }

    fetch(`https://safar-server-nasar06.vercel.app/users/organizer-update?email=${user?.email}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(organizerProfile)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if (result.acknowledged === true) {
          form.reset()
        }
      })
      .catch(err => console.error(err))

  }


  return (
    <section className="px-2 py-6">
      <h3 className="text-2xl">Seller Account</h3>
      <h2 className="text-2xl py-4">Seller Id: 34546564543</h2>
      {/* <h1>{organizerInfo.length}</h1> */}
      <form onSubmit={handleSubmit} action="">
        <div className="w-4/6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Full Name:
            </label>
            <input
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              name="full_name"
              placeholder="Full Name"
            />
          </div>
        </div>

        <div className="w-4/6 mt-4">
          <div className="grid grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Phone Number:
            </label>
            <input
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              readOnly
              disabled
              defaultValue={organizerInfo?.contact}
            />
          </div>
        </div>

        <div className="w-4/6 mt-4">
          <div className="grid grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Email:
            </label>
            <input
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              readOnly
              disabled
              defaultValue={user?.email}
            />
          </div>
        </div>

        <div className="w-4/6 mt-4">
          <div className="grid grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Bank Account:
            </label>
            <input
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              name="bank_account"
              placeholder="Bank Account"
            />
          </div>
        </div>

        <div className="w-4/6 mt-4">
          <div className="grid grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Hotel Id:
            </label>
            <input
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              readOnly
              disabled
              defaultValue={organizerInfo?.hotel_id}
            />
          </div>
        </div>
        <div className="w-4/6 mt-4">
          <div className="grid grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Hotel Name:
            </label>
            <input
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              readOnly
              disabled
              defaultValue={organizerInfo?.hotel_name}
            />
          </div>
        </div>
        <div className="w-4/6 mt-4">
          <div className="grid grid-cols-5 gap-4">
            <label htmlFor="" className="">
              NID:
            </label>
            <input
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              name="nid_no"
              placeholder="NID"
              defaultValue={organizerInfo?.nid}
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-block rounded-lg bg-sky-500 px-5 py-3 mt-4 text-sm font-medium text-white"
        >
          Save
        </button>

        {/* hotel images 
        <div className="mt-8">
          <h2 className="text-2xl my-4">Hotel Images</h2>
          <div className="mr-4">
            <div className="grid grid-cols-6 gap-4">
              {
                organizerInfo?.images?.map(image =>
                  <div>
                    <img className="w-full h-full" src={image?.url} alt="" />
                  </div>
                )
              }
            </div>
          </div>
        </div> */}

      </form>
    </section>
  );
};

export default SellerProfile;
