import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {

  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark)
      document.querySelector('body').className = "dark"
    else
      document.querySelector('body').className = ""
  }, [dark])

  return (
    <>
      <Header />
      <Main />
      <div className="switch" onClick={() => { setDark(!dark) }}></div>
    </>
  );
}

export default App;