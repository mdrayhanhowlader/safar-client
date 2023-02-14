import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
// import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../../contexts/AuthProvider';
// import tourism from '../../assets/tourism.jpg'

const RegisterGuide = () => {
    const { createUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();


    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email, password)
        createUser(email, password)
            .then(guide => {
                console.log(guide)
                // const guideData = {
                //     email: guide.user.email,
                //     role: 'guide'
                // }

                // fetch("https://safar-server-nasar06.vercel.app/users/guide", {
                //     method: "POST",
                //     headers: {
                //         "content-type": "application/json",
                //     },
                //     body: JSON.stringify(guideData),
                // })
                //     .then((res) => res.json())
                //     .then((data) => {
                //         console.log("after storage", data);
                //         // if(data.acknowledged){
                //         //   console.log('guide save to database')
                //         // }
                //     })
                //     .catch(err => console.log("API didn't hit", err));
                // // saveguide(guideData)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (

        <section className=" flex flex-wrap  lg:h-full lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Become a Guide</h1>
                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                        eaque error neque ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

               <div className='lg:p-0 p-6'>
               <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                className="w-full rounded-lg border border-gray-300 p-3 pr-12 text-sm shadow-sm"
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
                                className="w-full rounded-lg border border-gray-300 p-3 pr-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                            {errors.password && "Password is required and must be at least 6 characters."}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            Already have an account?
                            <Link to="#"> <u className='text-blue-500'>SignIn</u></Link>
                        </p>

                        <button
                            type="submit"
                            className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white"
                        >
                            Next
                        </button>
                    </div>

                </form>
               </div>
            </div>

            <div className=" h-64 w-full lg:block hidden sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt="Welcome"
                    src='https://t3.ftcdn.net/jpg/03/23/86/96/360_F_323869611_T9hK8xy1XfO9LTYKAqq0EZHbOxEmGUFa.jpg'
                    className=" inset-0 h-full w-full object-cover"
                />
            </div>
        </section>

    );
};

export default RegisterGuide;