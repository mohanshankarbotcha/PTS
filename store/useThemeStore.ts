import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ThemeMode } from "@/types";

interface ThemeState {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "pts-theme-storage",
    }
  )
);
