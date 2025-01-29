import "./App.css";
import Complete from "./components/Complete";
import Form from "./components/Form";

function App() {
  return (
    <div className="h-screen flex flex-col gap-24">
      <div className="w-full">
        <img
          className="w-full"
          src="../../public/bg-main-mobile.png"
          alt="background-mobile"
        />
        <div className="absolute top-[35px] left-[72px] w-[285px]">
          <img src="../../bg-card-back.png" alt="card-back" />
        </div>
        <div className="absolute top-[125px] left-[16px] w-[285px]">
          <img
            className="absolute w-12 top-[19px] left-[22px]"
            src="../../card-logo.svg"
            alt="card-logo"
          />
          <img src="../../bg-card-front.png" alt="card-back" />
        </div>
      </div>
      <Form className="flex flex-col px-7 gap-6" />
      {/* <Complete /> */}
    </div>
  );
}

export default App;
