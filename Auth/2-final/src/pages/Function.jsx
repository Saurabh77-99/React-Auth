import React, { useState, useEffect } from "react";
import { runBot } from "./bot";

function App() {
  const [botOutput, setBotOutput] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const output = runBot();
      setBotOutput(output);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Bot Output:</h1>
      <p>{botOutput}</p>
    </div>
  );
}

export default App;