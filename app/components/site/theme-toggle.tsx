"use client";

import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "portfolio-theme";

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";

    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;

    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // The selected theme still applies when browser storage is unavailable.
    }
  }

  return (
    <button
      aria-label="Toggle color theme"
      className="theme-toggle grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border border-white/13 bg-white/[0.025] text-zinc-300 transition-[color,background-color,border-color,transform] hover:border-red-500/40 hover:text-white active:scale-95"
      onClick={toggleTheme}
      title="Toggle color theme"
      type="button"
    >
      <Sun aria-hidden="true" className="theme-icon-light size-4.5" />
      <Moon aria-hidden="true" className="theme-icon-dark size-4.5" />
    </button>
  );
}
