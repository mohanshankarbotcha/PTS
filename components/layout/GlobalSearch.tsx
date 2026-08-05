"use client";

import React from "react";
import { Search } from "lucide-react";

interface GlobalSearchProps {
  onOpen: () => void;
}

export function GlobalSearch({ onOpen }: GlobalSearchProps) {
  return (
    <button
      onClick={onOpen}
      className="flex items-center justify-between w-48 sm:w-64 h-9 px-3 rounded-xl border bg-muted/30 text-xs text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-all shadow-subtle group"
      aria-label="Open Command Palette Search"
    >
      <div className="flex items-center gap-2">
        <Search className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
        <span className="truncate">Search or jump to...</span>
      </div>
      <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-80 shadow-xs">
        <span className="text-[11px]">⌘</span>K
      </kbd>
    </button>
  );
}
