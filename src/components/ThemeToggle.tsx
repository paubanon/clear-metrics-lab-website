"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center gap-3 px-2 py-2 rounded-full
        transition-all duration-300
        hover:scale-105"
      style={{
        backgroundColor: "var(--color-bg)",
        border: "2px solid var(--color-border)",
      }}
      aria-label="Toggle theme"
    >
      {/* Sun Icon */}
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
        style={{
          backgroundColor: theme === "light" ? "var(--color-primary)" : "transparent",
        }}
      >
        <Sun
          className="w-5 h-5 transition-all duration-300"
          style={{
            color: theme === "light" ? "#FFFFFF" : "var(--color-text-muted)",
          }}
        />
      </div>

      {/* Moon Icon */}
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
        style={{
          backgroundColor: theme === "dark" ? "var(--color-primary)" : "transparent",
        }}
      >
        <Moon
          className="w-5 h-5 transition-all duration-300"
          style={{
            color: theme === "dark" ? "#FFFFFF" : "var(--color-text-muted)",
          }}
        />
      </div>
    </button>
  );
}
