import React from "react";

const Mobile = () => {
  return (
    <div className="w-full md:hidden">
      <img
        className="w-full"
        src="../../public/bg-main-mobile.png"
        alt="background-mobile"
      />
      <div className="absolute top-[35px] left-[72px] w-[285px]">
        <img src="../../bg-card-back.png" alt="card-back" />
      </div>
      <div className="absolute top-[125px] left-[16px] w-[285px]">
        <img
          className="absolute w-12 top-[19px] left-[22px]"
          src="../../card-logo.svg"
          alt="card-logo"
        />
        <img src="../../bg-card-front.png" alt="card-back" />
      </div>
    </div>
  );
};

export default Mobile;
