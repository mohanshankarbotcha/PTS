import React from "react";
import { cn } from "@/lib/utils";

export function TableSkeleton({ rows = 5, className }: { rows?: number; className?: string }) {
  return (
    <div className={cn("rounded-xl border bg-card/60 overflow-hidden animate-pulse", className)}>
      <div className="border-b bg-muted/40 p-4 flex gap-4">
        <div className="h-4 w-1/4 bg-muted/80 rounded" />
        <div className="h-4 w-1/4 bg-muted/80 rounded" />
        <div className="h-4 w-1/4 bg-muted/80 rounded" />
        <div className="h-4 w-1/4 bg-muted/80 rounded" />
      </div>
      <div className="divide-y divide-border">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="p-4 flex gap-4 items-center">
            <div className="h-4 w-1/4 bg-muted/60 rounded" />
            <div className="h-4 w-1/4 bg-muted/60 rounded" />
            <div className="h-4 w-1/4 bg-muted/60 rounded" />
            <div className="h-4 w-1/4 bg-muted/60 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
