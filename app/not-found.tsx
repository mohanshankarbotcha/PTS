"use client";

import React from "react";
import Link from "next/link";
import { FileQuestion, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 my-8">
      <div className="h-20 w-20 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 shadow-md animate-pulse-glow">
        <FileQuestion className="h-10 w-10" />
      </div>

      <h1 className="font-display text-4xl font-bold tracking-tight mb-2">
        404 — Page Not Found
      </h1>
      <p className="text-muted-foreground text-sm max-w-md mb-8 leading-relaxed">
        The route you are trying to access does not exist or may have been moved in the PTS Personal Operating System.
      </p>

      <div className="flex items-center gap-3">
        <Link href="/dashboard">
          <Button variant="accent" size="sm">
            <Home className="h-4 w-4 mr-2" />
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
