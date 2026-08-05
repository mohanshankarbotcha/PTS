"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, LayoutDashboard, CheckSquare, Dumbbell, FileText, LineChart, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Abstract Background Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/15 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[250px] bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Release Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border bg-card/60 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-accent shadow-sm mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          <span>PTS 1.0 — Enterprise-Grade Personal Operating System</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight font-display max-w-4xl mx-auto leading-[1.08]"
        >
          Your Personal <span className="text-accent underline decoration-accent/30 underline-offset-8">Operating System</span>.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body"
        >
          Unify your tasks, workout routines, knowledge notes, habit goals, and performance analytics into one fluid, hyper-polished workspace.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/dashboard">
            <Button variant="accent" size="lg" className="w-full sm:w-auto shadow-glow text-sm font-semibold h-12 px-8 rounded-xl">
              Get Started Free
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <a href="#features">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm font-semibold h-12 px-8 rounded-xl backdrop-blur-sm">
              Explore Features
            </Button>
          </a>
        </motion.div>

        {/* Abstract Interactive App Shell Mockup Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto rounded-2xl border bg-card/60 backdrop-blur-xl shadow-2xl p-2 sm:p-4 text-left overflow-hidden ring-1 ring-border/80"
        >
          {/* Mac-style Window Controls */}
          <div className="flex items-center justify-between pb-3 px-2 border-b mb-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-[11px] opacity-60 hidden sm:inline">pts-app.com/dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-accent/10 text-accent font-semibold text-[10px]">
                Live Preview
              </span>
            </div>
          </div>

          {/* Mock Dashboard Wireframe Visual */}
          <div className="grid gap-3 sm:grid-cols-4 p-2">
            <div className="p-3 rounded-xl border bg-background/60 space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Task Completed</span>
                <CheckSquare className="h-3.5 w-3.5 text-accent" />
              </div>
              <p className="text-xl font-bold font-display">18 / 24</p>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-accent w-[75%]" />
              </div>
            </div>

            <div className="p-3 rounded-xl border bg-background/60 space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Workout Sessions</span>
                <Dumbbell className="h-3.5 w-3.5 text-emerald-500" />
              </div>
              <p className="text-xl font-bold font-display">5 Days Active</p>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[85%]" />
              </div>
            </div>

            <div className="p-3 rounded-xl border bg-background/60 space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Notes Knowledge</span>
                <FileText className="h-3.5 w-3.5 text-indigo-500" />
              </div>
              <p className="text-xl font-bold font-display">42 Notes</p>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[60%]" />
              </div>
            </div>

            <div className="p-3 rounded-xl border bg-background/60 space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Weekly Analytics</span>
                <LineChart className="h-3.5 w-3.5 text-amber-500" />
              </div>
              <p className="text-xl font-bold font-display">+28% Growth</p>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[90%]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors animate-bounce p-2" aria-label="Scroll to features">
            <ChevronDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
