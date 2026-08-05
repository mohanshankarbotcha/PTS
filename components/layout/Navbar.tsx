"use client";

import React from "react";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 px-4 md:px-6 backdrop-blur-md">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button (Infrastructure Ready) */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open mobile navigation menu"
          title="Toggle Navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <h1 className="text-lg font-semibold tracking-tight font-display">
          Personal Tracking System
        </h1>
        <span className="hidden sm:inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
          Foundation Engine
        </span>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <div
          className="h-8 w-8 rounded-full bg-muted border flex items-center justify-center text-xs font-medium text-muted-foreground shadow-sm select-none"
          title="System User Profile Placeholder"
          aria-label="User Profile"
        >
          SYS
        </div>
      </div>
    </header>
  );
}
