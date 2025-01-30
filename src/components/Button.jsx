import React from "react";

const Button = ({ className, children, updateClick }) => {
  const handleClick = () => {
    if (children === "Confirm") {
      updateClick(true);
    }

    if (children === "Continue") {
      updateClick(false);
    }
  };
  return (
    <button
      className={className}
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
