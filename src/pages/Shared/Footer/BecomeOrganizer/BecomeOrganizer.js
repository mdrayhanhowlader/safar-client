import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';
import travel from '../../../../assets/travel.gif'

const BecomeOrganizer = () => {
    const { createUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();


    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;

        createUser(email, password)
            .then(organizer => {
                console.log(organizer.user.email)
                const organizerData = {
                    email: organizer.user.email,
                    role: 'organizer'
                }

                fetch("https://safar-server-nasar06.vercel.app/users/organizer", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(organizerData),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("after storage", data);
                        // if(data.acknowledged){
                        //   console.log('organizer save to database')
                        // }
                    })
                    .catch(err => console.log("API didn't hit", err));
                // saveOrganizer(organizerData)
                navigate("/orgform")
            })
            .catch(err => console.log(err))
    }

    return (

        <section className="relative flex flex-wrap bg-blue-50 lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Become an Organizer</h1>
                    <p className="mt-4 text-gray-500">
                        Please signup for your contribution in our services. Provide a valid mail and a strong password.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                className="w-full rounded-lg border border-gray-300 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />
                            {errors.email && "Email is required and must be a valid format."}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                            <input
                                {...register("password", { required: true, minLength: 6 })}
                                type="password"
                                className="w-full rounded-lg border border-gray-300 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                            {errors.password && "Password is required and must be at least 6 characters."}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-blue-500">
                            Already have an account?
                            <Link to="/orglogin" className="font-semibold"> SignIn</Link>
                        </p>

                        <button
                            type="submit"
                            className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Next
                        </button>
                    </div>

                </form>
            </div>

            <div className="relative h-64 w-full sm:h-96 hidden lg:block md:block lg:h-full lg:w-1/2">
                <img
                    alt="Welcome"
                    src={travel}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </section>

    );
};

export default BecomeOrganizer;