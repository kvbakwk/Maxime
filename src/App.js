import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import ThemeSwitch from "./components/ThemeSwitch";
import CostsSwitch from "./components/costs/CostsSwitch";

const App = () => {
  const [costsType, setCostsType] = useState(0);

  return (
    <>
      <Header />
      <Main costsType={costsType} />
      <ThemeSwitch />
      <CostsSwitch costsType={costsType} setCostsType={setCostsType} />
    </>
  );
};

export default App;
