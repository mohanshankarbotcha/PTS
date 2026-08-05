"use client";

import React from "react";
import { LineChart } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { ComingSoonCard } from "@/components/shared/ComingSoonCard";
import { Button } from "@/components/ui/button";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics & Performance Insights"
        description="Comprehensive charts, trend graphs, and data visualizations across your productivity and health."
        badge="Module Shell"
        actions={
          <Button variant="accent" size="sm">
            Export Report
          </Button>
        }
      />

      <EmptyState
        icon={LineChart}
        title="Analytics Dashboard Shell Active"
        description="Recharts charting library is installed and ready. Interactive line charts, bar graphs, and activity heatmaps will render when data models are connected."
        actionLabel="Analytics Engine Active"
        onAction={() => {}}
      />

      <ComingSoonCard
        moduleName="Performance Analytics Suite"
        features={[
          "Recharts Interactive Performance Graphs",
          "Task Completion Rate Distribution",
          "Weekly Calorie & Fitness Trend Breakdown",
          "Custom Metric Key Tracking",
        ]}
      />
    </div>
  );
}
