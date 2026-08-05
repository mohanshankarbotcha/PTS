"use client";

import React from "react";
import { Target } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { ComingSoonCard } from "@/components/shared/ComingSoonCard";
import { Button } from "@/components/ui/button";

export default function GoalsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Goals & Habits"
        description="Set quarterly targets, build daily habits, and monitor your long-term milestones."
        badge="Module Shell"
        actions={
          <Button variant="accent" size="sm">
            New Goal
          </Button>
        }
      />

      <EmptyState
        icon={Target}
        title="Goal Tracker Initialized"
        description="Goals module shell is ready. Target progress bars, habit streak counters, and achievement badges will connect in subsequent prompts."
        actionLabel="Goals Engine Active"
        onAction={() => {}}
      />

      <ComingSoonCard
        moduleName="Goals & Streak Tracker"
        features={[
          "Numeric & Percentage Target Tracking",
          "Habit Streak Counters & Heatmaps",
          "Milestone Deadlines & Reminders",
          "Gamified Achievement Badges",
        ]}
      />
    </div>
  );
}
