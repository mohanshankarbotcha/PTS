"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedOptionCardProps {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function AnimatedOptionCard({
  id,
  title,
  description,
  icon,
  badge,
  selected,
  onSelect,
}: AnimatedOptionCardProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(id)}
      className={cn(
        "relative w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 shadow-sm",
        selected
          ? "border-accent bg-accent/10 ring-2 ring-accent shadow-md"
          : "border-border/80 bg-card/60 hover:bg-card hover:border-accent/50"
      )}
    >
      {icon && (
        <div
          className={cn(
            "p-3 rounded-xl flex items-center justify-center shrink-0 transition-colors",
            selected ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
          )}
        >
          {icon}
        </div>
      )}

      <div className="flex-1 min-w-0 pr-6 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm sm:text-base font-display text-foreground">
            {title}
          </span>
          {badge && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-accent/20 text-accent">
              {badge}
            </span>
          )}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="absolute top-5 right-5">
        <CheckCircle2
          className={cn(
            "h-5 w-5 transition-transform duration-200",
            selected ? "text-accent scale-110" : "text-muted-foreground/30 scale-90"
          )}
        />
      </div>
    </motion.button>
  );
}
