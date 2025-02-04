import React, { useState } from "react";

const Button = ({
  className,
  children,
  updateClick,
  formData,
  updateError,
  error,
}) => {
  const [errorInit, setErrorInit] = useState({
    cardholderName: "",
    cardNumber: "",
    MM: "",
    YY: "",
    CVC: "",
  });

  const handleClick = (event) => {
    event.preventDefault();
    if (children === "Confirm") {
      if (!formData.cardholderName) {
        updateError({
          ...errorInit,
          cardholderName: "is blank",
        });
      }
      if (!formData.cardNumber) {
        updateError({
          ...errorInit,
          cardNumber: "is blank",
        });
      }
      if (!formData.MM) {
        updateError({
          ...errorInit,
          MM: "is blank",
        });
      }
      if (!formData.YY) {
        updateError({
          ...errorInit,
          YY: "is blank",
        });
      }
      if (!formData.CVC) {
        updateError({
          ...errorInit,
          CVC: "is blank",
        });
      }
    }

    if (children === "Continue") {
      updateClick(false);
    }
  };

  return (
    <button
      type="submit"
      className={`${className} hover:opacity-93 cursor-pointer`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
