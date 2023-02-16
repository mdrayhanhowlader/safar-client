import React, { useContext } from "react";
import { useState } from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import ProfileUpdateForm from "./ProfileUpdateForm";
import userProfileImage from '../../../assets/profile.png'
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Profile = () => {
  const { user } = useContext(AuthContext)
  const [editProfile, setEditProfile] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const editProfileImage = async (e) => {
    const editImage = e.target.files[0];
    const formData = new FormData();
    formData.append("image", editImage);
    const imageHostKey = process.env.REACT_APP_imagePostKey;
    const imageUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    const response = await fetch(imageUrl, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setProfilePicture(data.data.url);
    setLoading(false);
  };


  // get user info 
  const { data: userData, refetch } = useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const res = await fetch(`https://safar-server-nasar06.vercel.app/users/get-single-user?email=${user?.email}`);
      const data = await res.json();
      // console.log(userData)
      setUserInfo(data)
      return data;
    }
  })
useTitle('Profile')

  return (
    <section className="container mx-auto p-8">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="shadow-md border-2 border-sky-100 rounded-lg">
          {/* Profile picture  */}
          <div className="flex justify-center items-center flex-col">
            {userData?.profile_img ?
              <img
                className="w-32 h-32 border rounded-full mt-8"
                src={userData?.profile_img}
                alt=""
              />
              :
              <img
                alt=""
                className="w-32 h-32 border rounded-full mt-8"
                src={userProfileImage}
              />
            }
            <label className="underline cursor-pointer text-blue-600 hover:text-blue-800" htmlFor="upload">
              Update Image
            </label>
            <input
              className="hidden"
              type="file"
              name=""
              id="upload"
              accept="image/*"
              onChange={editProfileImage}
            />
          </div>

          <div className="p-6">
            <HiOutlineClipboardCheck className="text-3xl"></HiOutlineClipboardCheck>
            <h2 className="text-xl font-bold my-4">Identity verification</h2>
            <p>
              Show others you’re really you with the identity verification
              badge.
            </p>
            <button className="py-2 my-4 px-8 rounded-md hover:bg-slate-50 border-2 border-slate-100 font-bold">
              Get the badge
            </button>

            <hr className="my-6" />
            <h2 className="text-3xl text-blue-500">{user?.email ? 'User confirmed' : 'User not verified'}</h2>

            <div className="flex items-center">
              <FaCheck></FaCheck>
              <h4 className="text-md py-4 ml-2">{user?.email ? user?.email : ''}</h4>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <h2 className="text-2xl mb-4">{userData?.name ? 'Welcome.!  ' + userData?.name : ''}</h2>
          {/* <p className="py-2">Joined in 2023</p> */}


          {/* Edit Profile  */}
          {
            userInfo ?
              <div className="">
                {/* edit profile button */}
                <button
                  className="text-blue-500 hover:text-blue-600 font-semibold "
                  onClick={() => setEditProfile(!editProfile)}
                >
                  Edit Profile
                </button>
                {/* profile update form  */}
                <div className={`${editProfile ? "visible" : "hidden"}`}>
                  <ProfileUpdateForm userInfo={userInfo} editProfile={editProfile} setEditProfile={setEditProfile} profilePicture={profilePicture} refetch={refetch}></ProfileUpdateForm>
                </div>
              </div>
              :
              <>
                <h1>You didn't update your profile, please provide your information! </h1>
                {/* edit profile button */}
                <button
                  className="text-blue-500 hover:text-blue-600 font-semibold "
                  onClick={() => setEditProfile(!editProfile)}
                >
                  Edit Profile
                </button>
                <div className={`${editProfile ? "visible" : "hidden"}`}>
                  <ProfileUpdateForm userInfo={userInfo} editProfile={editProfile} setEditProfile={setEditProfile} profilePicture={profilePicture} refetch={refetch}></ProfileUpdateForm>
                </div>
              </>
          }
          {/* rating */}
          <div className="flex items-center">
            <FaStar className="text-2xl text-blue-500"></FaStar>
            <p className="text-xl font-semibold ml-2">0 reviews</p>
          </div>
          <hr className="my-6" />
          {/* Review by You  */}
          <div>
            <a className="underline text-blue-400 hover:text-blue-600" href="/">
              Reviews by you
            </a>
            <hr className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
