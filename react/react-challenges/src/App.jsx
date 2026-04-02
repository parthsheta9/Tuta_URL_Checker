import { useRef, useState } from "react";

import "./App.css";

function App() {
  const [counterState, setCounterState] = useState(0);
  const counterRef = useRef(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Couter State</h2>
        <button
          onClick={() => {
            setCounterState(counterState + 1);
          }}
        >
          Increment {"   "}
        </button>
        <button
          onClick={() => {
            setCounterState(counterState - 1);
          }}
        >
          Dencrement {"   "}
        </button>
        <h1>State Value : {counterState}</h1>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Ref State</h2>
        <button onClick={() => counterRef.current++}>Increment </button>
        <button onClick={() => counterRef.current--}>Dencrement </button>
        <h1>Ref Value : {counterRef.current}</h1>
      </div>
    </>
  );
}

export default App;
