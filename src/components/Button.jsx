import React from "react";

const Button = ({ className }) => {
  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault();
        console.log("btn click");
      }}
    >
      Confirm
    </button>
  );
};

export default Button;
