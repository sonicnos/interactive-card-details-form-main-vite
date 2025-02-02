import React, { useState } from "react";
import Button from "./Button"; // Make sure to import the Button component

const Form = ({ className, updateClick, updatedFromData }) => {
  const [error, setError] = useState({
    cardholderName: false,
    cardNumber: false,
    MM: false,
    YY: false,
    CVC: false,
  });
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    MM: "",
    YY: "",
    CVC: "",
  });

  const inputClassName =
    "border outline-none border-[#d9d9d9] rounded-lg h-11 p-4 focus:border-[#220930] focus:outline-none";
  const labelClassName = "uppercase text-[10px] mb-3 text-[#220930]";

  const handleError = (newError) => {
    const { name, value } = newError;
    setError((prevError) => ({
      ...prevError,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: value,
      };
      updatedFromData(updatedFormData);
      return updatedFormData;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label className={labelClassName}>{"Cardholder Name"}</label>
          <input
            className={inputClassName}
            type="text"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div className="flex flex-col">
          <label className={labelClassName}>{"Card Number"}</label>
          <input
            className={inputClassName}
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <label className={labelClassName}>{"Exp. Date (MM/YY)"}</label>
            <div className="flex gap-2 ">
              <input
                className={`${inputClassName} w-1/2 `}
                type="text"
                name="MM"
                value={formData.MM}
                onChange={handleChange}
                placeholder="MM"
              />
              <input
                className={`${inputClassName} w-1/2`}
                type="text"
                name="YY"
                value={formData.YY}
                onChange={handleChange}
                placeholder="YY"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className={labelClassName}>{"CVC"}</label>
            <input
              className={inputClassName}
              type="text"
              name="CVC"
              value={formData.CVC}
              onChange={handleChange}
              placeholder="e.g. 123"
            />
          </div>
        </div>
      </div>

      <Button
        className="h-14 w-full bg-[#220930] text-white rounded-lg"
        updateClick={updateClick}
        formData={formData}
        updateError={handleError}
      >
        {"Confirm"}
      </Button>
    </form>
  );
};

export default Form;
