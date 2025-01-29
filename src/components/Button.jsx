import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault();
        console.log("btn click");
      }}
    >
      {children}
    </button>
  );
};

export default Button;
