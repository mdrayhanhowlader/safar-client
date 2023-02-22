import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import regGuide from "../../assets/safar logo/guide-gif.gif";
import Navbar from "../Shared/Navbar/Navbar";
import useTitle from "../../hooks/useTitle";

const RegisterGuide = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imagePostKey;

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    // const photo = data.photo;
    const phone = data.phone;
    const address = data.address;
    const location = data.location;
    const password = data.password;

    // file send to imgBB
    const photo = data.photo[0];
    const formData = new FormData();
    formData.append("image", photo);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const img = await res.json();
    const newImage = img.data.url;

    setRegisterError("");

    createUser(email, password)
      .then((guide) => {
        const guideData = {
          name,
          photo: newImage,
          phone,
          address,
          location,
          email: guide.user.email,
          role: "guide",
        };

        fetch("https://safar-server-nasar06.vercel.app/users/guide", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(guideData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.email === guideData.email) {
              toast.success("Guide info added");
              reset();
              navigate("");
            }
          })
          .catch((err) => console.log("API didn't hit", err));
      })
      .catch((err) => {
        console.log(err);
        setRegisterError(err.message);
      });
  };
  useTitle("Guide-Reg");

  return (
    <div>
      <Navbar />
      <section className=" flex flex-wrap  lg:h-full lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl text-blue-500 font-semibold sm:text-3xl">
              Become a Guide
            </h1>
            {/* <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                        eaque error neque ipsa culpa autem, at itaque nostrum!
                    </p> */}
          </div>

          <div className="lg:p-0 p-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto mt-8 mb-0 max-w-md space-y-4"
            >
              {/* name */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <div>
                  <input
                    {...register("name", {
                      required: "Name is required and must be a valid format.",
                    })}
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-2 pr-12 text-sm shadow-sm"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-600">{errors.name?.message}</p>
                  )}
                </div>
              </div>

              {/* email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div>
                  <input
                    {...register("email", {
                      required: "Email is required and must be a valid format.",
                    })}
                    type="email"
                    className="w-full rounded-lg border border-gray-300 p-2 pr-12 text-sm shadow-sm"
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email?.message}</p>
                  )}
                </div>
              </div>

              {/* photo */}
              <div>
                <label htmlFor="photo" className="sr-only">
                  Photo
                </label>

                <div>
                  <input
                    {...register("photo", {
                      required: "photo is required and must be a valid format.",
                    })}
                    type="file"
                    className="w-full rounded-lg border border-gray-300 p-2 pr-12 text-sm shadow-sm"
                    placeholder="Enter a photo"
                  />
                  {errors.photo && (
                    <p className="text-red-600">{errors.photo?.message}</p>
                  )}
                </div>
              </div>

              {/* phone number */}
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>

                <div>
                  <input
                    {...register("phone", {
                      required: "Phone is required and must be a valid format.",
                    })}
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-2 pr-12 text-sm shadow-sm"
                    placeholder="Enter your phone phone"
                  />
                  {errors.phone && (
                    <p className="text-red-600">{errors.phone?.message}</p>
                  )}
                </div>
              </div>

              {/* address */}
              <div>
                <label htmlFor="address" className="sr-only">
                  address
                </label>

                <div>
                  <input
                    {...register("address", {
                      required:
                        "Address is required and must be a valid format.",
                    })}
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-2 pr-12 text-sm shadow-sm"
                    placeholder="Enter your address"
                  />
                  {errors.address && (
                    <p className="text-red-600">{errors.address?.message}</p>
                  )}
                </div>
              </div>

              {/* work location */}
              <div>
                <label htmlFor="location" className="sr-only">
                  location
                </label>

                <div>
                  <input
                    {...register("location", {
                      required:
                        "location is required and must be a valid format.",
                    })}
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-2 pr-12 text-sm shadow-sm"
                    placeholder="Enter your work location"
                  />
                  {errors.location && (
                    <p className="text-red-600">{errors.location?.message}</p>
                  )}
                </div>
              </div>

              {/* password */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <input
                    {...register("password", {
                      required:
                        "Password is required and must be at least 6 characters.",
                      minLength: 6,
                    })}
                    type="password"
                    className="w-full rounded-lg border border-gray-300 p-2 pr-12 text-sm shadow-sm"
                    placeholder="Enter password"
                  />
                  {errors.password && (
                    <p className="text-red-600">{errors.password?.message}</p>
                  )}
                </div>
              </div>

              {/* show firebase error */}
              {registerError && <p className="text-red-600">{registerError}</p>}

              {/* button & already */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Already have an account?
                  <Link
                    to="/loginguide"
                    className="text-blue-500 hover:text-blue-400 font-semibold"
                  >
                    {" "}
                    Login
                  </Link>
                </p>

                <button
                  type="submit"
                  className="ml-3 inline-block rounded-lg bg-blue-500 hover:bg-blue-400 px-5 py-2 text-sm font-medium text-white"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className=" w-full lg:block hidden sm:h-96 lg:h-full lg:w-1/3">
          <img
            alt="Welcome"
            src={regGuide}
            className=" inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default RegisterGuide;
