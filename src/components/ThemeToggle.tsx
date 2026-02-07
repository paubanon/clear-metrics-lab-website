"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full
        transition-colors duration-300
        bg-[var(--color-bg)] border border-[var(--color-border)]
        hover:border-[var(--color-primary)]"
      aria-label="Toggle theme"
    >
      <Sun
        className={`w-4 h-4 transition-all duration-300 ${
          theme === "light" ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"
        }`}
      />
      <div className="relative w-10 h-6">
        <div
          className={`absolute inset-0 rounded-full transition-colors duration-300 ${
            theme === "dark" ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)]"
          }`}
        />
        <div
          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white
            transition-transform duration-300 ${
            theme === "dark" ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </div>
      <Moon
        className={`w-4 h-4 transition-all duration-300 ${
          theme === "dark" ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"
        }`}
      />
    </button>
  );
}
