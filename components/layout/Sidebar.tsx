"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  CheckSquare,
  Dumbbell,
  FileText,
  Calendar,
  Target,
  LineChart,
  Settings,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { APP_CONFIG } from "@/constants";

interface SidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  CheckSquare,
  Dumbbell,
  FileText,
  Calendar,
  Target,
  LineChart,
  Settings,
};

export function Sidebar({ mobileOpen = false, onMobileClose }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const navContent = (isMobile = false) => (
    <div className="flex flex-col h-full">
      {/* Brand Header */}
      <div className="flex items-center justify-between px-3.5 py-4 border-b">
        <Link href="/dashboard" className="flex items-center gap-3 overflow-hidden">
          <div className="h-9 w-9 rounded-xl bg-accent text-accent-foreground flex items-center justify-center font-bold font-display text-lg shrink-0 shadow-md">
            PTS
          </div>
          {(!collapsed || isMobile) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col min-w-0"
            >
              <span className="font-bold text-sm leading-none font-display tracking-wide truncate">
                {APP_CONFIG.name}
              </span>
              <span className="text-[10px] text-muted-foreground mt-1 truncate">
                Personal Operating System
              </span>
            </motion.div>
          )}
        </Link>

        {/* Mobile close button */}
        {isMobile && onMobileClose && (
          <button
            onClick={onMobileClose}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Close sidebar navigation"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {/* Desktop Collapse Toggle */}
        {!isMobile && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            aria-label={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        )}
      </div>

      {/* Nav List */}
      <nav className="flex-1 overflow-y-auto px-2.5 py-4 space-y-1" aria-label="Main Navigation">
        {APP_CONFIG.navItems.map((item) => {
          const IconComponent = ICON_MAP[item.icon] || Home;
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname?.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={isMobile && onMobileClose ? onMobileClose : undefined}
              className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                isActive
                  ? "text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
              title={collapsed && !isMobile ? item.label : undefined}
            >
              {/* Active Background Pill */}
              {isActive && (
                <motion.div
                  layoutId="sidebar-active-indicator"
                  className="absolute inset-0 bg-accent rounded-xl shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}

              <span className="relative z-10 shrink-0">
                <IconComponent className="h-4 w-4 transition-transform group-hover:scale-110" />
              </span>

              {(!collapsed || isMobile) && (
                <span className="relative z-10 truncate font-sans">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer Pro Badge / Status */}
      <div className="p-3 border-t bg-muted/20">
        {(!collapsed || isMobile) ? (
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-card border text-[11px] shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-accent shrink-0 animate-pulse" />
            <span className="font-medium truncate">PTS Pro Operating System</span>
          </div>
        ) : (
          <div className="flex justify-center" title="PTS Engine Active">
            <Sparkles className="h-4 w-4 text-accent animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Fixed Collapsible) */}
      <motion.aside
        animate={{ width: collapsed ? 72 : 240 }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="hidden md:flex flex-col border-r bg-card/60 backdrop-blur-md min-h-screen shrink-0 sticky top-0 h-screen z-20"
      >
        {navContent(false)}
      </motion.aside>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onMobileClose}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Sheet */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-72 max-w-[80vw] h-full bg-card border-r shadow-2xl z-10"
            >
              {navContent(true)}
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
