"use client";

import React from "react";
import { APP_CONFIG } from "@/constants";

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-card/50 backdrop-blur-md p-4 min-h-screen">
      <div className="flex items-center gap-3 px-2 py-3 border-b mb-4">
        <div className="h-8 w-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-bold font-display text-lg">
          PTS
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm leading-none">{APP_CONFIG.name}</span>
          <span className="text-[11px] text-muted-foreground mt-1">Personal OS Foundation</span>
        </div>
      </div>

      <div className="flex-1 space-y-1">
        {/* Placeholder Navigation Items for Architecture */}
        <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Architecture Modules (Placeholder)
        </div>
        {APP_CONFIG.navItems.map((item) => (
          <div
            key={item.href}
            className="flex items-center gap-3 px-3 py-2 text-sm rounded-md text-muted-foreground hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t text-xs text-muted-foreground text-center">
        Foundation Engine v{APP_CONFIG.version}
      </div>
    </aside>
  );
}
