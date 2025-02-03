import React, { useState } from "react";

const Desktop = ({ className, formData }) => {
  return (
    <div className={`${className} relative`}>
      <img
        className="w-[600px]"
        src="../../public/bg-main-desktop.png"
        alt="background-desktop"
      />
      <div className="absolute top-[470px] left-[350px] w-[500px]">
        <img src="../../bg-card-back.png" alt="card-back" />
        <p className="absolute top-[108px] left-[365px] text-white font-bold">
          {!formData.CVC ? "000" : formData.CVC}
        </p>
      </div>
      <div className="absolute top-[150px] left-[250px] w-[500px]">
        <img
          className="absolute top-[30px] left-[40px]"
          src="../../card-logo.svg"
          alt="card-logo"
        />

        <img src="../../bg-card-front.png" alt="card-back" />
        <p className="absolute top-[140px] left-[40px] text-white flex gap-5 text-3xl">
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
        </p>
        <div className="flex justify-between w-[350px] absolute top-[200px] left-[40px] text-white uppercase text-md">
          <p>
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

export default Desktop;
