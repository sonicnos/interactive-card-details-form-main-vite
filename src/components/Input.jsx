import React, { useState } from "react";

const Input = ({ className, label, placeholder, inputs, updatedData }) => {
  const inputClassName =
    "border outline-none border-[#d9d9d9] rounded-lg h-11 p-4 focus:border-[#220930] focus:outline-none";

  const [inputValues, setInputValues] = useState("");
  const [inputAllValues, setInputAllValues] = useState("");

  const handleChange = (e) => {
    setInputValues(e.target.value);
    updatedData(e.target.value);
  };

  const handleSubmit = (e) => {
    updatedData(e.target.value);
  };
  // console.log(inputValues);
  // console.log(inputAllValues.name);
  return (
    <>
      <div className={`flex flex-col ${className}`}>
        <label className="uppercase text-[10px] mb-2 text-[#220930]">
          {label}
        </label>
        <input
          className={inputClassName}
          type="text"
          value={inputValues}
          name={label}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <label className="uppercase text-[10px] mb-2 text-[#220930]">
          {label}
        </label>
        <input
          className={inputClassName}
          type="text"
          value={inputValues}
          name={label}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <label className="uppercase text-[10px] mb-2 text-[#220930]">
          {label}
        </label>
        <div className="flex gap-2 ">
          <input
            className={`${inputClassName} w-1/2 `}
            type="text"
            name=""
            id=""
            placeholder={placeholder[0]}
          />
          <input
            className={`${inputClassName} w-1/2`}
            type="text"
            name=""
            id=""
            placeholder={placeholder[1]}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
