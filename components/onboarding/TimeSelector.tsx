import React from "react";
import { Clock } from "lucide-react";
import { Input } from "@/components/ui/input";

interface TimeSelectorProps {
  label: string;
  description?: string;
  value: string;
  onChange: (val: string) => void;
  icon?: React.ReactNode;
}

export function TimeSelector({
  label,
  description,
  value,
  onChange,
  icon,
}: TimeSelectorProps) {
  return (
    <div className="p-4 rounded-2xl border bg-card/60 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon ? (
            <div className="text-accent">{icon}</div>
          ) : (
            <Clock className="h-4 w-4 text-accent" />
          )}
          <span className="text-xs font-semibold text-foreground">{label}</span>
        </div>
        <Input
          type="time"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-32 h-9 text-xs font-mono font-semibold rounded-xl bg-background text-center border-accent/40 focus:ring-accent"
        />
      </div>
      {description && (
        <p className="text-[11px] text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
