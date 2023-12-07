import React from "react";
import { useSelector } from "react-redux";
import { FcPortraitMode } from "react-icons/fc";

const User = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="w-full flex items-center justify-center mt-[92px] fixed ">
    <div className="w-full md:w-[70%] lg:w-[40%] px-2 mt-8">
      <div className="flex items-center justify-center mb-4">
        <FcPortraitMode size={75} />
      </div>
  
      <div className="flex items-center justify-between px-2 pb-3">
        <h1 className="text-[18px] md:text-[24px] font-semibold">Name:</h1>
        <span className=" text-[16px] md:text-[20px] ml-6">
          {user?.name}
        </span>
      </div>
      <div className="flex items-center justify-between px-2 pb-3">
        <h1 className="text-[18px] md:text-[24px] font-semibold">Category:</h1>
        <span className=" text-[16px] md:text-[20px] ml-8">
          {user?.category}
        </span>
      </div>
      <div className="flex items-center justify-between px-2 pb-3">
        <h1 className="text-[18px] md:text-[24px] font-semibold">Sector:</h1>
        <span className=" text-[16px] md:text-[20px] ml-8">
          {user?.sector}
        </span>
      </div>
    </div>
  </div>
  
  );
};

export default User;
