import React from "react";
import { CardSkeleton } from "./CardSkeleton";
import { ListSkeleton } from "./ListSkeleton";

export function PageSkeleton() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto p-2">
      {/* Header Skeleton */}
      <div className="space-y-2 animate-pulse">
        <div className="h-8 w-64 bg-muted/80 rounded-md" />
        <div className="h-4 w-96 bg-muted/60 rounded-md" />
      </div>

      {/* Grid Skeletons */}
      <div className="grid gap-4 md:grid-cols-3">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>

      {/* Main List Skeleton */}
      <div className="mt-8">
        <ListSkeleton items={4} />
      </div>
    </div>
  );
}
