import React from "react";

const Input = ({ className, label, placeholder, inputs }) => {
  const inputClassName = "border border-[#d9d9d9] rounded-lg h-11 p-4";
  return (
    <>
      {inputs === 2 ? (
        <div className={`flex flex-col ${className}`}>
          <label className="uppercase text-sm">{label}</label>
          <div className="flex gap-2">
            <input
              className={`${inputClassName} w-1/2`}
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
      ) : (
        <div className={`flex flex-col ${className}`}>
          <label className="uppercase text-sm">{label}</label>
          <input
            className={inputClassName}
            type="text"
            name=""
            id=""
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
};

export default Input;
