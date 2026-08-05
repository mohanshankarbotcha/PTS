"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { APP_CONFIG } from "@/constants";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background text-foreground overflow-hidden">
      {/* Left Column: Abstract Branding & Visual Showcase (Desktop Only) */}
      <div className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden border-r bg-card/30">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/15 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]" />
        </div>

        {/* Brand Header */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center font-bold font-display text-xl shadow-md">
              PTS
            </div>
            <div>
              <span className="font-bold text-base font-display tracking-tight block leading-none">
                {APP_CONFIG.name}
              </span>
              <span className="text-[10px] text-muted-foreground mt-0.5 block">
                Personal Operating System
              </span>
            </div>
          </Link>
          <ThemeToggle />
        </div>

        {/* Hero Visual Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-lg"
        >
          <div className="inline-flex items-center gap-2 rounded-full border bg-card/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-accent shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Encrypted Authentication Engine</span>
          </div>

          <h2 className="text-4xl font-bold font-display tracking-tight leading-tight">
            Master Your Daily Operating System.
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed font-body">
            Access your tasks, workout routines, knowledge notes, quarterly goals, and visual analytics in one unified, sub-100ms workspace.
          </p>

          {/* Value Checklist */}
          <div className="space-y-2.5 pt-2">
            {[
              "Sub-100ms instant route performance",
              "Bcrypt 12-round password hashing & JWT security",
              "Encrypted data boundaries & zero ad tracking",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer info */}
        <div className="text-xs text-muted-foreground flex items-center justify-between pt-6 border-t border-border/40">
          <span>© {new Date().getFullYear()} {APP_CONFIG.fullName}</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" /> Security Verified
          </span>
        </div>
      </div>

      {/* Right Column: Centered Auth Form */}
      <div className="flex flex-col justify-between p-4 sm:p-8 md:p-12 relative overflow-y-auto">
        {/* Top Navbar Header on Mobile */}
        <div className="flex items-center justify-between lg:justify-end mb-6">
          <Link href="/" className="lg:hidden flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/" className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-3.5 w-3.5" /> Return Home
            </Link>
            <div className="lg:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Form Container Card */}
        <div className="w-full max-w-md mx-auto my-auto py-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-1.5 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-tight">
                {title}
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {subtitle}
              </p>
            </div>

            {children}
          </motion.div>
        </div>

        {/* Bottom Security Note */}
        <div className="text-center text-[11px] text-muted-foreground pt-4">
          Protected by PTS 256-bit encryption session token boundaries.
        </div>
      </div>
    </div>
  );
}
