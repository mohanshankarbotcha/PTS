import React from "react";
import { Metadata } from "next";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { AnalyticsShowcase } from "@/components/landing/AnalyticsShowcase";
import { AppPreviewSection } from "@/components/landing/AppPreviewSection";
import { WhyPtsSection } from "@/components/landing/WhyPtsSection";
import { RoadmapSection } from "@/components/landing/RoadmapSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { APP_CONFIG } from "@/constants";

export const metadata: Metadata = {
  title: `${APP_CONFIG.name} — ${APP_CONFIG.fullName} | Personal Operating System`,
  description: "Unify your tasks, workouts, knowledge notes, goals, and analytics into one seamless, enterprise-grade Personal Operating System.",
  openGraph: {
    title: "PTS — Personal Operating System",
    description: "The all-in-one workspace combining productivity, fitness tracking, markdown notes, and visual analytics.",
    url: "https://pts-app.com",
    siteName: "PTS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PTS — Personal Operating System",
    description: "Unified productivity, fitness, notes, and analytics.",
  },
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <LandingNavbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AnalyticsShowcase />
        <AppPreviewSection />
        <WhyPtsSection />
        <RoadmapSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <LandingFooter />
    </div>
  );
}
