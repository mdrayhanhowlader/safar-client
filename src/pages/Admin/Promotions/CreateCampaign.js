import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useForm } from 'react-hook-form';
import { FaImage } from "react-icons/fa";

const CreateCampaign = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isHandleClick, setIsHandleClick] = useState(false);
    const [day, setDay] = useState(0);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    console.log(day)

    const imageHostKey = process.env.REACT_APP_imagePostKey;

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }
    const handleOpenCalender = () => {
        setIsHandleClick(true);
    };
    const handleCloseCalender = () => {
        const campaignDuration = dayDifference(date[0]?.endDate, date[0].startDate);
        setDay(campaignDuration);

    };

    const onCreateSubmit = async (data) => {

        const regularPrice = data.regular_price;
        const givenPercentage = data.percentage;
        const offerPrice = parseFloat((regularPrice * givenPercentage) / 100);
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
            regular_price: regularPrice,
            offer_price: offerPrice

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
                                <label class="sr-only" htmlFor="campaign_name">Campaign Name</label>
                                <input
                                    {...register("campaign_name", { required: true })}
                                    class="w-full outline-slate-200 rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Campaign Name"
                                    type="text"
                                    id="campaign_name"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="sr-only" htmlFor="regular_price">Regular Price</label>
                                <input
                                    {...register("regular_price", { required: true })}
                                    class="w-full outline-slate-200 rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Regular Price"
                                    type="number"
                                    id="regular_price"
                                />
                            </div>
                            <div>
                                <label class="sr-only" htmlFor="percentage">Offer/Percentage</label>
                                <input
                                    {...register("percentage", { required: true })}
                                    class="w-full outline-slate-200 rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Percentage"
                                    type="number"
                                    id="percentage"
                                />
                            </div>

                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2">
                            <div className='border-2 border-slate-200 rounded-lg'>
                                <label className="flex items-center gap-2" htmlFor="campaign_image">
                                    <FaImage className='text-3xl mx-3 text-blue-500' /><span className='text-slate-400'>Select Campaign Image</span>
                                </label>
                                <input
                                    {...register("campaign_image", { required: true })}
                                    className="w-full outline-slate-200 hidden rounded-lg border-gray-200 p-3 text-sm"
                                    type="file"
                                    accept="image/*"
                                    id="campaign_image"
                                />
                            </div>
                            {/* Campaign Date */}
                            <div className='border-2 border-slate-200 rounded-lg mx-4'>
                                <div className="flex justify-around">
                                    {isHandleClick === true ? (
                                        <div
                                            onClick={handleCloseCalender}
                                            className="flex justify-center items-center hover:bg-slate-100"
                                            style={{ borderRadius: "2rem", width: "6rem" }}
                                        >
                                            <div>
                                                <h1>
                                                    <small className="text-slate-400">Start Date</small>
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
                                                    <small className="text-slate-400">Start Date</small>
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
                                                    <small className="text-slate-400">End Date</small>
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
                                                    <small className="text-slate-400">End Date</small>
                                                </h1>
                                                {/* <p>01/02/03</p> */}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {
                                    <div className={isHandleClick === true ? "visible" : "hidden"}>
                                        <DateRange
                                            className="absolute ml-16 mt-2 top-30 z-50"
                                            editableDateInputs={true}
                                            onChange={(item) => {
                                                setDate([item.selection]);
                                                setIsHandleClick(false);
                                                handleCloseCalender();
                                            }}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                        />
                                    </div>
                                }
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