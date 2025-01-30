import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({ className, updateClick, updatedData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const inputClassName =
    "border outline-none border-[#d9d9d9] rounded-lg h-11 p-4 focus:border-[#220930] focus:outline-none";

  return (
    <form className={className}>
      <div className={`flex flex-col`}>
        <div className="flex flex-col">
          <label className="uppercase text-[10px] mb-2 text-[#220930]">
            {"Cardholder Name"}
          </label>
          <input
            className={inputClassName}
            type="text"
            // value={inputValues}
            // name={label}
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-[10px] mb-2 text-[#220930]">
            {"Card Number"}
          </label>
          <input
            className={inputClassName}
            type="text"
            // value={inputValues}
            // name=""
            placeholder={"e.g. 1234 5678 9123 0000"}
          />
        </div>
        <div className="flex">
          <label className="uppercase text-[10px] mb-2 text-[#220930]">
            {"Exp. Date (MM/YY)"}
          </label>
          <div className="flex gap-2 ">
            <input
              className={`${inputClassName} w-1/2 `}
              type="text"
              name=""
              id=""
              placeholder="MM"
            />
            <input
              className={`${inputClassName} w-1/2`}
              type="text"
              name=""
              id=""
              placeholder="YY"
            />
          </div>
        </div>
      </div>
      {/* <Input
        label="Cardholder Name"
        placeholder="e.g. Jane Appleseed"
        updatedData={updatedData}
      />
      <Input
        label="Card Number"
        placeholder="e.g. 1234 5678 9123 0000"
        updatedData={updatedData}
      />
      <div className="flex gap-4 mb-8">
        <Input
          label="Exp. Date (MM/YY)"
          placeholder={["MM", "YY"]}
          inputs={2}
        />
        <Input label="CVC" placeholder="e.g. 123" className="w-1/2" />
      </div> */}
      <Button
        className="h-14 w-full bg-[#220930] text-white rounded-lg"
        updateClick={updateClick}
      >
        {"Confirm"}
      </Button>
    </form>
  );
};

export default Form;
