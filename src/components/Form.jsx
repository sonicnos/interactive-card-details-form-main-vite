import React, { useState } from "react";
import Button from "./Button"; // Make sure to import the Button component
import Error from "./Error";

const Form = ({ className, updateClick, updatedFromData }) => {
  const [error, setError] = useState({
    cardholderName: "",
    cardNumber: "",
    MM: "",
    YY: "",
    CVC: "",
  });

  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    MM: "",
    YY: "",
    CVC: "",
  });

  const inputClassName =
    "border outline-none border-[#d9d9d9] rounded-lg h-11 p-4 focus:border-[#220930] focus:outline-none w-full";
  const labelClassName = "uppercase text-xs mb-3 text-[#220930]";

  const handleError = (newError) => {
    const [[name, value]] = Object.entries(newError);

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

  console.log("form.jsx: " + JSON.stringify(error));
  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label className={labelClassName}>{"Cardholder Name"}</label>
          <input
            className={inputClassName}
            type="text"
            name="cardholderName"
            maxLength={29}
            value={formData.cardholderName}
            onChange={handleChange}
            placeholder="e.g. Jane Appleseed"
          />
          {error.cardholderName && <Error text={error.cardholderName} />}
        </div>
        <div className="flex flex-col">
          <label className={labelClassName}>{"Card Number"}</label>
          <input
            className={inputClassName}
            type="text"
            name="cardNumber"
            maxLength={16}
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="e.g. 1234 5678 9123 0000"
          />
          {error.cardNumber && <Error text={error.cardNumber} />}
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <label className={labelClassName}>{"Exp. Date (MM/YY)"}</label>
            <div className="flex gap-2 ">
              <div className="flex flex-col">
                <input
                  className={`${inputClassName} w-1/2 `}
                  type="text"
                  name="MM"
                  maxLength={2}
                  value={formData.MM}
                  onChange={handleChange}
                  placeholder="MM"
                />
                {error.MM && <Error text={error.MM} />}
              </div>
              <div className="flex flex-col">
                <input
                  className={`${inputClassName} w-1/2`}
                  type="text"
                  name="YY"
                  maxLength={2}
                  value={formData.YY}
                  onChange={handleChange}
                  placeholder="YY"
                />
                {error.YY && <Error text={error.YY} />}
              </div>
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
              maxLength={3}
            />
            {error.CVC && <Error text={error.CVC} />}
          </div>
        </div>
      </div>

      <Button
        className="h-14 w-full bg-[#220930] text-white rounded-lg"
        updateClick={updateClick}
        formData={formData}
        updateError={handleError}
        error={error}
      >
        {"Confirm"}
      </Button>
    </form>
  );
};

export default Form;
