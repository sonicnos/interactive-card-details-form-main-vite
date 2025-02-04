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
      // updateClick(true);
      event.preventDefault();
      if (!formData.cardholderName) {
        updateError({ cardholderName: "is blank" });
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
