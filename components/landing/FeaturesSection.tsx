"use client";

import React from "react";
import {
  CheckSquare,
  Dumbbell,
  FileText,
  Calendar,
  Target,
  BellRing,
  LineChart,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const FEATURES = [
  {
    icon: CheckSquare,
    title: "Smart Task Management",
    description: "Organize todos into priority matrices, Kanban status boards, and subtask checklists with due date triggers.",
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    icon: Dumbbell,
    title: "Workout & Exercise Tracker",
    description: "Log sets, reps, weight resistance, active duration, and calories burned with cardio and HIIT logging.",
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    icon: FileText,
    title: "Knowledge Notes & Docs",
    description: "Rich markdown documentation editor with instant full-text search, tags, and category organization.",
    color: "text-indigo-500 bg-indigo-500/10",
  },
  {
    icon: Calendar,
    title: "Unified Time Schedule",
    description: "Combine task deadlines, workout events, and time blocks into one synchronized interactive calendar.",
    color: "text-purple-500 bg-purple-500/10",
  },
  {
    icon: Target,
    title: "Goals & Habit Streaks",
    description: "Track numeric targets, quarterly milestones, habit heatmaps, and unlock gamified achievement badges.",
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    icon: BellRing,
    title: "Web Push Notifications",
    description: "Receive browser notifications and timely push alerts for scheduled reminders across devices.",
    color: "text-rose-500 bg-rose-500/10",
  },
  {
    icon: LineChart,
    title: "Recharts Analytics Engine",
    description: "Visualize productivity trends, workout volume graphs, and goal completion rates with interactive charts.",
    color: "text-cyan-500 bg-cyan-500/10",
  },
  {
    icon: Sparkles,
    title: "AI Weekly Reports",
    description: "Automated progress summaries and intelligent weekly insight recommendations to optimize your routines.",
    color: "text-accent bg-accent/10",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 border-t bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Engineered Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight">
            One Operating System For Your Entire Life
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Eliminate app fatigue. PTS integrates core productivity tools and health tracking into a unified, high-speed ecosystem.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full border hover:border-accent/40 hover:shadow-elevated transition-all duration-300 group">
                  <CardHeader className="p-6">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${feature.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg font-display mb-2 group-hover:text-accent transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
