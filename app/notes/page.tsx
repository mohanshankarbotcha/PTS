"use client";

import React from "react";
import { FileText } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { ComingSoonCard } from "@/components/shared/ComingSoonCard";
import { Button } from "@/components/ui/button";

export default function NotesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Notes & Knowledge Base"
        description="Capture ideas, organize documentation, and maintain your personal knowledge repository."
        badge="Module Shell"
        actions={
          <Button variant="accent" size="sm">
            New Note
          </Button>
        }
      />

      <EmptyState
        icon={FileText}
        title="Knowledge Base Initialized"
        description="Notes module shell is configured. Rich text markdown editor, category tags, and instant search capabilities will be added soon."
        actionLabel="Notes Engine Ready"
        onAction={() => {}}
      />

      <ComingSoonCard
        moduleName="Notes & Markdown Knowledge Base"
        features={[
          "Rich Markdown Editor & Code Highlighting",
          "Category Organization & Fast Tagging",
          "Instant Full-Text Search",
          "Export & Pin Important Notes",
        ]}
      />
    </div>
  );
}
