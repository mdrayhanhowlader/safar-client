import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/guide-reg_adobe_express.svg'
import { AuthContext } from '../../contexts/AuthProvider';
import Navbar from '../Shared/Navbar/Navbar';

const LoginGuide = () => {
    const { emailSignIn } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();


    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email, password)

        setLoginError('');

        emailSignIn(email, password)
            .then(guide => {
                console.log(guide);
                reset();
                toast.success('logged in successfully..!')
                navigate("/")
            })
            .catch(err => {
                console.error(err);
                setLoginError(err?.message);
            })
       
    }

    return (

       <div>
        <Navbar/>
         <section className="flex flex-wrap lg:items-center ">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="">
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                className="w-full rounded-lg border border-gray-300 p-2 pr-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />
                            {errors.email && "Email is required and must be a valid format."}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="">
                            <input
                                {...register("password", { required: true, minLength: 6 })}
                                type="password"
                                className="w-full rounded-lg border border-gray-300 p-2 pr-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                            {errors.password && "Password is required and must be at least 6 characters."}
                        </div>
                    </div>

                    {/* show firebase error */}
                    {loginError && <p className="text-red-600">{loginError}</p>}

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            Haven't an account?
                            <Link to="/registerguide" className='text-blue-500 hover:text-blue-400 font-semibold'> Register</Link>
                        </p>

                        <button
                            type="submit"
                            className="ml-3 inline-block rounded-lg bg-blue-500 hover:bg-blue-400 px-5 py-2 text-sm font-medium text-white"
                        >
                            LogIn
                        </button>
                    </div>
                    
                </form>
            </div>

            <div className="h-64 w-full lg:block hidden sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt="Welcome"
                    src={loginImage}
                    className=" inset-0 w-full object-cover"
                />
            </div>
        </section>
       </div>

    );
};

export default LoginGuide;