"use client";

import React from "react";
import { LayoutDashboard, CheckSquare, Dumbbell, FileText, LineChart } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { ComingSoonCard } from "@/components/shared/ComingSoonCard";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Operating System Dashboard"
        description="Centralized command hub monitoring your tasks, fitness metrics, knowledge notes, and system analytics."
        badge="Shell Active"
        actions={
          <Button variant="accent" size="sm">
            Customize Hub
          </Button>
        }
      />

      <EmptyState
        icon={LayoutDashboard}
        title="Dashboard Modules Ready for Feature Data"
        description="Your personal tracking engine shell is loaded. Widgets for daily progress, quick task actions, and workout summaries will connect in subsequent prompts."
        actionLabel="Explore System Shell"
        onAction={() => {}}
      />

      <ComingSoonCard
        moduleName="Dashboard Analytics & Widgets"
        features={[
          "Live Productivity Metrics & Completion Rates",
          "Daily Fitness & Exercise Activity Widgets",
          "Quick Note Creation & Pinning",
          "Real-time Streak & Habit Progress Rings",
        ]}
      />
    </div>
  );
}
