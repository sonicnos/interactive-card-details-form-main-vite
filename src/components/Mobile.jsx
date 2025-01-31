import React from "react";

const Mobile = () => {
  return (
    <div className="w-full md:hidden">
      <img
        className="w-full"
        src="../../public/bg-main-mobile.png"
        alt="background-mobile"
      />
      <div className="absolute top-[90px] left-[90px] w-[350px]">
        <img src="../../bg-card-back.png" alt="card-back" />
        <p className="absolute top-[84px] left-[275px] text-white text-sm font-bold">
          000
        </p>
      </div>
      <div className="absolute top-[200px] left-[26px] w-[350px]">
        <img
          className="absolute w-12 top-[19px] left-[22px]"
          src="../../card-logo.svg"
          alt="card-logo"
        />
        <img src="../../bg-card-front.png" alt="card-back" />
        <div className="flex gap-5 absolute top-[105px] left-[22px] text-white text-2xl">
          <p>0000</p>
          <p>0000</p>
          <p>0000</p>
          <p>0000</p>
        </div>
        <div className="flex justify-between w-[305px] absolute top-[150px] left-[22px] text-white">
          <p className="uppercase">name</p>
          <p>01/20</p>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
