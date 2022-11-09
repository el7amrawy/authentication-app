const Personal_info = () => {
  return (
    <section>
      <div className=" text-center ">
        <h1 className=" text-4xl">Personal info</h1>
        <h3 className=" text-lg font-light leading-6 mt-2">
          Basic info, like your name and photo
        </h3>
      </div>
      <div className="sm:border rounded-xl sm:shadow border-[#E0E0E0] my-11 lg:min-w-[845px]">
        <div className=" sm:px-12 py-7 flex justify-between items-center border-b-2">
          <div className=" mr-10">
            <h3 className=" text-2xl">Profile</h3>
            <h5 className=" text-[#828282] mt-1 text-sm font-medium">
              Some info may be visible to other people
            </h5>
          </div>
          <button className="shadow border border-[#828282] rounded-xl text-[#828282] text-base font-medium py-2 px-9 capitalize  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            edit
          </button>
        </div>
        <div className="sm:px-12 py-7 flex justify-between items-center border-b-2">
          <div className="text-[#BDBDBD] uppercase text-sm font-medium">
            Photo
          </div>
          <div className=" md:w-3/5">
            <div className=" w-20 h-20 rounded-lg overflow-hidden">
              <img src="" alt="avatar" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="sm:px-12 py-7 flex justify-between items-center border-b-2">
          <div className="text-[#BDBDBD] uppercase text-sm font-medium">
            Name
          </div>
          <div className=" md:w-3/5 overflow-hidden">
            <div className=" capitalize text-[#333333] font-medium text-base">
              Xanthe Neal
            </div>
          </div>
        </div>
        <div className="sm:px-12 py-7 flex justify-between items-center border-b-2">
          <div className="text-[#BDBDBD] uppercase text-sm font-medium">
            bio
          </div>
          <div className=" md:w-3/5 overflow-hidden">
            <div className=" capitalize text-[#333333] font-medium text-base">
              I am a software developer and a big fan of devchallenges...
            </div>
          </div>
        </div>
        <div className="sm:px-12 py-7 flex justify-between items-center border-b-2">
          <div className="text-[#BDBDBD] uppercase text-sm font-medium">
            PHONE
          </div>
          <div className=" md:w-3/5 overflow-hidden">
            <div className=" capitalize text-[#333333] font-medium text-base">
              908249274292
            </div>
          </div>
        </div>
        <div className="sm:px-12 py-7 flex justify-between items-center">
          <div className="text-[#BDBDBD] uppercase text-sm font-medium">
            Email
          </div>
          <div className=" md:w-3/5 overflow-hidden">
            <div className=" capitalize text-[#333333] font-medium text-base">
              xanthe.neal@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal_info;
