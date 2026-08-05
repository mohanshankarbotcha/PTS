import React from "react";
import { Edit2, CheckCircle2 } from "lucide-react";

interface ReviewItemProps {
  label: string;
  value: string;
  onEdit?: () => void;
}

export function ReviewItem({ label, value, onEdit }: ReviewItemProps) {
  return (
    <div className="flex items-center justify-between p-3.5 rounded-xl border bg-card/50">
      <div className="space-y-0.5">
        <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold block">
          {label}
        </span>
        <span className="text-xs sm:text-sm font-semibold text-foreground font-display">
          {value || "Not specified"}
        </span>
      </div>
      {onEdit && (
        <button
          type="button"
          onClick={onEdit}
          className="p-2 rounded-lg text-accent hover:bg-accent/10 transition-colors"
          title={`Edit ${label}`}
        >
          <Edit2 className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

interface ReviewCardProps {
  profileData: any;
  fitnessGoal: string;
  productivityGoal: string;
  scheduleData: any;
  theme: string;
  onJumpToStep: (step: number) => void;
}

export function ReviewCard({
  profileData,
  fitnessGoal,
  productivityGoal,
  scheduleData,
  theme,
  onJumpToStep,
}: ReviewCardProps) {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-6 w-6 text-accent" />
          <div>
            <h4 className="font-bold text-sm font-display">100% Personalization Complete</h4>
            <p className="text-xs text-muted-foreground">Review your settings before launching your workspace.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <ReviewItem
          label="Profile Name"
          value={profileData.fullName}
          onEdit={() => onJumpToStep(2)}
        />
        <ReviewItem
          label="Country / Timezone"
          value={`${profileData.country} (${profileData.timezone})`}
          onEdit={() => onJumpToStep(2)}
        />
        <ReviewItem
          label="Fitness Focus"
          value={fitnessGoal}
          onEdit={() => onJumpToStep(3)}
        />
        <ReviewItem
          label="Productivity Focus"
          value={productivityGoal}
          onEdit={() => onJumpToStep(4)}
        />
        <ReviewItem
          label="Working Hours"
          value={`${scheduleData.workStart} — ${scheduleData.workEnd}`}
          onEdit={() => onJumpToStep(5)}
        />
        <ReviewItem
          label="Preferred Theme"
          value={theme.toUpperCase()}
          onEdit={() => onJumpToStep(7)}
        />
      </div>
    </div>
  );
}
