
import React from "react"; 
import { useTheme } from "next-themes";
import {BiMoon} from "react-icons/bi"
import { BsSunFill } from "react-icons/bs";

export default function Button() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <BiMoon /> : <BsSunFill />}
      </button>
    </div>
  );
}
