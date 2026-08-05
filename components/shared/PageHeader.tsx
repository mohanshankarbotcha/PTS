import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
  actions?: React.ReactNode;
}

export function PageHeader({ title, description, badge, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b mb-6">
      <div className="space-y-1">
        <div className="flex items-center gap-2.5">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight font-display">
            {title}
          </h1>
          {badge && (
            <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
              {badge}
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
    </div>
  );
}
