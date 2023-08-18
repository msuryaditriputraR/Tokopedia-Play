import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem("isDark") || false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList[isDark ? "add" : "remove"]("dark");
  }, [isDark]);

  return (
    <div
      className="order-1 cursor-pointer"
      aria-label="toggle theme"
      onClick={() => {
        setIsDark(!isDark);
        localStorage.setItem("isDark", isDark);
      }}
    >
      {isDark ? (
        <FiSun size={"1.45rem"} title="Toggle Theme" />
      ) : (
        <FiMoon size={"1.45rem"} title="Toggle Theme" />
      )}
    </div>
  );
};

export default ToggleTheme;
