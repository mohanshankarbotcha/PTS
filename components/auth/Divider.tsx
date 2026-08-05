import React from "react";

interface DividerProps {
  text?: string;
}

export function Divider({ text = "OR" }: DividerProps) {
  return (
    <div className="relative my-4 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-border/80" />
      </div>
      <div className="relative bg-card px-3 text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
        {text}
      </div>
    </div>
  );
}
