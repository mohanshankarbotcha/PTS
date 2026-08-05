"use client";

import React, { useEffect } from "react";
import { AlertOctagon, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global System Level Error Captured:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center">
        <div className="h-20 w-20 rounded-3xl bg-destructive/10 border border-destructive/20 flex items-center justify-center text-destructive mb-6 shadow-md">
          <AlertOctagon className="h-10 w-10" />
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight mb-2">
          Critical System Failure
        </h1>
        <p className="text-muted-foreground text-sm max-w-md mb-6 leading-relaxed">
          A root level layout error occurred. Click below to re-initialize the application shell.
        </p>

        <Button onClick={() => reset()} variant="destructive" size="sm">
          <RotateCcw className="h-4 w-4 mr-2" />
          Re-initialize Shell
        </Button>
      </body>
    </html>
  );
}
