import { useState } from "react";
import "./App.css";
import Complete from "./components/Complete";
import Desktop from "./components/Desktop";
import Form from "./components/Form";
import Mobile from "./components/Mobile";

function App() {
  const [btnClicked, setBtnCliked] = useState(false);
  const updateBtnClicked = (newClick) => {
    setBtnCliked(newClick);
  };
  console.log(btnClicked);
  return (
    <div className="h-screen flex flex-col min-[1350px]:gap-5 md:flex-row md:items-center font-display">
      <Mobile />
      <Desktop className="max-[1350px]:hidden md:flex h-screen" />
      <div className="flex justify-center items-center h-full w-4/5">
        {btnClicked ? (
          <Complete updateClick={updateBtnClicked} />
        ) : (
          <Form
            className="flex flex-col px-7 gap-6 2xl:max-w-[500px] sm:justify-between sm:max-w-[400px]"
            updateClick={updateBtnClicked}
          />
        )}
      </div>
    </div>
  );
}

export default App;
