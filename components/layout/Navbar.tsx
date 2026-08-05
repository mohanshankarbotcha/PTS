"use client";

import React, { useState } from "react";
import { Menu, Bell } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
import { GlobalSearch } from "./GlobalSearch";
import { ThemeToggle } from "./ThemeToggle";
import { UserDropdown } from "./UserDropdown";
import { CommandPalette } from "./CommandPalette";
import { NotificationPanel } from "./NotificationPanel";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onToggleMobileSidebar: () => void;
}

export function Navbar({ onToggleMobileSidebar }: NavbarProps) {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 px-4 md:px-6 backdrop-blur-md transition-shadow">
        {/* Left Side: Mobile Menu Button & Breadcrumbs */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleMobileSidebar}
            className="md:hidden text-muted-foreground hover:text-foreground"
            aria-label="Open navigation sidebar"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <Breadcrumbs />
        </div>

        {/* Right Side: Global Search, Notification Bell, Theme Toggle, User Dropdown */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Global Search Bar */}
          <GlobalSearch onOpen={() => setIsCommandOpen(true)} />

          {/* Notification Trigger Button */}
          <button
            onClick={() => setIsNotificationsOpen(true)}
            className="relative p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            aria-label="Open notifications panel"
            title="Notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent ring-2 ring-background animate-pulse" />
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* User Profile Dropdown */}
          <UserDropdown />
        </div>
      </header>

      {/* Global Interactive Overlays */}
      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
      <NotificationPanel isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
    </>
  );
}
