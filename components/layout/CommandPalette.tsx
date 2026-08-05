"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Home,
  CheckSquare,
  Dumbbell,
  FileText,
  Calendar,
  Target,
  LineChart,
  Settings,
  X,
  ArrowRight,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const COMMAND_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: Home, category: "Navigation" },
  { label: "Tasks", href: "/tasks", icon: CheckSquare, category: "Navigation" },
  { label: "Workout Tracking", href: "/workouts", icon: Dumbbell, category: "Navigation" },
  { label: "Notes & Docs", href: "/notes", icon: FileText, category: "Navigation" },
  { label: "Calendar", href: "/calendar", icon: Calendar, category: "Navigation" },
  { label: "Goals & Habits", href: "/goals", icon: Target, category: "Navigation" },
  { label: "Analytics", href: "/analytics", icon: LineChart, category: "Navigation" },
  { label: "Settings", href: "/settings", icon: Settings, category: "Navigation" },
];

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredItems = COMMAND_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = useCallback(
    (href: string) => {
      onClose();
      setQuery("");
      router.push(href);
    },
    [onClose, router]
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredItems[selectedIndex].href);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-xl rounded-2xl border bg-card text-card-foreground shadow-2xl overflow-hidden z-10"
            onKeyDown={handleListKeyDown}
          >
            {/* Search Input Bar */}
            <div className="flex items-center border-b px-4 py-3">
              <Search className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-muted-foreground"
              />
              {query ? (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 text-muted-foreground hover:text-foreground rounded-md"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : (
                <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  ESC
                </kbd>
              )}
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No matching commands found.
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Navigation Commands
                  </div>
                  {filteredItems.map((item, index) => {
                    const Icon = item.icon;
                    const isSelected = index === selectedIndex;
                    return (
                      <div
                        key={item.href}
                        onClick={() => handleSelect(item.href)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all cursor-pointer ${
                          isSelected
                            ? "bg-accent text-accent-foreground shadow-sm"
                            : "hover:bg-muted/50 text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4 shrink-0" />
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs opacity-60">{item.category}</span>
                          <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Recent Searches Placeholder Footer */}
              {!query && (
                <div className="mt-2 pt-2 border-t px-3 py-1.5 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" /> Recent: Tasks, Workouts
                  </span>
                  <span>Use ↑ ↓ to navigate</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
