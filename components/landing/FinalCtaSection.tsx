"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="py-20 border-t bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[300px] bg-accent/15 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-accent shadow-xs">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Take Control of Your Productivity & Health</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight leading-tight">
          Ready To Supercharge Your Personal Operating System?
        </h2>

        <p className="text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
          Join thousands of creators, engineers, and athletes building better daily routines with PTS.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard">
            <Button variant="accent" size="lg" className="w-full sm:w-auto shadow-glow text-sm font-semibold h-12 px-8 rounded-xl">
              Start Your Journey
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <a href="#features">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm font-semibold h-12 px-8 rounded-xl">
              View Features
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
