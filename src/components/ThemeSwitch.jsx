import { useState } from "react";

const ThemeSwitch = () => {
  const [dark, setDark] = useState(false);

  const handleClick = (e) => {
    dark
      ? (document.querySelector("body").className = "dark")
      : (document.querySelector("body").className = "");
    setDark(!dark);
  };

  return <div className="switch" onClick={handleClick}></div>;
};

export default ThemeSwitch;
