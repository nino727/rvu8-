"use client";
import { useEffect, useState } from "react";

const themes = [
  { name: "Black & White", className: "" },
  { name: "Blue", className: "theme-blue" },
  { name: "Green", className: "theme-green" },
  { name: "Purple", className: "theme-purple" },
];

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  function setTheme(className: string, dark: boolean) {
    document.body.className = className + (dark ? " dark" : "");
    localStorage.setItem("theme", className);
    localStorage.setItem("dark", dark ? "1" : "0");
  }

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "";
    const dark = localStorage.getItem("dark") === "1";
    setIsDark(dark);
    document.body.className = saved + (dark ? " dark" : "");
  }, []);

  function handleThemeChange(className: string) {
    setTheme(className, isDark);
  }

  function handleDarkToggle() {
    setIsDark((prev) => {
      setTheme(localStorage.getItem("theme") || "", !prev);
      return !prev;
    });
  }

  return (
    <div className="flex gap-2 items-center">
      {themes.map((theme) => (
        <button
          key={theme.name}
          onClick={() => handleThemeChange(theme.className)}
          className="px-3 py-1 border rounded"
        >
          {theme.name}
        </button>
      ))}
      <button
        onClick={handleDarkToggle}
        className="px-3 py-1 border rounded ml-4"
        aria-pressed={isDark}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
} 