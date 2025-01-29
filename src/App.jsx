import "./App.css";
import Complete from "./components/Complete";
import Desktop from "./components/Desktop";
import Form from "./components/Form";
import Mobile from "./components/Mobile";

function App() {
  return (
    <div className="h-screen flex flex-col min-[400px]:gap-5 md:flex-row md:items-center">
      <Mobile />
      <Desktop className="w-full min-[400px]:hidden md:flex h-screen" />
      <Form className="flex flex-col px-7 gap-6 max-w-[500px]" />

      {/* <Complete /> */}
    </div>
  );
}

export default App;
