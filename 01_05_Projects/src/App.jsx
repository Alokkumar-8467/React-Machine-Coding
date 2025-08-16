import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Components/Counter";
import DebouncedSearch from "./Components/DebouncedSearch";
import ChipsInput from "./Components/ChipsInput";
import Text from "./Components/text";
import Accordian from "./Components/Accordian";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ChipsInput /> */}
      {/* <DebouncedSearch /> */}
      {/* <Text /> */}
      {/* <Counter /> */}
      <Accordian />
    </>
  );
}

export default App;
