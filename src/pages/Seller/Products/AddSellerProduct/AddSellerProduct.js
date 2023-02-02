import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlinePlusSquare } from 'react-icons/ai';

const AddSellerProduct = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
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
      formData.append('image', files[i]);
      formData.append('key', imageHostKey);
      const response = await fetch(imageUrl, {
        method: "POST",
        body: formData
      });
      const result = await response.json();
      console.log(result)
      uploadedImages.push(...images,result.data.url);
      console.log(uploadedImages)
    }
    setImages(uploadedImages);
    console.log(images)
    setLoading(false);
  };

  const handleAddProduct = (data) => {
  
      const productData = {
        name: data.name,
        description: data.description,
        facility: data.facility,
        class: data.class,
        contact: data.contact,
        yearly: data.yearly,
        monthly: data.monthly,
        hotelId: data.hotelId,
        roomSize: data.roomSize,
        promoted: data.promoted,
        image: images,
        address: data.address,
        country: data.country,
        city: data.country,
        postal: data.postal,
      };
      console.log(productData);

      // send to db
      fetch('https://safar-server-nasar06.vercel.app/destination/post-all-destinations', {
        method: "POST",
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(productData)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  };

  return (
    <section className="py-4">
      <h2 className="text-3xl py-4">Add a New Product</h2>
      <div className="flex flex-wrap items-center">
        <label htmlFor="pdImg"><AiOutlinePlusSquare className="text-8xl text-gray-400"/></label>
      <input className="hidden" type="file" id="pdImg" accept="image/*" multiple onChange={handleImageChange} />
      {loading ? 'Uploading...' : null}
      {images.map((image) => (
        <img className="h-24 w-24 m-1 border border-slate-300 rounded-md" key={image} src={image} alt="Uploaded" />
      ))}
    </div>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        action=""
        className="container flex flex-col mx-auto space-y-4 ng-untouched ng-pristine ng-valid pr-4"
      >
        <div className="">
          <label htmlFor="">Product Name</label>
          <input
            className="border-2 p-2 rounded-md w-full border-blue-50"
            placeholder="Product Name"
            type="text"
            {...register("name", { required: "product name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="">
          <label htmlFor="">Description</label>
          <textarea
            className="border-2 p-2 rounded-md w-full border-blue-50"
            placeholder="product description"
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

        <div className="">
          <label htmlFor="">Facilities</label>
          <input
            className="border-2 p-2 rounded-md w-full border-blue-50"
            placeholder="Facilities"
            type="text"
            name=""
            id=""
            {...register("facility", { required: "Facilities is required" })}
          />
          {errors.facility && (
            <p className="text-red-500">{errors.facility.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <label htmlFor="pet-select">Choose Class:</label>

            <select
              className="border-2 p-2 rounded-md w-full border-blue-50"
              id="pet-select"
              {...register("class", { required: "class is required" })}
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
            </select>
            {errors.class && (
              <p className="text-red-500">{errors.class.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Contact</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="phone number"
              type="text"
              name=""
              id=""
              {...register("contact", { required: "contact is required" })}
            />
            {errors.contact && (
              <p className="text-red-500">{errors.contact.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-2">
          <div className="">
            <label htmlFor="">Yearly deals</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Yearly deals"
              type="text"
              name=""
              id=""
              {...register("yearly", { required: "yearly is required" })}
            />
            {errors.yearly && (
              <p className="text-red-500">{errors.yearly.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Monthly deals</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Monthly deals"
              type="text"
              name=""
              id=""
              {...register("monthly", { required: "monthly is required" })}
            />
            {errors.monthly && (
              <p className="text-red-500">{errors.monthly.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Hotel id</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Hotel id"
              type="text"
              name=""
              id=""
              {...register("hotelId", { required: "hotel id is required" })}
            />
            {errors.hotelId && (
              <p className="text-red-500">{errors.hotelId.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          <div className="">
            <label htmlFor="">Room Size</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Room Size"
              type="text"
              name=""
              id=""
              {...register("roomSize", { required: "room size is required" })}
            />
            {errors.roomSize && (
              <p className="text-red-500">{errors.roomSize.message}</p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="">Promoted</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Promoted"
              type="text"
              name=""
              id=""
              {...register("promoted", { required: "promoted is required" })}
            />
            {errors.promoted && (
              <p className="text-red-500">{errors.promoted.message}</p>
            )}
          </div>
        </div>

        <div className="">
          <label htmlFor="">Address</label>
          <input
            className="border-2 p-2 rounded-md w-full border-blue-50"
            placeholder="Address"
            type="text"
            name=""
            id=""
            {...register("address", { required: "address is required" })}
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-2">
          <div className="">
            <label htmlFor="">Country</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Country"
              type="text"
              name=""
              id=""
              {...register("country", { required: "country is required" })}
            />
            {errors.country && (
              <p className="text-red-500">{errors.country.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="">City</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="City"
              type="text"
              name=""
              id=""
              {...register("city", { required: "city is required" })}
            />
            {errors.city && (
              <p className="text-red-500">{errors.city.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="">ZIP / Postal</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="ZIP Code"
              type="text"
              name=""
              id=""
              {...register("postal", { required: "postal is required" })}
            />
            {errors.postal && (
              <p className="text-red-500">{errors.postal.message}</p>
            )}
          </div>
        </div>
        <div>
          <input
            className="px-4 py-2 bg-blue-800 text-white rounded-md cursor-pointer"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </section>
  );
};

export default AddSellerProduct;
