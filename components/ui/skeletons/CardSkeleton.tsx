import React from "react";
import { cn } from "@/lib/utils";

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card/60 p-6 shadow-sm animate-pulse space-y-4",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="h-4 w-32 bg-muted/80 rounded" />
        <div className="h-8 w-8 bg-muted/60 rounded-lg" />
      </div>
      <div className="h-8 w-24 bg-muted/80 rounded" />
      <div className="h-3 w-48 bg-muted/60 rounded" />
    </div>
  );
}
