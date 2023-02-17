import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';
import tourism_form from '../../../../assets/tourism_form.png'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Navbar from '../../Navbar/Navbar';
import useTitle from '../../../../hooks/useTitle';

const OrganizerForm = () => {
    const { user } = useContext(AuthContext);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [facilities, setFacilities] = useState([]);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [beds, setBeds] = useState([]);
    const [room, setRoom] = useState(false);
    // const [addRoom, setAddRoom] = useState([]);

    const imageHostKey = process.env.REACT_APP_imagePostKey;

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleImageChange = async (event) => {
        const imageHostKey = process.env.REACT_APP_imagePostKey;
        const imageUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        setLoading(true);
        const files = event.target.files;
        const uploadedImages = [];
        for (let i = 0; i < files.length; i++) {
            const formData = new FormData();
            formData.append("image", files[i]);
            formData.append("key", imageHostKey);
            const response = await fetch(imageUrl, {
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            uploadedImages.push(...images, result.data.url);
            console.log(uploadedImages);
        }
        setImages(uploadedImages);
        setLoading(false);
    };

    const handleAddText = (facility) => {
        setFacilities([...facilities, { name: facility }]);
    };
    // const handleAddRoom = () => {
    //     setAddRoom([])
    // }

    const handleOpen = () => {
        setRoom(true)
    }
    const handleClose = () => {
        setRoom(false)
    }
    const onSubmit = (data) => {

        const organizer = {
            hotel_name: data.hotelName,
            description: data.description,
            organizer_email: user?.email,
            offer: true,
            location: [
                {
                    country: data.country,
                    city: data.city,
                    address: data.address,
                    zip_code: data.zipCode,
                }
            ],
            images: images,
            facilities: facilities,
            room_type: [
                {
                    name: data.room_name,
                    room_no: parseInt(data.room_no),
                    bed: beds,
                    sleep: parseInt(data.sleep)
                },

            ],
            yearly_deals: true,
            monthly_deals: true,
            contact: data.mobile,
            hotel_id: user?.uid,
            promoted: "",
        }
        console.log(organizer)
        console.log(user)
        // update organizer info 
        fetch(`https://safar-server-nasar06.vercel.app/destination/post-all-destinations`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(organizer)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.acknowledge === true) {
                    reset()
                }
                navigate('/sellerdashboard')
            })
            .catch(err => console.error(err))


    }
    const handleBedType = (bed) => {
        setBeds([...beds, { size: bed }]);
    };

    useTitle('Org-Info')

    return (
        <div>
            <Navbar/>
            <section className='w-full'>
            <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">

                <div className="my-6 p-6">
                    <h1 className='text-5xl text-blue-400 text-center font-bold mt-16'>Please fill and support us to publish you!</h1>
                    <div className='mt-12'>
                        <img className='h-1/2' src={tourism_form} alt='' />
                    </div>
                </div>


                <div className="py-12 bg-white md:py-24">
                    <div className="max-w-lg px-4 mx-auto lg:px-8">
                        {/* facilities */}
                        <div className='col-span-6 mt-4'>
                            <form className='grid grid-cols-6 gap-4'
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleAddText(e.target.elements.facility.value);
                                    e.target.elements.facility.value = "";
                                }}
                            >
                                <div className='col-span-6'>
                                    <label className="font-semibold" htmlFor="Facility">
                                        <small>Room Facilities:</small>
                                    </label>
                                    <input
                                        className="border w-full p-1 rounded-md"
                                        placeholder="type your facility name"
                                        type="text"
                                        name="facility"
                                    />
                                </div>
                                <button className="bg-blue-500 py-[6px] text-white px-4 rounded-md" type="submit"><small>Add</small></button>
                            </form>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 my-3">
                                <small>
                                    {
                                        facilities.map((textData, index) => <p className="font-semibold " key={index}>{textData.name}</p>)
                                    }
                                </small>

                            </div>
                        </div>
                        {/* bed type  */}
                        <form className='grid grid-cols-6 gap-4'
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleBedType(e.target.elements.bed.value);
                                e.target.elements.bed.value = "";
                            }}
                        >
                            <div className='col-span-6'>
                                <label className="font-semibold block my-2" htmlFor="">
                                    <small>Bed Type:</small>
                                </label>
                                <input
                                    className="border w-full p-1 rounded-md"
                                    placeholder="Bed Type"
                                    type="text"
                                    name="bed"
                                />
                            </div>
                            <button
                                className="bg-blue-500 py-[6px] text-white px-4 rounded-md"
                                type="submit"
                            >
                                <small> Add</small>
                            </button>
                        </form>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 my-3">
                            {beds.map((bedData, index) => (
                                <p className="font-semibold" key={index}>
                                    <small>{bedData.size}</small>
                                </p>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-6 gap-4">
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
                            <div className="col-span-6 mt-4">
                                <label htmlFor="Description" className="block text-xs font-medium text-gray-700">
                                    Hotel Description
                                </label>

                                <textarea
                                    {...register("description", { required: true })}
                                    type="text"
                                    id="Description"
                                    className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>
                            {/* Hotel Images */}
                            {/* Multiple Image Add */}
                            <div className='col-span-6 mt-4'>
                                <small className='font-semibold'>Hotel Images</small>
                                <div className='col-span-6 border'>
                                    <div className="flex items-center">
                                        <label htmlFor="pdImg">
                                            <AiOutlinePlusSquare className="text-4xl my-2 text-gray-400" />
                                        </label>
                                        <input
                                            className="hidden"
                                            type="file"
                                            id="pdImg"
                                            accept="image/*"
                                            multiple
                                            onChange={handleImageChange}
                                        />
                                        {loading ? "Uploading..." : null}
                                        {images?.map((image, idx) => (
                                            <img
                                                className="h-12 w-12 m-1 border border-slate-300 rounded-md"
                                                key={idx}
                                                src={image.url}
                                                alt="Uploaded"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 mb-4">
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

                            {/* room type */}
                            {room ?
                                <div onClick={handleClose} className='flex col-span-6 mb-0'>
                                    <div className='flex items-center'>
                                        <FaAngleUp />
                                    </div>
                                    <small className='font-bold mx-2 mb-0'>Room Type</small>
                                </div>
                                :
                                <div onClick={handleOpen} className='flex col-span-6 mb-0'>
                                    <div className='flex items-center'>
                                        <FaAngleDown />
                                    </div>
                                    <small className='font-bold mx-2 mb-0'>Room Type</small>
                                </div>
                            }
                            <div className={room ? 'visible flex col-span-6 gap-2 mb-4' : 'hidden'}>
                                <div className="">
                                    <label htmlFor="Room Name" className="block text-xs font-medium text-gray-700">
                                        Room Name
                                    </label>

                                    <input
                                        {...register("room_name", { required: true })}
                                        type="text"
                                        id="Room Name"
                                        className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="Room No" className="block text-xs font-medium text-gray-700">
                                        Room No
                                    </label>

                                    <input
                                        {...register("room_no", { required: true })}
                                        type="number"
                                        id="Room No"
                                        className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="Sleep" className="block text-xs font-medium text-gray-700">
                                        Sleep
                                    </label>

                                    <input
                                        {...register("sleep", { required: true })}
                                        type="number"
                                        id="Sleep"
                                        className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                    />
                                </div>

                                {/* <button onClick={handleAddRoom} className="bg-black py-[6px] text-white px-4 rounded-md"
                                    type="submit">
                                    <small>Add Room</small>
                                </button> */}
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
                            {/* <div className="col-span-6 my-4">
                                <label htmlFor="NID" className="block text-xs font-medium text-gray-700">
                                    NID
                                </label>

                                <input
                                    {...register("nid", { required: true })}
                                    type="text"
                                    id="NID"
                                    className="h-full w-full mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                />
                            </div> */}
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


                            {/* room types */}
                            <div className="col-span-6">
                                <label onClick={() => setOpen(!open)} className="font-semibold" htmlFor="pet-select">
                                    Choose Room Type
                                </label>
                                {open &&
                                    <div>
                                        <div>
                                            <input type="checkbox" id="1" name="vehicle1" value="Boat" />
                                            <label htmlFor="1"> I have a boat</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="2" name="vehicle2" value="Boat" />
                                            <label htmlFor="2"> I have a boat</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="3" name="vehicle3" value="Boat" />
                                            <label htmlFor="3"> I have a boat</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="4" name="vehicle4" value="Boat" />
                                            <label htmlFor="4"> I have a boat</label>
                                        </div>
                                    </div>
                                }

                                {/* <select
                                    className="border-2 p-2 rounded-md w-full border-blue-50"
                                    id="pet-select"
                                    {...register("roomType", { required: "Room Type is required" })}
                                >

                                    <option value="">--Please choose an option--</option>
                                    <option value="Deluxe King Room">Deluxe King Room</option>
                                    <option value="Deluxe Room">Deluxe Room</option>
                                    <option value="Deluxe Room">Deluxe Room</option>
                                    <option value="Superior Double Room">Superior Double Room</option>
                                    <option value="Deluxe Twin Room">Deluxe Twin Room</option>
                                    <option value="Deluxe Double Room">Deluxe Double Room</option>
                                    <option value="Family Room with Balcony">
                                        Family Room with Balcony
                                    </option>
                                    <option value="Two-Bedroom Apartment">
                                        Two-Bedroom Apartment
                                    </option>
                                    <option value="Standard Double Room">Standard Double Room</option>
                                    <option value="Superior Queen Room">Superior Queen Room</option>
                                </select> */}
                                {errors.roomType && (
                                    <p className="text-red-500">{errors.roomType.message}</p>
                                )}
                            </div>
                            <div className="col-span-6">
                                <button
                                    className="block w-full rounded-md bg-blue-500 hover:bg-blue-600 p-2.5 text-sm text-white transition hover:shadow-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        {/* <div className='col-span-6 mt-4'>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleAddText(e.target.elements.facility.value);
                                    e.target.elements.facility.value = "";
                                }}
                            >
                                <label className="font-bold" htmlFor="">Room Facilities: </label>
                                <input
                                    className="mx-4 border-2 border-blue-200 w-2/5 p-1 rounded-md"
                                    placeholder="type your facility name"
                                    type="text"
                                    name="facility"
                                />
                                <button className="bg-blue-600 py-[6px] text-white px-4 rounded-md" type="submit">Add Facility</button>
                            </form>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 my-3">
                                {
                                    facilities.map((textData, index) => <p className="font-bold " key={index}>{textData.name}</p>)
                                }

                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default OrganizerForm;