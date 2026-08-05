"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { ComingSoonCard } from "@/components/shared/ComingSoonCard";
import { Button } from "@/components/ui/button";

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Schedule & Calendar"
        description="Unified schedule combining task due dates, scheduled workouts, and time blocks."
        badge="Module Shell"
        actions={
          <Button variant="accent" size="sm">
            Add Event
          </Button>
        }
      />

      <EmptyState
        icon={Calendar}
        title="Calendar View Initialized"
        description="Calendar layout shell is active. Interactive month/week views, event scheduling, and reminder synchronization will plug into this layout."
        actionLabel="Calendar Active"
        onAction={() => {}}
      />

      <ComingSoonCard
        moduleName="Calendar & Time Planner"
        features={[
          "Month, Week & Day View Modes",
          "Unified Task & Workout Event Integration",
          "Interactive Date Picker & Time Blocks",
          "Web Push Reminder Triggering",
        ]}
      />
    </div>
  );
}
