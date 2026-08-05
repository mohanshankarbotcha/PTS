"use client";

import React from "react";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ROADMAP_PHASES = [
  {
    phase: "Phase 1",
    title: "Project Initialization & Architecture Foundation",
    status: "Completed",
    description: "Next.js 14 App Router, Prisma ORM, PostgreSQL schema, UI/UX Pro Max tokens, Zustand stores, Auth infrastructure.",
  },
  {
    phase: "Phase 2",
    title: "Application Shell & Navigation Engine",
    status: "Completed",
    description: "Collapsible responsive sidebar, Command Palette (Cmd+K), Notification Panel, User Dropdown, Skeleton loaders.",
  },
  {
    phase: "Phase 3",
    title: "Core Task & Workout Tracking Engines",
    status: "In Development",
    description: "Full Task CRUD, Priority matrix, Exercise set logger, Caloric calculator, Markdown notes knowledge base.",
  },
  {
    phase: "Phase 4",
    title: "Recharts Analytics & AI Assistant Reports",
    status: "Planned",
    description: "Interactive performance graphs, weekly streak heatmaps, automated AI progress summaries & burnout detection.",
  },
  {
    phase: "Phase 5",
    title: "Native Mobile App & Cloud Sync",
    status: "Planned",
    description: "React Native / iOS & Android mobile companion applications with offline sync and Web Push notifications.",
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 border-t bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Development Timeline
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight">
            PTS Evolution Roadmap
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Transparent development milestones as we build the premier Personal Operating System.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative border-l-2 border-border/80 pl-6 sm:pl-8 space-y-8">
          {ROADMAP_PHASES.map((item, idx) => {
            const isDone = item.status === "Completed";
            const isInDev = item.status === "In Development";
            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative"
              >
                {/* Status Node Icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 h-6 w-6 rounded-full border-2 bg-background flex items-center justify-center ${
                    isDone
                      ? "border-emerald-500 text-emerald-500"
                      : isInDev
                      ? "border-accent text-accent animate-pulse"
                      : "border-muted text-muted-foreground"
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  ) : isInDev ? (
                    <Sparkles className="h-3.5 w-3.5" />
                  ) : (
                    <Clock className="h-3.5 w-3.5" />
                  )}
                </div>

                <div className="p-5 rounded-2xl border bg-card/70 backdrop-blur-md shadow-sm space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-accent font-mono uppercase tracking-wider">
                      {item.phase}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                        isDone
                          ? "bg-emerald-500/10 text-emerald-500"
                          : isInDev
                          ? "bg-accent/10 text-accent"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
