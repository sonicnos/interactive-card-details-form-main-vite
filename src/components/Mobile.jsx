import React from "react";

const Mobile = ({ formData }) => {
  return (
    <div className="w-full lg:hidden relative ">
      <img
        className="w-full h-6/8 overflow-hidden"
        src="../../public/bg-main-mobile.png"
        alt="background-mobile"
      />
      <div className="absolute top-[90px] left-[90px] sm:top-[190px] sm:left-[190px] w-[350px]">
        <img src="../../bg-card-back.png" alt="card-back" />
        <p className="absolute top-[84px] left-[275px] sm:top-[84px] sm:left-[275px]  text-white text-sm font-bold">
          {!formData.CVC ? "000" : formData.CVC}
        </p>
      </div>
      <div className="absolute top-[200px] left-[26px] sm:top-[300px] sm:left-[126px]  w-[350px]">
        <img
          className="absolute w-12 top-[19px] left-[22px]"
          src="../../card-logo.svg"
          alt="card-logo"
        />
        <img src="../../bg-card-front.png" alt="card-back" />
        <div className="flex gap-5 absolute top-[105px] left-[22px] text-white text-2xl">
          <div>
            {!formData.cardNumber ? "0000" : formData.cardNumber.substr(0, 4)}
          </div>
          <div>
            {!formData.cardNumber ? "0000" : formData.cardNumber.substr(4, 4)}
          </div>
          <div>
            {!formData.cardNumber ? "0000" : formData.cardNumber.substr(8, 4)}
          </div>
          <div>
            {!formData.cardNumber ? "0000" : formData.cardNumber.substr(12, 4)}
          </div>
        </div>
        <div className="flex justify-between w-[305px] absolute top-[150px] left-[22px] text-white">
          <p className="uppercase">
            {!formData.cardholderName
              ? "Jane Appleseed"
              : formData.cardholderName}
          </p>
          <p>
            {!formData.MM ? "00" : formData.MM}/
            {!formData.YY ? "00" : formData.YY}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
