"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { User, Settings, HelpCircle, LogOut, Moon, Sun, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useThemeStore } from "@/store/useThemeStore";

export function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const { setTheme: setZustandTheme } = useThemeStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    setZustandTheme(nextTheme as any);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1 rounded-full hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="User account menu"
      >
        <div className="h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold shadow-sm ring-2 ring-background">
          SYS
        </div>
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground hidden sm:block" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-56 rounded-2xl border bg-card text-card-foreground shadow-xl p-1.5 z-50 divide-y divide-border/60"
          >
            {/* Header info */}
            <div className="px-3 py-2.5 mb-1">
              <p className="font-semibold text-sm leading-none">System Administrator</p>
              <p className="text-xs text-muted-foreground mt-1 truncate">admin@pts-app.com</p>
            </div>

            {/* Navigation links */}
            <div className="py-1 space-y-0.5">
              <Link
                href="/settings"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Profile Settings</span>
              </Link>
              <Link
                href="/settings"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Settings className="h-4 w-4" />
                <span>App Preferences</span>
              </Link>
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors text-left"
              >
                <div className="flex items-center gap-2.5">
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  <span>Toggle Appearance</span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">
                  {theme}
                </span>
              </button>
            </div>

            {/* Support & Logout */}
            <div className="pt-1 mt-1 space-y-0.5">
              <a
                href="#help"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Help & Documentation</span>
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-destructive rounded-xl hover:bg-destructive/10 transition-colors text-left"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
