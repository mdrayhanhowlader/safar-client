import React from 'react';
import { useForm } from 'react-hook-form';

const OrganizerForm = () => {

    const imageHostKey = process.env.REACT_APP_imagePostKey;

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        const proPicture = data?.image[0];
        const formData = new FormData();
        formData.append('image', proPicture);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData?.success) {
                    console.log(imgData.data.url)
                    const organizer = {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        mobile: data.mobile,
                        nid: data.nid,
                        address: data.address,
                        country: data.country,
                        city: data.city,
                        zipCode: data.zipCode,
                        hotelName: data.hotelName,
                        location: data.location,
                    }
                }
            })
            .catch(e => {
                console.error(e.message);
            })

        // const firstName = data.firstName;
        // const lastName = data.lastName;
        // const mobile = data.mobile;
        // const nid = data.nid;
        // const address = data.address;
        // const country = data.country;
        // const city = data.city;
        // const zipCode = data.zipCode;
        // const hotelName = data.hotelName;
        // const location = data.location;

        // console.log(firstName, lastName, mobile, nid, address, hotelName, country, city, zipCode, location)
    }
    return (
        <section>
            <h1 className="sr-only">Checkout</h1>

            <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
                <div className="p-12 md:py-24">
                    <img className='w-full h-full' src='https://3.imimg.com/data3/GX/KK/MY-9358851/foreign-tours-travel-500x500.png' alt='' />
                </div>

                <div className="py-12 bg-white md:py-24">
                    <div className="max-w-lg px-4 mx-auto lg:px-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-6 gap-4">
                            <div className="col-span-3">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-xs font-medium text-gray-700"
                                >
                                    First Name
                                </label>

                                <input
                                    {...register("firstName", { required: true })}
                                    type="text"
                                    id="FirstName"
                                    className="h-full w-full my-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>

                            <div className="col-span-3">
                                <label
                                    htmlFor="LastName"
                                    className="block text-xs font-medium text-gray-700"
                                >
                                    Last Name
                                </label>

                                <input
                                    {...register("lastName", { required: true })}
                                    type="text"
                                    id="LastName"
                                    className="h-full w-full my-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 my-4">
                                <label htmlFor="Profile" className="block text-xs font-medium text-gray-700">
                                    Profile Picture
                                </label>

                                <input
                                    {...register("image", {
                                        required: "Photo is required"
                                    })}
                                    type="file"
                                    id="Profile Picture"
                                    className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                                {errors.profilePicture && <p className='text-red-600'>{errors.profilePicture?.message}</p>}
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="Mobile" className="block text-xs font-medium text-gray-700">
                                    Mobile Number
                                </label>

                                <input
                                    {...register("mobile", { required: true })}
                                    type="text"
                                    id="Mobile"
                                    className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 my-4">
                                <label htmlFor="NID" className="block text-xs font-medium text-gray-700">
                                    NID
                                </label>

                                <input
                                    {...register("nid", { required: true })}
                                    type="text"
                                    id="NID"
                                    className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 my-4">
                                <label htmlFor="Address" className="block text-xs font-medium text-gray-700">
                                    Address
                                </label>

                                <input
                                    {...register("address", { required: true })}
                                    type="text"
                                    id="Address"
                                    className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 my-4">
                                <label htmlFor="Country" className="block text-xs font-medium text-gray-700">
                                    Country
                                </label>

                                <input
                                    {...register("country", { required: true })}
                                    type="text"
                                    id="Country"
                                    className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>
                            <div className="col-span-3 my-4">
                                <label htmlFor="City" className="block text-xs font-medium text-gray-700">
                                    City
                                </label>

                                <input
                                    {...register("city", { required: true })}
                                    type="text"
                                    id="City"
                                    className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>
                            <div className="col-span-3 my-4">
                                <label htmlFor="ZipCode" className="block text-xs font-medium text-gray-700">
                                    Zip Code
                                </label>

                                <input
                                    {...register("zipCode", { required: true })}
                                    type="text"
                                    id="ZipCode"
                                    className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="Hotel Name" className="block text-xs font-medium text-gray-700">
                                    Hotel Name
                                </label>

                                <input
                                    {...register("hotelName", { required: true })}
                                    type="text"
                                    id="Hotel Name"
                                    className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>

                            {/* <fieldset className="col-span-6 my-2">
                                <div className="mt-1 bg-white rounded-md shadow-sm">
                                    <div className="flex"> */}
                            <div className="col-span-3 my-4">
                                <label htmlFor="Hotel Image" className="block text-xs font-medium text-gray-700">
                                    Hotel Image
                                </label>

                                <input
                                    {...register("hImage", { required: true })}
                                    type="file"
                                    id="Hotel Image"
                                    className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>

                            <div className="col-span-3 my-4">
                                <label htmlFor="Location" className="block text-xs font-medium text-gray-700">
                                    Hotel Location
                                </label>

                                <input
                                    {...register("location", { required: true })}
                                    type="text"
                                    id="Location"
                                    className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>
                            {/* </div>
                                </div>
                            </fieldset> */}
                            <div className="col-span-6">
                                <button
                                    className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrganizerForm;