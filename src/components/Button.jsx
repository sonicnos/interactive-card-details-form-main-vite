import React from "react";

const Button = ({
  className,
  children,
  updateClick,
  formData,
  updateError,
}) => {
  const handleClick = () => {
    if (children === "Confirm") {
      updateClick(true);
      event.preventDefault();
      console.log("Form Data:", formData.cardholderName);
      // if (!formData.cardholderName) {

      // }
      console.log(updateError.cardholderName);
    }

    if (children === "Continue") {
      updateClick(false);
    }
  };
  return (
    <button
      type="submit"
      className={`${className} hover:opacity-95 cursor-pointer`}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
