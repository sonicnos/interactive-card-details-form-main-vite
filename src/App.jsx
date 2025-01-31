import { useState } from "react";
import "./App.css";
import Complete from "./components/Complete";
import Desktop from "./components/Desktop";
import Form from "./components/Form";
import Mobile from "./components/Mobile";

function App() {
  const [btnClicked, setBtnCliked] = useState(false);
  const [tempData, setTempData] = useState("");
  const [data, setData] = useState("");
  const updateBtnClicked = (newClick) => {
    setBtnCliked(newClick);
  };

  const updatedData = (newData) => {
    if (!btnClicked) {
      setData(newData);
    }
  };

  console.log("dataaaa" + data);

  console.log(btnClicked);
  return (
    <div className="h-screen flex flex-col min-[1350px]:gap-5 md:flex-row md:items-center font-primary">
      <Mobile />
      <Desktop className="max-[1350px]:hidden md:flex h-screen" />
      <div className="flex justify-center items-center h-full md:w-4/5 px-6">
        {btnClicked ? (
          <Complete updateClick={updateBtnClicked} />
        ) : (
          <Form
            className="flex flex-col gap-6 2xl:max-w-[500px] sm:justify-between sm:max-w-[400px]"
            updateClick={updateBtnClicked}
            updatedData={updatedData}
          />
        )}
      </div>
    </div>
  );
}

export default App;
