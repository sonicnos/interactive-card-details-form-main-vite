import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({ className, updateClick }) => {
  return (
    <form className={className}>
      <Input label="Cardholder Name" placeholder="e.g. Jane Appleseed" />
      <Input label="Card Number" placeholder="e.g. 1234 5678 9123 0000" />
      <div className="flex gap-4 mb-8">
        <Input
          label="Exp. Date (MM/YY)"
          placeholder={["MM", "YY"]}
          inputs={2}
        />
        <Input label="CVC" placeholder="e.g. 123" className="w-1/2" />
      </div>
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
