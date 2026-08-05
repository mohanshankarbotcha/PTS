"use client";

import React from "react";
import { Check, X } from "lucide-react";

interface PasswordStrengthProps {
  password?: string;
}

export function PasswordStrength({ password = "" }: PasswordStrengthProps) {
  const criteria = [
    { label: "At least 8 characters", valid: password.length >= 8 },
    { label: "Uppercase letter (A-Z)", valid: /[A-Z]/.test(password) },
    { label: "Lowercase letter (a-z)", valid: /[a-z]/.test(password) },
    { label: "Number (0-9)", valid: /[0-9]/.test(password) },
    { label: "Special character (!@#$)", valid: /[^A-Za-z0-9]/.test(password) },
  ];

  const validCount = criteria.filter((c) => c.valid).length;
  const strengthPercentage = (validCount / criteria.length) * 100;

  const getStrengthColor = () => {
    if (validCount <= 2) return "bg-destructive";
    if (validCount <= 4) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getStrengthLabel = () => {
    if (validCount === 0) return "Empty";
    if (validCount <= 2) return "Weak";
    if (validCount <= 4) return "Medium";
    return "Strong";
  };

  if (!password) return null;

  return (
    <div className="space-y-2 pt-1 text-xs">
      <div className="flex items-center justify-between font-medium">
        <span className="text-muted-foreground">Password Strength:</span>
        <span
          className={`font-semibold ${
            validCount <= 2
              ? "text-destructive"
              : validCount <= 4
              ? "text-amber-500"
              : "text-emerald-500"
          }`}
        >
          {getStrengthLabel()}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${getStrengthColor()}`}
          style={{ width: `${strengthPercentage}%` }}
        />
      </div>

      {/* Requirement Checklist */}
      <div className="grid grid-cols-2 gap-1 pt-1">
        {criteria.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 text-[11px]">
            {item.valid ? (
              <Check className="h-3 w-3 text-emerald-500 shrink-0" />
            ) : (
              <X className="h-3 w-3 text-muted-foreground/60 shrink-0" />
            )}
            <span className={item.valid ? "text-foreground font-medium" : "text-muted-foreground"}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
