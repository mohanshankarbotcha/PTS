import React from "react";
import { cn } from "@/lib/utils";

interface OnboardingCardProps {
  children: React.ReactNode;
  className?: string;
}

export function OnboardingCard({ children, className }: OnboardingCardProps) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border bg-card/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl space-y-6 ring-1 ring-border/60 transition-all",
        className
      )}
    >
      {children}
    </div>
  );
}
