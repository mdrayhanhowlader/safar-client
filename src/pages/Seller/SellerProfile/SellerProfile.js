import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const SellerProfile = () => {
  useTitle('Seller Profile');
  const { user } = useContext(AuthContext);
  const [orgInfo, setOrgInfo] = useState('')
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();

  // console.log(user.email)

  const imageHostKey = process.env.REACT_APP_imagePostKey;

  const { data: organizerInfo } = useQuery({
    queryKey: ['organizerInfo', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://safar-server-nasar06.vercel.app/destination/get-hotel-details?email=${user?.email}`);
      const data = await res.json();
      setOrgInfo(data)
      return data;
    }
  })
  // console.log(organizerInfo)

  const handleUpdate = async (data) => {

    const full_name = data.full_name;
    const bank_account = data.bank_account;
    const nid_no = data.nid_no;

    // file send to imgBB
    const photo = data.photo[0];
    // console.log(photo)
    const formData = new FormData();
    formData.append('image', photo);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

    const res = await fetch(url, {
      method: 'POST',
      body: formData
    });
    const img = await res.json();
    const newImage = img.data.url;
    console.log(newImage)

    const organizerProfile = {
      full_name: full_name,
      img: newImage,
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
          // form.reset()
        }
      })
      .catch(err => console.error(err))

  }

  return (
    <section className="px-2 py-6">
      <h3 className="text-2xl">Seller Account</h3>
      <h2 className="text-2xl py-4">Seller Id: 34546564543</h2>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="w-4/6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Full Name:
            </label>
            <input
              {...register("full_name")}
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              placeholder="Full Name"
            />
          </div>
        </div>
        {/* photo */}
        <div className="w-4/6 mt-4">
          <div className="grid grid-cols-5 gap-4">
            <label htmlFor="" className="">Photo</label>
            <input
              {...register("photo")}
              type="file"
              className="w-full border-2 border-slate-300 p-2 rounded-md ml-4 col-span-3"
              placeholder="Enter a photo"
            />
          </div>
        </div>
        <div className="w-4/6 mt-4">
          <div className="grid grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Phone Number:
            </label>
            <input
              {...register("contact")}
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
              {...register("email")}
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
              {...register("bank_account")}
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
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
              {...register("hotel_id")}
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
              {...register("hotel_name")}
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
              {...register("nid_no")}
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
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
      </form>
    </section>
  );
};

export default SellerProfile;
