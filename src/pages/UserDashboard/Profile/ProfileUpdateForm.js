import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const ProfileUpdateForm = ({editProfile, setEditProfile }) => {
  const {user} = useContext(AuthContext)
  
  const {register, handleSubmit, reset, formState: { errors },} = useForm();


    // get user 
  useEffect(() => {
    fetch(`https://safar-server-nasar06.vercel.app/users/get-single-user?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }, [user?.email])

  const handleProfileUpdate = data => {
      console.log(data)
      const editProfileData = {
        about: data.about,
        // language: data.language,
        location: data.location,
        work: data.work

      }
      fetch(`https://safar-server-nasar06.vercel.app/users/update-user?email=${user?.email}`, {
        method: "POST",
        headers: {
         'content-type': 'application/json',
         
        },
        body: JSON.stringify(editProfileData)
      })
      .then(res => res.json())
      .then(data => {
        toast.success('user updated')
      })
      console.log(editProfile)
      reset()
  }

  return (
    <>
      <>
        <form onSubmit={handleSubmit(handleProfileUpdate)} action="">
          <div className="py-4">
            <label htmlFor="">About</label>
            <textarea
              className="mt-2 w-full border-2 border-slate-200 rounded-md"
              name=""
              id=""
              rows="4"
              {...register("about")}
            ></textarea>
          </div>
          <div className="py-8">
            <label htmlFor="">Location</label>
            <input
              className="mt-2 w-full border-2 border-slate-200 rounded-md py-2"
              placeholder="Your Location"
              type="text"
              name=""
              id=""
              {...register("location")}
            />
          </div>
          <div className="py-4">
            <p>Languages speak</p>
            {/* <a className="underline" href="/">
              Add more
            </a> */}
            <input
              className="mt-2 w-full border-2 border-slate-200 rounded-md py-2"
              placeholder="Languages speak"
              type="text"
              name=""
              id=""
              {...register("language")}
            />
          </div>
          <div>
            <label htmlFor="">Work</label>
            <input
              className="mt-2 w-full border-2 border-slate-200 rounded-md py-2"
              type="text"
              defaultValue="web developer"
              readOnly
              name=""
              id=""
              {...register("work")}
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <button onClick={() => setEditProfile(!editProfile)} className={`underline ${editProfile ? "visible" : "hidden"}`}>cancel</button>
            </div>
            <div>
              <input
                className="py-2 px-6 rounded-md bg-black text-white cursor-pointer"
                type="submit"
                value="Save"
              />
            </div>
          </div>
        </form>
      </>
    </>
  );
};

export default ProfileUpdateForm;
