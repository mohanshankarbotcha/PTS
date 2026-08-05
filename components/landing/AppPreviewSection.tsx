"use client";

import React, { useState } from "react";
import { LayoutDashboard, CheckSquare, Dumbbell, FileText, LineChart, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PREVIEW_TABS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "tasks", label: "Task Manager", icon: CheckSquare },
  { id: "workouts", label: "Workout Tracker", icon: Dumbbell },
  { id: "notes", label: "Knowledge Notes", icon: FileText },
  { id: "analytics", label: "Analytics", icon: LineChart },
];

export function AppPreviewSection() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section id="preview" className="py-20 border-t bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Interactive Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight">
            Designed For Focus & Speed
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Preview the responsive interface crafted with glassmorphism, micro-animations, and minimal aesthetics.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {PREVIEW_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-card border text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Mock Preview */}
        <div className="max-w-5xl mx-auto rounded-2xl border bg-card/70 backdrop-blur-xl shadow-2xl p-6 ring-1 ring-border/80">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {activeTab === "dashboard" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <h4 className="font-display font-bold text-lg">Daily Operating Overview</h4>
                    <span className="text-xs text-accent font-semibold bg-accent/10 px-2.5 py-1 rounded-full">
                      System Online
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="p-4 rounded-xl border bg-background/50 space-y-1">
                      <span className="text-xs text-muted-foreground">Today&apos;s Focus Tasks</span>
                      <p className="text-2xl font-bold font-display">8 Completed</p>
                    </div>
                    <div className="p-4 rounded-xl border bg-background/50 space-y-1">
                      <span className="text-xs text-muted-foreground">Workout Routine</span>
                      <p className="text-2xl font-bold font-display text-emerald-500">Upper Body HIIT</p>
                    </div>
                    <div className="p-4 rounded-xl border bg-background/50 space-y-1">
                      <span className="text-xs text-muted-foreground">Knowledge Entries</span>
                      <p className="text-2xl font-bold font-display text-indigo-500">3 Pinned Notes</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "tasks" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b pb-3">
                    <h4 className="font-display font-bold text-lg">Task Priority Matrix</h4>
                    <span className="text-xs text-muted-foreground">4 Active Tasks</span>
                  </div>
                  {[
                    { title: "Deploy PTS Production Foundation", priority: "URGENT", status: "Done" },
                    { title: "Setup PostgreSQL Schema & Migrations", priority: "HIGH", status: "Done" },
                    { title: "Review Weekly Fitness Targets", priority: "MEDIUM", status: "In Progress" },
                    { title: "Write Architecture Documentation", priority: "LOW", status: "Pending" },
                  ].map((task, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl border bg-background/50 text-xs">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className={`h-4 w-4 ${task.status === "Done" ? "text-emerald-500" : "text-muted-foreground"}`} />
                        <span className="font-semibold">{task.title}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-muted text-[10px] font-mono font-semibold">
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "workouts" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <h4 className="font-display font-bold text-lg">Hypertrophy Workout Session</h4>
                    <span className="text-xs text-emerald-500 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full">
                      52 Mins • 540 kcal
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="p-3 rounded-xl border bg-background/50 space-y-1">
                      <p className="font-semibold text-xs">Bench Press</p>
                      <p className="text-xs text-muted-foreground">4 Sets • 10 Reps • 85kg</p>
                    </div>
                    <div className="p-3 rounded-xl border bg-background/50 space-y-1">
                      <p className="font-semibold text-xs">Incline Dumbbell Flyes</p>
                      <p className="text-xs text-muted-foreground">3 Sets • 12 Reps • 24kg</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notes" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b pb-3">
                    <h4 className="font-display font-bold text-lg">Markdown Knowledge Base</h4>
                    <span className="text-xs text-indigo-500 font-semibold">Category: Architecture</span>
                  </div>
                  <div className="p-4 rounded-xl border bg-background/50 text-xs leading-relaxed space-y-2 font-mono text-muted-foreground">
                    <p className="text-foreground font-bold font-sans text-sm"># System Architecture ADR-001</p>
                    <p>Next.js 14 App Router + TypeScript strict mode provides maximum compile-time safety and server-rendered speed.</p>
                  </div>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <h4 className="font-display font-bold text-lg">Weekly Analytics Matrix</h4>
                    <span className="text-xs text-accent font-semibold">+18% Efficiency</span>
                  </div>
                  <div className="h-32 bg-background/50 rounded-xl border p-4 flex items-end justify-between gap-2">
                    {[40, 65, 80, 50, 95, 70, 85].map((val, i) => (
                      <div key={i} className="w-full bg-accent/80 rounded-t" style={{ height: `${val}%` }} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
