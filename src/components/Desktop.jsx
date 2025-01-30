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
        <p className="absolute top-[108px] left-[365px] text-white">000</p>
      </div>
      <div className="absolute top-[150px] left-[150px] w-[450px]">
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

export default Desktop;
