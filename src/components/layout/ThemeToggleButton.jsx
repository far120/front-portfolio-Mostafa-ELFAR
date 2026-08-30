import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      {theme === "light" ? <FiMoon /> : <FiSun />}
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}