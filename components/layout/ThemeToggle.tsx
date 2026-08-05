"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useThemeStore } from "@/store/useThemeStore";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const { setTheme: setZustandTheme } = useThemeStore();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9 rounded-md border bg-muted/40 animate-pulse" />;
  }

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
    setZustandTheme(newTheme);
  };

  return (
    <div className="flex items-center gap-1 rounded-lg border bg-background/50 p-1 shadow-sm backdrop-blur-sm">
      <button
        onClick={() => handleThemeChange("light")}
        className={`rounded-md p-1.5 text-xs font-medium transition-all ${
          theme === "light"
            ? "bg-accent text-accent-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        title="Light Mode"
        aria-label="Light Theme"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className={`rounded-md p-1.5 text-xs font-medium transition-all ${
          theme === "dark"
            ? "bg-accent text-accent-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        title="Dark Mode"
        aria-label="Dark Theme"
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        onClick={() => handleThemeChange("system")}
        className={`rounded-md p-1.5 text-xs font-medium transition-all ${
          theme === "system"
            ? "bg-accent text-accent-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        title="System Preference"
        aria-label="System Theme"
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  );
}
