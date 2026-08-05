import React from "react";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthCard({ children, className }: AuthCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-6 ring-1 ring-border/60",
        className
      )}
    >
      {children}
    </div>
  );
}
