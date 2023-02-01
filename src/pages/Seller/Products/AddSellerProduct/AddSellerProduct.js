import React from "react";

const AddSellerProduct = () => {
  return (
    <section className="py-4">
      <h2 className="text-3xl">Add a New Product</h2>
      <form
        action=""
        className="container flex flex-col mx-auto space-y-4 ng-untouched ng-pristine ng-valid pr-4"
      >
        <div className="">
          <label htmlFor="">Product Name</label>
          <input
            className="border-2 p-2 rounded-md w-full border-blue-50"
            placeholder="Product Name"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="">
          <label htmlFor="">Description</label>
          <textarea
            className="border-2 p-2 rounded-md w-full border-blue-50"
            placeholder="product description"
            name=""
            rows="5"
          ></textarea>
        </div>

        <div className="">
          <label htmlFor="">Facilities</label>
          <input
            className="border-2 p-2 rounded-md w-full border-blue-50"
            placeholder="Facilities"
            type="text"
            name=""
            id=""
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <label for="pet-select">Choose Class:</label>

            <select className="border-2 p-2 rounded-md w-full border-blue-50" id="pet-select">
              <option value="">--Please choose an option--</option>
              <option value="Deluxe King Room">Deluxe King Room</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Superior Double Room">Superior Double Room</option>
              <option value="Deluxe Twin Room">Deluxe Twin Room</option>
              <option value="Deluxe Double Room">Deluxe Double Room</option>
              <option value="Family Room with Balcony">Family Room with Balcony</option>
              <option value="Two-Bedroom Apartment">Two-Bedroom Apartment</option>
              <option value="Standard Double Room">Standard Double Room</option>
              <option value="Superior Queen Room">Superior Queen Room</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Contact</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="phone number"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>


        <div className="grid grid-cols-3 gap-2">
          <div className="">
            <label htmlFor="">Yearly deals</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Yearly deals"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Monthly deals</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Monthly deals"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Hotel id</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Hotel id"
              type="text"
              name=""
              id=""
            />
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
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="">
            <label htmlFor="">Country</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Country"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="City"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">ZIP / Postal</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="ZIP Code"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div>
            <input className="px-4 py-2 bg-blue-800 text-white rounded-md cursor-pointer" type="submit" value="Add Product" />
        </div>
      </form>
    </section>
  );
};

export default AddSellerProduct;
