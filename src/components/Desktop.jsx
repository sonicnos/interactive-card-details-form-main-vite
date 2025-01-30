import React from "react";

const Desktop = ({ className }) => {
  return (
    <div className={`${className} relative`}>
      <img
        className="w-[400px]"
        src="../../public/bg-main-desktop.png"
        alt="background-desktop"
      />
      <div className="absolute top-[470px] left-[250px] w-[450px]">
        <img src="../../bg-card-back.png" alt="card-back" />
        <p className="absolute top-[108px] left-[365px] text-white font-bold">
          000
        </p>
      </div>
      <div className="absolute top-[150px] left-[150px] w-[450px]">
        <img
          className="absolute top-[30px] left-[40px]"
          src="../../card-logo.svg"
          alt="card-logo"
        />

        <img src="../../bg-card-front.png" alt="card-back" />
        <p className="absolute top-[150px] left-[40px] text-white flex gap-5 text-2xl">
          <div className="">0000</div>
          <div className="">0000</div>
          <div className="">0000</div>
          <div className="">0000</div>
        </p>
        <div className="flex justify-between w-[350px] absolute top-[200px] left-[40px] text-white uppercase text-md">
          <p>name</p>
          <p>09/10</p>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
