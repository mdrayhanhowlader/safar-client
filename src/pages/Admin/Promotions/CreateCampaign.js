import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaImage } from "react-icons/fa";

const CreateCampaign = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isHandleClick, setIsHandleClick] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [day, setDay] = useState(0);


    const imageHostKey = process.env.REACT_APP_imagePostKey;


    const handleOpenCalender = () => {
        setIsHandleClick(true);
    };
    const handleCloseCalender = () => {


    };

    const handleClickOpen = () => {
        setIsClick(true);
    };

    const handleClickClose = () => {
        setIsClick(false);
    };


    const onCreateSubmit = async (data) => {


        // file send to imgBB
        const photo = data.campaign_image[0];
        // console.log(photo)
        const formData = new FormData();
        formData.append('image', photo);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        const res = await fetch(url, {
            method: 'POST',
            body: formData
        });
        const img = await res.json();
        const campaignImage = img.data.url;

        const campaignData = {
            campaign_title: data.campaign_title,
            campaign_name: data.campaign_name,
            campaign_img: campaignImage,
            description: data.description,

        }
        console.log(campaignData);

        fetch('', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(campaignData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
            .catch(err => console.error(err))
    }

    return (
        <section class="bg-gray-100">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form onSubmit={handleSubmit(onCreateSubmit)} class="space-y-4">

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="sr-only" htmlFor="campaign_title">Campaign Title</label>
                                <input
                                    {...register("campaign_title", { required: true })}
                                    class="w-full outline-slate-200 rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Campaign Title"
                                    type="text"
                                    id="campaign_title"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-2" htmlFor="campaign_image">
                                    <FaImage className='text-3xl text-blue-500' /><span className='text-slate-400'>Select Campaign Image</span>
                                </label>
                                <input
                                    {...register("campaign_image", { required: true })}
                                    className="w-full outline-slate-200 hidden rounded-lg border-gray-200 p-3 text-sm"
                                    type="file"
                                    accept="image/*"
                                    id="campaign_image"
                                />
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="sr-only" for="campaign_name">Campaign Name</label>
                                <input
                                    {...register("campaign_name", { required: true })}
                                    class="w-full outline-slate-200 rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Campaign Name"
                                    type="text"
                                    id="campaign_name"
                                />
                            </div>

                            {/* Campaign Date */}
                            <div>
                                <div className="flex justify-around">
                                    {isHandleClick === true ? (
                                        <div
                                            onClick={handleCloseCalender}
                                            className="flex justify-center items-center hover:bg-slate-100"
                                            style={{ borderRadius: "2rem", width: "6rem" }}
                                        >
                                            <div>
                                                <h1>
                                                    <small>Check-In</small>
                                                </h1>
                                                {/* <p>01/02/03</p> */}
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            onClick={handleOpenCalender}
                                            className="flex justify-center items-center hover:bg-slate-100"
                                            style={{ borderRadius: "2rem", width: "6rem" }}
                                        >
                                            <div>
                                                <h1>
                                                    <small>Check-In</small>
                                                </h1>
                                                {/* <p>01/02/03</p> */}
                                            </div>
                                        </div>
                                    )}
                                    {isHandleClick === true ? (
                                        <div
                                            onClick={handleCloseCalender}
                                            className="flex justify-center items-center hover:bg-slate-100"
                                            style={{ borderRadius: "2rem", width: "6rem" }}
                                        >
                                            <div>
                                                <h1>
                                                    <small>Check-Out</small>
                                                </h1>
                                                {/* <p>01/02/03</p> */}
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            onClick={handleOpenCalender}
                                            className="flex justify-center items-center hover:bg-slate-100"
                                            style={{ borderRadius: "2rem", width: "6rem" }}
                                        >
                                            <div>
                                                <h1>
                                                    <small>Check-Out</small>
                                                </h1>
                                                {/* <p>01/02/03</p> */}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="sr-only" htmlFor="description">Description</label>

                            <textarea
                                {...register("description", { required: true })}
                                class="w-full outline-slate-200 rounded-lg p-3 text-sm"
                                placeholder="Description"
                                rows="8"
                                id="description"
                            ></textarea>
                        </div>

                        <div class="mt-4">
                            <button
                                type="submit"
                                class="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );

};

export default CreateCampaign;