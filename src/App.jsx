import { useState } from "react";
import "./App.css";
import Complete from "./components/Complete";
import Desktop from "./components/Desktop";
import Form from "./components/Form";
import Mobile from "./components/Mobile";

function App() {
  const [btnClicked, setBtnCliked] = useState(false);
  const [formData, setFormData] = useState({});
  const updateBtnClicked = (newClick) => {
    setBtnCliked(newClick);
  };

  const handleFormData = (data) => {
    setFormData(data);
    console.log("app data " + JSON.stringify(data));
  };

  return (
    <div className="h-screen flex flex-col min-[1350px]:gap-5 md:flex-row md:items-center font-primary">
      <Mobile />
      <Desktop
        className="max-[1350px]:hidden md:flex h-screen"
        formData={formData}
      />
      <div className="flex justify-center items-center h-full md:w-4/5 px-6">
        {btnClicked ? (
          <Complete updateClick={updateBtnClicked} />
        ) : (
          <Form
            className="flex flex-col gap-6 2xl:max-w-[400px] sm:justify-between sm:max-w-[300px]"
            updateClick={updateBtnClicked}
            updatedFromData={handleFormData}
          />
        )}
      </div>
    </div>
  );
}

export default App;
