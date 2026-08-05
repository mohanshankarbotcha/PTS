"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to monitoring services (e.g. Sentry / Logger)
    console.error("PTS Runtime Exception Captured:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 my-8">
      <div className="h-16 w-16 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center justify-center text-destructive mb-6 shadow-sm">
        <AlertTriangle className="h-8 w-8" />
      </div>

      <h2 className="font-display text-3xl font-bold tracking-tight mb-2">
        Unexpected System Exception
      </h2>
      <p className="text-muted-foreground text-sm max-w-md mb-6 leading-relaxed">
        An isolated runtime exception occurred in the application shell. You can retry the operation or return to the dashboard.
      </p>

      {error?.message && (
        <div className="p-3 rounded-xl border bg-muted/40 text-xs font-mono max-w-lg w-full mb-6 overflow-x-auto text-left text-muted-foreground">
          {error.message}
        </div>
      )}

      <div className="flex items-center gap-3">
        <Button onClick={() => reset()} variant="accent" size="sm">
          <RotateCcw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
        <Link href="/dashboard">
          <Button variant="outline" size="sm">
            <Home className="h-4 w-4 mr-2" />
            Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
