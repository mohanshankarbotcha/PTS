import React from "react";
import { cn } from "@/lib/utils";

export function ListSkeleton({ items = 4, className }: { items?: number; className?: string }) {
  return (
    <div className={cn("space-y-3 animate-pulse", className)}>
      {Array.from({ length: items }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 rounded-xl border bg-card/60"
        >
          <div className="h-10 w-10 rounded-lg bg-muted/80 shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-1/3 bg-muted/80 rounded" />
            <div className="h-3 w-1/2 bg-muted/60 rounded" />
          </div>
          <div className="h-6 w-16 bg-muted/60 rounded-full" />
        </div>
      ))}
    </div>
  );
}
