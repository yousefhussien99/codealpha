import Tool from "./components/Tool";
import Preview from "./components/Preview";
import { useState } from "react";

function App() {
  let [type, setType] = useState("normal"); // determine color mode
  
  let [normalColor, setNormalColor] = useState(
    '#'+Math.floor(Math.random() * 16777215).toString(16)
  ); // store initial random normal color value
  let [grad, setGrad] = useState({
    c1: '#'+Math.floor(Math.random() * 16777215).toString(16),
    c2:'#'+ Math.floor(Math.random() * 16777215).toString(16),
  }); // store random initial gradient colors value

  let [direction, setDirection] = useState("left"); // store direction of linear gradient
  let [dirRadial, setDirRadial] = useState("circle"); // store direction of radial gradient

  // event handler functions
  function handleType(event) {
    let value = event.target.value;
    setType(value);
  }

  function handleColor(event) {
    let value = event.target.value;
    setNormalColor(value);
  }

  function handleDirection(event) {
    let value = event.target.value;
    setDirection(value);
  }

  function handleGradient(event) {
    let value = event.target.value;
    let name = event.target.name;
    if (name == "color1") {
      setGrad((prev) => ({ ...prev, c1: value }));
    } else {
      setGrad((prev) => ({ ...prev, c2: value }));
    }
  }

  function handleRadialDirection(event) {
    let value = event.target.value;
    setDirRadial(value);
  }
  console.log(Math.floor(Math.random() * 16777215).toString(16))

  return (
    <>
      <div
        className="d-flex flex-column flex-md-row"
        style={
          type == "normal"
            ? { backgroundColor: normalColor }
            : type == "lgradient"
            ? {
                backgroundImage: `linear-gradient(to ${direction},${grad.c1},${grad.c2})`,
              }
            : {
                backgroundImage: `radial-gradient(${dirRadial},${grad.c1} ,${grad.c2})`,
              }
        }
      >
        <Tool
          type={type}
          normalColor={normalColor}
          handleType={handleType}
          handleColor={handleColor}
          handleDirection={handleDirection}
          direction={direction}
          grad={grad}
          handleGradient={handleGradient}
          dirRadial={dirRadial}
          handleRadialDirection={handleRadialDirection}
        />
        <Preview
          type={type}
          normalColor={normalColor}
          grad={grad}
          dir={direction}
          dirRadial={dirRadial}
        />
      </div>
    </>
  );
}

export default App;
