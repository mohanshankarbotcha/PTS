"use client";

import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { GlobalNotificationContainer } from "./GlobalNotificationContainer";
import { ModalContainer } from "./ModalContainer";
import { LoadingOverlay } from "./LoadingOverlay";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  // If visiting the public root landing page (/), render standalone public layout
  const isPublicLanding = pathname === "/";

  if (isPublicLanding) {
    return (
      <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
        {children}
        <GlobalNotificationContainer />
        <ModalContainer />
        <LoadingOverlay isLoading={false} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Desktop & Mobile Responsive Sidebar */}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onMobileClose={() => setMobileSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation Bar */}
        <Navbar onToggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)} />

        {/* Main Content Area with Smooth Page Transition */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Global Containers & Overlays */}
      <GlobalNotificationContainer />
      <ModalContainer />
      <LoadingOverlay isLoading={false} />
    </div>
  );
}
