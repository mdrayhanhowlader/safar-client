import React from "react";

const SellerProfile = () => {
  return (
    <section className="px-2 py-6">
      <h3 className="text-2xl">Seller Account</h3>
      <h2 className="text-2xl py-4">Seller Id: 34546564543</h2>
      <form action="">
        <div className="w-4/6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Full Name:
            </label>
            <input
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              placeholder=""
              defaultValue="Nurul Islam"
            />
          </div>
        </div>

        <div className="w-4/6 mt-4">
          <div className="grid grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Phone Number:
            </label>
            <input
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              placeholder=""
              defaultValue="+8801634146292"
            />
          </div>
        </div>

        <div className="w-4/6 mt-4">
          <div className="grid grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Email:
            </label>
            <input
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              placeholder=""
              defaultValue="amarbow@gmail.com"
            />
          </div>
        </div>

        <div className="w-4/6 mt-4">
          <div className="grid grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Bank Account:
            </label>
            <input
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              placeholder=""
              defaultValue="54545476878785652"
            />
          </div>
        </div>

        <div className="w-4/6 mt-4">
          <div className="grid grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Hotel Id:
            </label>
            <input
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              placeholder=""
              defaultValue="46888775654"
            />
          </div>
        </div>
        <div className="w-4/6 mt-4">
          <div className="grid grid-cols-5 gap-4">
            <label htmlFor="" className="">
              Hotel Name:
            </label>
            <input
              className="border-2 border-slate-300 w-full p-2 rounded-md ml-4 col-span-3"
              type="text"
              placeholder=""
              defaultValue="Bangladesh hotel and"
            />
          </div>
        </div>
      </form>

      {/* hotel images  */}
      <div className="mt-8">
        <h2 className="text-2xl my-4">Hotel Images</h2>
        <div className="mr-4">
          <div className="grid grid-cols-6 gap-4">
            <div>
              <img
                className="w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB86_TcdTcs5lEHd_tuGyFx3h4a96WppjOIsY8cvDtladrk_3BqRHBbudr-eIQ93vmHdA&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycHOMPfIH3dh7SxqH9m7AQXU6SrCyM80r9A&usqp=CAU" alt="" />
            </div>
            <div>
              <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTFS8dxQ5lAAhoYGlrZUjwJR3sTmTvXLKdQ&usqp=CAU" alt="" />
            </div>
            <div>
              <img className="w-full h-full" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/392125509.jpg?k=f842539acdc7e790a63a95eaf6127af9b4daa48179beb4eae517f720a7eb9d5c&o=&hp=1" alt="" />
            </div>
            <div>
              <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeH1eb5jU2aDj-VjIO-n9csO1zkexxitVLEA&usqp=CAU" alt="" />
            </div>
            <div>
              <img className="w-full h-full" src="https://media.istockphoto.com/id/1300757575/photo/side-view-of-hotel-amenities-on-the-bed.jpg?s=612x612&w=0&k=20&c=NQK76wtCnGhNcvveUfs8FE4JGl9-A1zuqCsSS8vUmgI=" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerProfile;
