"use client";

import React from "react";
import { CheckSquare } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { ComingSoonCard } from "@/components/shared/ComingSoonCard";
import { Button } from "@/components/ui/button";

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Task Management"
        description="Organize, prioritize, and track your daily todo items, projects, and deadlines."
        badge="Module Shell"
        actions={
          <Button variant="accent" size="sm">
            Create Task
          </Button>
        }
      />

      <EmptyState
        icon={CheckSquare}
        title="No Tasks Added Yet"
        description="The task management module shell is ready. Comprehensive task CRUD, priority tags, and drag-and-drop status boards will be enabled in upcoming prompts."
        actionLabel="Task Engine Ready"
        onAction={() => {}}
      />

      <ComingSoonCard
        moduleName="Task Management System"
        features={[
          "Kanban Board & List Views",
          "Priority Classification (Low, Medium, High, Urgent)",
          "Due Dates & Subtask Checklists",
          "Automated Task Archiving & Filtering",
        ]}
      />
    </div>
  );
}
