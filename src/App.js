import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function App() {

  const [dark, setDark] = useState(false)
  const [type, setType] = useState(0);

  useEffect(() => {
    if (dark)
      document.querySelector('body').className = "dark"
    else
      document.querySelector('body').className = ""
  }, [dark])

  return (
    <>
      <Header />
      <Main type={type} />
      <div className="switch" onClick={() => { setDark(!dark) }}></div>
      <div className="type">
        <ToggleButtonGroup value={type} size="small" exclusive={true}>
          <ToggleButton value={0} onClick={() => { setType(0) }}>
            Początkowe
          </ToggleButton>
          <ToggleButton value={1} onClick={() => { setType(1) }}>
            Stałe
          </ToggleButton>
          <ToggleButton value={2} onClick={() => { setType(2) }}>
            Zmienne
          </ToggleButton>
        </ToggleButtonGroup>
      </div >
    </>
  );
}

export default App;