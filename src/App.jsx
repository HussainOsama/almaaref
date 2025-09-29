import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AlMaarefPage from "./almaaref_profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AlMaarefPage />
    </>
  );
}

export default App;
