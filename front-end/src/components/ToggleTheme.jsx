import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

const ToggleTheme = () => {
  const [colorTheme, setTheme] = useTheme();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false,
  );

  return (
    <div
      className="order-1 cursor-pointer"
      aria-label="toggle theme"
      onClick={() => {
        setTheme(colorTheme);
        setDarkSide(!darkSide);
      }}
    >
      {darkSide ? (
        <FiSun size={"1.35rem"} title="Toggle Theme" />
      ) : (
        <FiMoon size={"1.35rem"} title="Toggle Theme" />
      )}
    </div>
  );
};

export default ToggleTheme;
