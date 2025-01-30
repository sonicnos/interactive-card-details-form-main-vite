import Button from "./Button";

const Complete = ({ updateClick }) => {
  return (
    <div className="w-[380px] flex flex-col items-center">
      <img
        className="h-20 w-20 mb-10"
        src="../../public/icon-complete.svg"
        alt="icon-complete"
      />
      <h1 className="mb-8 uppercase text-4xl">{"Thank you!"}</h1>
      <h3 className="mb-14 text-xl">{"We've added your card details"}</h3>
      <Button
        className="h-14 w-full bg-[#220930] text-white rounded-lg"
        updateClick={updateClick}
      >
        {"Continue"}
      </Button>
    </div>
  );
};

export default Complete;
