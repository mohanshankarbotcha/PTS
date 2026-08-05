"use client";

import React from "react";
import { Dumbbell } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { ComingSoonCard } from "@/components/shared/ComingSoonCard";
import { Button } from "@/components/ui/button";

export default function WorkoutsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Workout & Fitness Tracking"
        description="Log workout sessions, track exercise sets, monitor duration, and measure calories burned."
        badge="Module Shell"
        actions={
          <Button variant="accent" size="sm">
            Log Session
          </Button>
        }
      />

      <EmptyState
        icon={Dumbbell}
        title="Fitness Tracker Ready"
        description="Workout tracking infrastructure is active. Exercise set logging, cardio tracking, and fitness trend charts will plug into this layout."
        actionLabel="Workout Engine Active"
        onAction={() => {}}
      />

      <ComingSoonCard
        moduleName="Workout & Fitness Logger"
        features={[
          "Strength, Cardio & HIIT Session Categories",
          "Set, Rep & Weight Progression History",
          "Caloric Expenditure & Active Time Metrics",
          "Custom Routine Templates & Timers",
        ]}
      />
    </div>
  );
}
