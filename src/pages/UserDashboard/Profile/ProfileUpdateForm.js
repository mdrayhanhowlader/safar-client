import React from "react";

const ProfileUpdateForm = () => {
  return (
    <>
      <>
        <form action="">
          <div className="py-4">
            <label htmlFor="">About</label>
            <textarea
              className="mt-2 w-full border-2 border-slate-200 rounded-md"
              name=""
              id=""
              rows="4"
            ></textarea>
          </div>
          <div className="py-8">
            <label htmlFor="">Location</label>
            <input
              className="mt-2 w-full border-2 border-slate-200 rounded-md py-2"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="py-4">
            <p>Languages speak</p>
            <a className="underline" href="/">
              Add more
            </a>
          </div>
          <div>
            <label htmlFor="">Work</label>
            <input
              className="mt-2 w-full border-2 border-slate-200 rounded-md py-2"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <button className="underline">cancel</button>
            </div>
            <div>
              <input
                className="py-2 px-4 rounded-md bg-black text-white"
                type="submit"
                value="Save"
              />
            </div>
          </div>
        </form>
      </>
    </>
  );
};

export default ProfileUpdateForm;
