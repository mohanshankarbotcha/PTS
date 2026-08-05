"use client";

import React from "react";
import { LucideIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon: Icon = Sparkles,
  title,
  description,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 md:p-12 rounded-2xl border border-dashed bg-card/40 backdrop-blur-sm shadow-subtle my-4",
        className
      )}
    >
      <div className="h-14 w-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 shadow-sm animate-pulse-glow">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-display text-xl font-semibold tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm max-w-md leading-relaxed mb-6">
        {description}
      </p>
      {actionLabel && (
        <Button onClick={onAction} variant="accent" size="sm" className="shadow-md">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
