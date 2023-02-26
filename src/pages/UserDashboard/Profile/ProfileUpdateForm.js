// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const ProfileUpdateForm = ({
  editProfile,
  setEditProfile,
  profilePicture,
  userInfo,
  refetch,
}) => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(user);
  //navigate from checkout
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname;
  console.log(location);

  const handleProfileUpdate = (data) => {
    const editProfileData = {
      name: data.name,
      about: data.about,
      location: data.location,
      language: data.language,
      work: data.work,
      profile_img: profilePicture,
    };

    fetch(
      `https://safar-server-nasar06.vercel.app/users/update-user?email=${user?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(editProfileData),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("user updated");
        const userData = {
          displayName: data.name,
          photoURL: data.profilePicture,
        };
        updateUserProfile(userData);
        refetch();
        navigate(from, { replace: true });
      });
  };

  const { data: profileInfo } = useQuery({
    queryKey: ["get-single-user"],
    queryFn: async () => {
      const res = await fetch(
        `https://safar-server-nasar06.vercel.app/users/get-single-user?${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(profileInfo);
  return (
    <>
      <>
        <form onSubmit={handleSubmit(handleProfileUpdate)} action="">
          <div>
            <label htmlFor="">
              <small className="font-semibold">Full Name</small>
            </label>
            <input
              className="w-full border-2 border-slate-200 rounded-md py-2"
              type="text"
              defaultValue={user?.displayName ? user?.displayName : ""}
              name="name"
              id=""
              {...register("name")}
            />
          </div>
          <div className="py-4">
            <label htmlFor="">
              <small className="font-semibold">About</small>
            </label>
            <textarea
              className="w-full border-2 border-slate-200 rounded-md"
              name="about"
              defaultValue={userInfo?.about ? userInfo?.about : ""}
              rows="4"
              {...register("about")}
            ></textarea>
          </div>
          <div className="py-8">
            <label htmlFor="">
              <small className="font-semibold">Location</small>
            </label>
            <input
              className="w-full border-2 border-slate-200 rounded-md py-2"
              placeholder="Your Location"
              type="text"
              name="location"
              defaultValue={userInfo?.location ? userInfo?.location : ""}
              id=""
              {...register("location")}
            />
          </div>
          <div className="py-4">
            <p>
              <small className="font-semibold">Languages speak</small>
            </p>
            {/* <a className="underline" href="/">
              Add more
            </a> */}
            <input
              className="w-full border-2 border-slate-200 rounded-md py-2"
              placeholder="Languages speak"
              type="text"
              name="language"
              defaultValue={userInfo?.language ? userInfo.language : ""}
              id=""
              {...register("language")}
            />
          </div>
          <div>
            <label htmlFor="">
              <small className="font-semibold">Work</small>
            </label>
            <input
              className="w-full border-2 border-slate-200 rounded-md py-2"
              type="text"
              defaultValue={userInfo?.work ? userInfo?.work : ""}
              name="work"
              id=""
              {...register("work")}
            />
          </div>
          <div>
            <label htmlFor="">
              <small className="font-semibold">Work</small>
            </label>
            <input
              className="w-full border-2 border-slate-200 rounded-md py-2"
              type="text"
              defaultValue={userInfo?.work ? userInfo?.work : ""}
              name="work"
              id=""
              {...register("work")}
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <button
                onClick={() => setEditProfile(!editProfile)}
                className={`underline ${editProfile ? "visible" : "hidden"}`}
              >
                cancel
              </button>
            </div>
            <div>
              <input
                className="py-2 px-6 rounded-md bg-blue-500 text-white cursor-pointer"
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
