import { useState } from "react";
import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("light");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      setModeText("dark");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="Text Utils"
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
      />
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
