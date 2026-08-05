import React from "react";
import { cn } from "@/lib/utils";

export function ChartSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border bg-card/60 p-6 space-y-4 animate-pulse", className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="h-5 w-40 bg-muted/80 rounded" />
          <div className="h-3 w-28 bg-muted/60 rounded" />
        </div>
        <div className="h-8 w-24 bg-muted/60 rounded-md" />
      </div>
      <div className="h-64 w-full bg-muted/30 rounded-lg flex items-end justify-between p-4 gap-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-full bg-muted/80 rounded-t"
            style={{ height: `${Math.floor(Math.random() * 60) + 30}%` }}
          />
        ))}
      </div>
    </div>
  );
}
