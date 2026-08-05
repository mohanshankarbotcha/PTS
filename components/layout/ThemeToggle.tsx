"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useThemeStore } from "@/store/useThemeStore";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const { setTheme: setZustandTheme } = useThemeStore();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-24 rounded-xl border bg-muted/40 animate-pulse" />;
  }

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
    setZustandTheme(newTheme);
  };

  const modes = [
    { key: "light", label: "Light Theme", icon: Sun },
    { key: "dark", label: "Dark Theme", icon: Moon },
    { key: "system", label: "System Theme", icon: Monitor },
  ] as const;

  return (
    <div className="flex items-center gap-0.5 rounded-xl border bg-card/60 p-1 shadow-subtle backdrop-blur-md">
      {modes.map((mode) => {
        const Icon = mode.icon;
        const isActive = theme === mode.key;
        return (
          <button
            key={mode.key}
            onClick={() => handleThemeChange(mode.key)}
            className="relative rounded-lg p-1.5 text-xs font-medium transition-colors focus-visible:outline-none"
            title={mode.label}
            aria-label={mode.label}
          >
            {isActive && (
              <motion.div
                layoutId="theme-active-pill"
                className="absolute inset-0 bg-accent text-accent-foreground rounded-lg shadow-sm"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className={`relative z-10 block transition-colors ${isActive ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              <Icon className="h-3.5 w-3.5" />
            </span>
          </button>
        );
      })}
    </div>
  );
}
