"use client";

import React from "react";
import { User, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";

const PRESET_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
];

interface AvatarUploaderProps {
  value?: string;
  onChange: (url: string) => void;
  name?: string;
}

export function AvatarUploader({ value, onChange, name = "User" }: AvatarUploaderProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-5">
        <div className="relative">
          {value ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={value}
              alt={name}
              className="h-20 w-20 rounded-full object-cover shadow-md ring-4 ring-accent/30"
            />
          ) : (
            <div className="h-20 w-20 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-2xl shadow-md ring-4 ring-accent/30 font-display">
              {initials || <User className="h-8 w-8" />}
            </div>
          )}
        </div>

        <div className="space-y-2 flex-1">
          <label className="text-xs font-semibold text-foreground block">
            Avatar Image URL
          </label>
          <Input
            type="text"
            placeholder="https://example.com/avatar.jpg"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="h-9 text-xs rounded-xl"
          />
          <p className="text-[11px] text-muted-foreground">
            Paste an image URL or choose a preset below.
          </p>
        </div>
      </div>

      {/* Preset Avatars */}
      <div className="space-y-1.5 pt-2">
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
          Preset Avatars
        </span>
        <div className="flex items-center gap-3">
          {PRESET_AVATARS.map((url, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onChange(url)}
              className={`h-12 w-12 rounded-full overflow-hidden border-2 transition-all ${
                value === url ? "border-accent ring-2 ring-accent scale-105" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt={`Preset ${idx + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
