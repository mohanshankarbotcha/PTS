"use client";

import React from "react";
import { motion } from "framer-motion";

interface PreferenceToggleProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  icon?: React.ReactNode;
}

export function PreferenceToggle({
  label,
  description,
  checked,
  onChange,
  icon,
}: PreferenceToggleProps) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl border bg-card/60 gap-4">
      <div className="flex items-start gap-3 min-w-0">
        {icon && <div className="p-2 rounded-xl bg-accent/10 text-accent shrink-0 mt-0.5">{icon}</div>}
        <div className="space-y-0.5">
          <span className="text-xs sm:text-sm font-semibold text-foreground block">{label}</span>
          {description && (
            <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
          )}
        </div>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
          checked ? "bg-accent" : "bg-muted"
        }`}
      >
        <motion.span
          animate={{ x: checked ? 20 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="inline-block h-5 w-5 transform rounded-full bg-background shadow-md"
        />
      </button>
    </div>
  );
}
