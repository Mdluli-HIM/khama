"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    const isDark =
      resolvedTheme === "dark" ||
      document.documentElement.classList.contains("dark");

    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      className="reader-theme reader-theme-wide"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      type="button"
    >
      <Moon size={12} className="theme-moon" />
      <Sun size={12} className="theme-sun" />
      <span className="theme-label-dark">Light</span>
      <span className="theme-label-light">Dark</span>
    </button>
  );
}
