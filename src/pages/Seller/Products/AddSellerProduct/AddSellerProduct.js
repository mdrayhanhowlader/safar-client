import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiOutlinePlusSquare } from "react-icons/ai";
// import { FaMinus, FaPlus } from "react-icons/fa";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { AuthContext } from "../../../../contexts/AuthProvider";
import useTitle from "../../../../hooks/useTitle";

const AddSellerProduct = () => {
  useTitle('Add Products');
  const { user } = useContext(AuthContext);
  const [images, setImages] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [bathroomFacility, setBathroom] = useState([]);
  const [beds, setBeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openFacility, setOpenFacility] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
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
      console.log(result);
      uploadedImages.push(...images, { url: result.data.url });
      console.log(uploadedImages);
    }
    setImages(uploadedImages);
    console.log(images);
    setLoading(false);
  };

  const handleAddText = (facility) => {
    setFacilities([...facilities, { name: facility }]);
  };

  const handleBathroomFacility = (bathroomData) => {
    setBathroom([...bathroomFacility, { name: bathroomData }]);
  };

  const handleBedType = (bed) => {
    setBeds([...beds, { size: bed }]);
  };

  console.log(facilities);

  const handleAddProduct = (data) => {
    const extraFacilityData = [];
    data.wifi &&
      extraFacilityData.push({
        name: "Free Wifi",
      });
    data.hitter &&
      extraFacilityData.push({
        name: "Hitter",
      });
    data.geyser &&
      extraFacilityData.push({
        name: "Geyser",
      });
    data.breakfast &&
      extraFacilityData.push({
        name: "Breakfast",
      });
    data.breakfastLaunch &&
      extraFacilityData.push({
        name: "Breakfast and Launch",
      });

    data.drink &&
      extraFacilityData.push({
        name: "Drink",
      });

    data.parking &&
      extraFacilityData.push({
        name: "Parking",
      });

    // console.log(extraFacilityData)

    const productData = {
      name: data.name,
      rooms_no: parseInt(data.roomnumber),
      price: parseInt(data.price),
      hotel_id: user?.uid,
      extra_facilities: extraFacilityData,
      room_facilities: facilities,
      view: data.view,
      bathroom: bathroomFacility,
      bed: beds,
      sleep: parseInt(data.sleep),
      images: images,
    };
    console.log(productData);

    // send to db
    fetch("https://safar-server-nasar06.vercel.app/rooms/post-room", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledge) {
          setImages([]);
          setFacilities([]);
          setBathroom([]);
          setBeds([]);
          reset();
          toast.success("hotel added");
          console.log(data);
        } else {
          console.error("please try again");
        }
      });
  };

  return (
    <section className="py-4">
      <h2 className="text-2xl font-medium pb-6">Add New Room</h2>
      <div className="flex flex-wrap items-center">
        <label htmlFor="pdImg">
          <AiOutlinePlusSquare className="text-8xl text-gray-400" />
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
            className="h-24 w-24 m-1 border border-slate-300 rounded-md"
            key={idx}
            src={image.url}
            alt="Uploaded"
          />
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {/* // add new facilities  */}
        <div>
          <form
            className="flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              handleAddText(e.target.elements.facility.value);
              e.target.elements.facility.value = "";
            }}
          >
            <label className="font-semibold text-slate-600" htmlFor="">
              Room Facilities:
            </label>
            <input
              className="my-2 border-2 border-blue-200 w-5/5 p-1 rounded-md"
              placeholder="Add New Facility"
              type="text"
              name="facility"
            />
            <button
              className="bg-blue-400 hover:bg-orange-400 py-2 text-white px-4 rounded-md"
              type="submit"
            >
              Add New Facility
            </button>
          </form>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 my-3">
            {facilities.map((textData, index) => (
              <p className="font-bold " key={index}>
                {textData.name}
              </p>
            ))}
          </div>
        </div>
        {/* bathroom data  */}
        <div>
          <form
            className="flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              handleBathroomFacility(e.target.elements.bathroom.value);
              e.target.elements.bathroom.value = "";
            }}
          >
            <label className="font-semibold text-slate-600" htmlFor="">
              Bathroom Facilities:{" "}
            </label>
            <input
              className="my-2 border-2 border-blue-200 w-5/5 p-1 rounded-md"
              placeholder="Bathroom Facilities"
              type="text"
              name="bathroom"
            />
            <button
              className="bg-blue-400 hover:bg-orange-400 py-2 text-white px-4 rounded-md"
              type="submit"
            >
              Add Facility
            </button>
          </form>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 my-3">
            {bathroomFacility.map((textData, index) => (
              <p className="font-bold " key={index}>
                {textData.name}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* bed data  */}
      <div>
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            handleBedType(e.target.elements.bed.value);
            e.target.elements.bed.value = "";
          }}
        >
          <label className="font-semibold text-slate-600" htmlFor="">
            Bed Type:
          </label>
          <input
            className="my-2 border-2 border-blue-200 w-5/5 p-1 rounded-md"
            placeholder="Bed Type"
            type="text"
            name="bed"
          />
          <button
            className="bg-blue-400 hover:bg-orange-400 py-2 text-white px-4 rounded-md"
            type="submit"
          >
            Add Bed
          </button>
        </form>
        <div className="grid grid-cols-2 md:grid-cols-10 lg:grid-cols-10 my-3">
          {beds.map((bedData, index) => (
            <p className="font-bold " key={index}>
              {bedData.size}
            </p>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSubmit(handleAddProduct)}
        action=""
        className="container flex flex-col mx-auto space-y-4 ng-untouched ng-pristine ng-valid pr-4"
      >
        <div className="">
          <label className="font-semibold text-slate-600" htmlFor="">
            Room name/Room type
          </label>
          <input
            className="border-2 p-2 rounded-md w-full border-blue-50"
            placeholder="Room Name or room type"
            type="text"
            {...register("name", { required: "product name is required" })}
          />
          {errors?.name && (
            <p className="text-red-500">{errors?.name?.message}</p>
          )}
        </div>
        <div className="">
          <label className="font-semibold text-slate-600" htmlFor="">
            Description
          </label>
          <textarea
            className="border-2 p-2 rounded-md w-full border-blue-50"
            placeholder="Description"
            name=""
            rows="5"
            {...register("description", {
              required: "product description is required",
            })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          <div className="">
            <label className="font-semibold text-slate-600" htmlFor="">
              Room Number
            </label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Room Number"
              type="number"
              name=""
              id=""
              {...register("roomnumber", {
                required: "room number is required",
              })}
            />
            {errors?.roomnumber && (
              <p className="text-red-500">{errors?.roomnumber?.message}</p>
            )}
          </div>
          <div>
            <label className="font-semibold text-slate-600" htmlFor="">
              Price
            </label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Price"
              type="text"
              name=""
              id=""
              {...register("price", {
                required: "Price is required",
              })}
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-2">
          <div className="">
            <label className="font-semibold text-slate-600" htmlFor="">
              Room View
            </label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Room View"
              type="text"
              name=""
              id=""
              {...register("view", { required: "view is required" })}
            />
            {errors?.quantity && (
              <p className="text-red-500">{errors?.price?.message}</p>
            )}
          </div>

          <div>
            <label className="font-semibold text-slate-600" htmlFor="">
              Hotel id
            </label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Hotel id"
              defaultValue={user?.uid}
              readOnly
              type="text"
              name=""
              id=""
              // {...register("hotelId", { required: "hotel id is required" })}
            />
            {/* {errors.hotelId && (
              <p className="text-red-500">{errors.hotelId.message}</p>
            )} */}
          </div>

          <div>
            <label className="font-semibold text-slate-600" htmlFor="">
              Sleep
            </label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="number of people"
              type="number"
              name=""
              id=""
              {...register("sleep", {
                required: "sleep Price is required",
              })}
            />
            {errors.offerPrice && (
              <p className="text-red-500">{errors.offerPrice.message}</p>
            )}
          </div>
        </div>

        <div>
          <div
            onClick={() => setOpenFacility(!openFacility)}
            className="flex items-center"
          >
            <h2 className="text-xl mb-2 font-semibold">
              Please Add Extra facilities
            </h2>
            {openFacility ? (
              <HiOutlineChevronUp className="ml-4 cursor-pointer font-3xl"></HiOutlineChevronUp>
            ) : (
              <HiOutlineChevronDown className="ml-4 cursor-pointer font-3xl"></HiOutlineChevronDown>
            )}
          </div>
          <div
            className={`flex items-center justify-between px-4 ${
              openFacility ? "visible" : "hidden"
            }`}
          >
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
                w-4 h-4  focus:outline-none rounded-lg"
                type="checkbox"
                name="wifi"
                id=""
                value="free wifi"
                {...register("wifi")}
              />
              <label className="font-semibold text-slate-600" htmlFor="wifi">
                Free Wifi
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
              w-4 h-4  focus:outline-none rounded-lg"
                type="checkbox"
                name="hitter"
                id=""
                value="hitter"
                {...register("hitter")}
              />
              <label className="font-semibold text-slate-600" htmlFor="hitter">
                Hitter
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
            w-4 h-4 focus:outline-none rounded-lg"
                type="checkbox"
                name="geyser"
                id=""
                value="geyser"
                {...register("geyser")}
              />
              <label
                className="ml-2 font-semibold text-slate-600"
                htmlFor="geyser"
              >
                Geyser
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
            w-4 h-4 focus:outline-none rounded-lg"
                type="checkbox"
                name="breakfast"
                id=""
                value="breakfast"
                {...register("breakfast")}
              />
              <label
                className="ml-2 font-semibold text-slate-600"
                htmlFor="breakfast"
              >
                Breakfast
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
               w-4 h-4 focus:outline-none rounded-lg"
                type="checkbox"
                name=""
                id=""
                value="Breakfast and launch"
                {...register("breakfastLaunch")}
              />
              <label
                className="ml-2 font-semibold text-slate-600"
                htmlFor=" BreakfastLaunch"
              >
                Breakfast and Launch
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
            w-4 h-4 focus:outline-none rounded-lg"
                type="checkbox"
                name=""
                id=""
                value="drink"
                {...register("drink")}
              />
              <label
                className="ml-2 font-semibold text-slate-600"
                htmlFor=" BreakfastLaunch"
              >
                Drink
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
            w-4 h-4  focus:outline-none rounded-lg"
                type="checkbox"
                name=""
                id=""
                value="car parking"
                {...register("parking")}
              />
              <label
                className="ml-2 font-semibold text-slate-600"
                htmlFor=" BreakfastLaunch"
              >
                Car parking
              </label>
            </div>
          </div>
        </div>

        <div>
          <input
            className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
            type="submit"
            value="Add Room"
          />
        </div>
      </form>
    </section>
  );
};

export default AddSellerProduct;
