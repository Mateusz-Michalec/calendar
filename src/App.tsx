import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { generateDate } from "./utils/calendar";

function App() {
  const calendar = generateDate();
  return <div></div>;
}

export default App;
