"use client";

import React from "react";
import { ShieldCheck, Zap, Layers, Cpu, HeartPulse, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const PILLARS = [
  {
    icon: Layers,
    title: "Unified Operating System",
    description: "Replace 5 fragmented apps with a single, harmonious workspace that handles tasks, notes, workouts, and goals.",
  },
  {
    icon: HeartPulse,
    title: "Productivity + Fitness Synergy",
    description: "Your physical health directly impacts mental output. PTS links workout energy tracking with daily task completion.",
  },
  {
    icon: Cpu,
    title: "AI Weekly Insights",
    description: "Automated analysis spots burnout patterns, highlights task bottlenecks, and suggests optimal rest periods.",
  },
  {
    icon: Lock,
    title: "Privacy & Data Ownership",
    description: "Your data is encrypted with PostgreSQL standards. No data harvesting or third-party ad tracking.",
  },
  {
    icon: Zap,
    title: "Blazing Fast Speed",
    description: "Built on Next.js 14 App Router and TypeScript with zero bloat for instant sub-100ms page transitions.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Goal Alignment",
    description: "Connect micro daily todos with macro quarterly goals to ensure continuous progress towards your ambition.",
  },
];

export function WhyPtsSection() {
  return (
    <section className="py-20 border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            The PTS Difference
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight">
            Why Switch To PTS?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Most tools force you to compromise between productivity, fitness, or privacy. PTS merges them cleanly.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card className="h-full border bg-card/60 backdrop-blur-md p-6 hover:shadow-card transition-all">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{pillar.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pillar.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
