import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Edit_info = ({ user, setEdit }) => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    bio: "",
  });
  return (
    <section>
      <div
        className=" text-[#2D9CDB] font-sans text-lg font-normal capitalize cursor-pointer"
        onClick={() => setEdit(false)}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
        <span className=" inline-block ml-3">Back</span>
      </div>
      <form
        onSubmit={(ev) => ev.preventDefault()}
        className="sm:border rounded-xl sm:shadow border-[#E0E0E0] sm:my-11 lg:min-w-[845px] sm:px-12"
      >
        <div className=" py-7 flex justify-between items-center">
          <div className=" mr-10">
            <h3 className=" text-2xl">Change Info</h3>
            <h5 className=" text-[#828282] mt-1 text-sm font-medium">
              Changes will be reflected to every services
            </h5>
          </div>
        </div>
        <div className="py-7 flex items-center justify-start">
          <div className="rounded-lg overflow-hidden w-[72px] h-[72px] bg-slate-500 flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faCamera} className=" text-white text-xl" />
          </div>
          <div className="text-[#828282] capitalize text-sm leading-5 font-medium overflow-hidden ml-7">
            CHANGE PHOTO
          </div>
        </div>
        <div className="py-7">
          <div className="text-[#4F4F4F] capitalize text-sm leading-5 font-medium overflow-hidden">
            Name
          </div>
          <input
            className=" mt-1 w-full sm:w-[416px] p-4 rounded-xl border border-[#828282] focus:outline-blue-500 placeholder:text-[#BDBDBD] placeholder:font-medium placeholder:text-sm"
            placeholder={user.name || "Enter your name..."}
          />
        </div>
        <div className="py-7">
          <div className="text-[#4F4F4F] capitalize text-sm leading-5 font-medium overflow-hidden">
            Bio
          </div>
          <textarea
            className=" mt-1 w-full h-24 sm:w-[416px] p-4 rounded-xl border border-[#828282] focus:outline-blue-500 placeholder:text-[#BDBDBD] placeholder:font-medium placeholder:text-sm"
            placeholder={user.bio || "Enter your bio..."}
          />
        </div>
        <div className="py-7">
          <div className="text-[#4F4F4F] capitalize text-sm leading-5 font-medium overflow-hidden">
            Phone
          </div>
          <input
            className=" mt-1 w-full sm:w-[416px] p-4 rounded-xl border border-[#828282] focus:outline-blue-500 placeholder:text-[#BDBDBD] placeholder:font-medium placeholder:text-sm"
            placeholder={user.phone || "Enter your phone number..."}
          />
        </div>
        <div className="py-7">
          <div className="text-[#4F4F4F] capitalize text-sm leading-5 font-medium overflow-hidden">
            email
          </div>
          <input
            className=" mt-1 w-full sm:w-[416px] p-4 rounded-xl border border-[#828282] focus:outline-blue-500 placeholder:text-[#BDBDBD] placeholder:font-medium placeholder:text-sm"
            placeholder={user.email || "Enter your email..."}
          />
        </div>
        <button className="my-6 cursor-pointer py-2 px-6 text-center capitalize text-white font-semibold bg-blue-500 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Save
        </button>
      </form>
    </section>
  );
};

export default Edit_info;
