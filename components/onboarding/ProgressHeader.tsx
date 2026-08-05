"use client";

import React from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

interface ProgressHeaderProps {
  currentStep: number;
  totalSteps?: number;
  onBack?: () => void;
  canBack?: boolean;
}

export function ProgressHeader({
  currentStep,
  totalSteps = 9,
  onBack,
  canBack = true,
}: ProgressHeaderProps) {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-4 mb-8">
      {/* Top Navbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {canBack && currentStep > 1 ? (
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border bg-card text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors shadow-xs"
              title="Go back to previous step"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-accent text-accent-foreground flex items-center justify-center font-bold font-display text-sm shadow-sm">
                PTS
              </div>
              <span className="font-bold text-xs font-display tracking-tight">Personal OS Onboarding</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-semibold text-muted-foreground bg-card border px-2.5 py-1 rounded-full shadow-xs">
            Step {currentStep} of {totalSteps}
          </span>
          <ThemeToggle />
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="h-2 w-full bg-muted/60 rounded-full overflow-hidden p-0.5 border">
        <motion.div
          className="h-full bg-accent rounded-full shadow-sm"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
