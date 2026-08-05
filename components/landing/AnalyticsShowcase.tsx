"use client";

import React from "react";
import { TrendingUp, Activity, CheckCircle2, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function AnalyticsShowcase() {
  return (
    <section id="analytics" className="py-20 border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Visual Intelligence
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight">
            Data-Driven Personal Growth
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Gain deep insights into how your time, fitness effort, and daily habits compound over weeks and months.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 items-stretch">
          {/* Circular Progress Ring Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="h-full border bg-card/60 backdrop-blur-md p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-muted-foreground uppercase">Weekly Target</span>
                  <Award className="h-4 w-4 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-display">86% Goal Completion</h3>
                <p className="text-xs text-muted-foreground mt-1">24 of 28 planned goals achieved this week.</p>
              </div>

              {/* Circular SVG Ring Visual */}
              <div className="my-8 flex justify-center items-center relative">
                <svg className="h-40 w-40 transform -rotate-90">
                  <circle cx="80" cy="80" r="64" stroke="currentColor" strokeWidth="12" className="text-muted/30" fill="transparent" />
                  <circle
                    cx="80"
                    cy="80"
                    r="64"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeDasharray="402"
                    strokeDashoffset="56"
                    strokeLinecap="round"
                    className="text-accent transition-all duration-1000"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-bold font-display">86%</span>
                  <span className="text-[10px] text-muted-foreground uppercase">Achieved</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs border-t pt-4 text-muted-foreground">
                <span className="flex items-center gap-1"><Zap className="h-3.5 w-3.5 text-amber-500" /> 12 Day Streak</span>
                <span className="text-emerald-500 font-semibold">+14% vs Last Week</span>
              </div>
            </Card>
          </motion.div>

          {/* Bar Chart Activity Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="h-full border bg-card/60 backdrop-blur-md p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold font-display">Activity & Volume Trends</h3>
                    <p className="text-xs text-muted-foreground">Combined daily task output and fitness volume tracking.</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold flex items-center gap-1">
                    <TrendingUp className="h-3.5 w-3.5" /> High Output
                  </span>
                </div>
              </div>

              {/* Bar Visual Graphic */}
              <div className="my-6 grid grid-cols-7 gap-3 items-end h-48 px-4 border-b pb-4">
                {[
                  { day: "Mon", task: 65, workout: 40 },
                  { day: "Tue", task: 80, workout: 70 },
                  { day: "Wed", task: 45, workout: 30 },
                  { day: "Thu", task: 90, workout: 85 },
                  { day: "Fri", task: 70, workout: 60 },
                  { day: "Sat", task: 55, workout: 95 },
                  { day: "Sun", task: 40, workout: 50 },
                ].map((item) => (
                  <div key={item.day} className="flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="w-full flex gap-1 items-end h-full">
                      <div
                        className="w-1/2 bg-accent/80 rounded-t transition-all group-hover:bg-accent"
                        style={{ height: `${item.task}%` }}
                      />
                      <div
                        className="w-1/2 bg-emerald-500/80 rounded-t transition-all group-hover:bg-emerald-500"
                        style={{ height: `${item.workout}%` }}
                      />
                    </div>
                    <span className="text-[11px] text-muted-foreground font-medium">{item.day}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 rounded-xl border bg-background/50">
                  <span className="text-muted-foreground">Total Active Time</span>
                  <p className="text-base font-bold font-display mt-0.5">34.5 Hrs</p>
                </div>
                <div className="p-3 rounded-xl border bg-background/50">
                  <span className="text-muted-foreground">Calories Burned</span>
                  <p className="text-base font-bold font-display mt-0.5">4,280 kcal</p>
                </div>
                <div className="p-3 rounded-xl border bg-background/50 col-span-2 sm:col-span-1">
                  <span className="text-muted-foreground">Efficiency Index</span>
                  <p className="text-base font-bold font-display mt-0.5 text-accent">9.4 / 10</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
