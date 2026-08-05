"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import {
  Sparkles,
  ArrowRight,
  Dumbbell,
  Briefcase,
  Sun,
  Moon,
  Monitor,
  CheckCircle2,
  Clock,
  Bell,
  Globe,
  Flame,
  UserCheck,
  Target,
} from "lucide-react";
import { ProgressHeader } from "@/components/onboarding/ProgressHeader";
import { OnboardingCard } from "@/components/onboarding/OnboardingCard";
import { StepContainer } from "@/components/onboarding/StepContainer";
import { AnimatedOptionCard } from "@/components/onboarding/AnimatedOptionCard";
import { TimeSelector } from "@/components/onboarding/TimeSelector";
import { PreferenceToggle } from "@/components/onboarding/PreferenceToggle";
import { AvatarUploader } from "@/components/onboarding/AvatarUploader";
import { ReviewCard } from "@/components/onboarding/ReviewCard";
import { CompletionAnimation } from "@/components/onboarding/CompletionAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useThemeStore } from "@/store/useThemeStore";

export default function OnboardingPage() {
  const router = useRouter();
  const { data: session, update: updateSession } = useSession();
  const { theme, setTheme } = useTheme();
  const { setTheme: setZustandTheme } = useThemeStore();

  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Form State across steps
  const [profileData, setProfileData] = useState({
    fullName: "",
    avatar: "",
    country: "United States",
    timezone: "UTC",
    language: "English",
  });

  const [fitnessGoal, setFitnessGoal] = useState("Stay Active");
  const [productivityGoal, setProductivityGoal] = useState("Personal Growth");

  const [scheduleData, setScheduleData] = useState({
    wakeTime: "07:00",
    sleepTime: "23:00",
    workoutTime: "07:30",
    workStart: "09:00",
    workEnd: "17:00",
    studyStart: "18:00",
    studyEnd: "20:00",
    weekStartsOn: "monday",
  });

  const [notificationsData, setNotificationsData] = useState({
    workoutReminders: true,
    taskReminders: true,
    goalReminders: true,
    weeklyReports: true,
    dailySummary: true,
    browserNotifications: true,
  });

  const [selectedTheme, setSelectedTheme] = useState<"system" | "light" | "dark">("system");

  // Restore onboarding progress from DB on load
  useEffect(() => {
    async function loadProgress() {
      try {
        const res = await fetch("/api/onboarding");
        if (res.ok) {
          const data = await res.json();
          if (data.user?.onboardingCompleted) {
            router.push("/dashboard");
            return;
          }
          if (data.currentStep) {
            setCurrentStep(data.currentStep);
          }
          if (data.stepData) {
            const sd = data.stepData;
            if (sd.profileData) setProfileData(sd.profileData);
            if (sd.fitnessGoal) setFitnessGoal(sd.fitnessGoal);
            if (sd.productivityGoal) setProductivityGoal(sd.productivityGoal);
            if (sd.scheduleData) setScheduleData(sd.scheduleData);
            if (sd.notificationsData) setNotificationsData(sd.notificationsData);
            if (sd.selectedTheme) setSelectedTheme(sd.selectedTheme);
          } else if (data.user?.name) {
            setProfileData((prev) => ({
              ...prev,
              fullName: data.user.name || "",
              avatar: data.user.image || "",
            }));
          }
        }
      } catch (err) {
        console.error("Failed to restore onboarding state:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadProgress();
  }, [router]);

  // Set default full name from session user if empty
  useEffect(() => {
    if (session?.user?.name && !profileData.fullName) {
      setProfileData((prev) => ({ ...prev, fullName: session.user.name || "" }));
    }
  }, [session, profileData.fullName]);

  // Autosave progress to server on step change
  const saveProgress = async (nextStep: number) => {
    try {
      const stepData = {
        profileData,
        fitnessGoal,
        productivityGoal,
        scheduleData,
        notificationsData,
        selectedTheme,
      };
      await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentStep: nextStep, stepData }),
      });
    } catch (e) {
      console.warn("Autosave failed:", e);
    }
  };

  const handleNext = () => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    saveProgress(nextStep);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      saveProgress(prevStep);
    }
  };

  const handleThemeSelect = (t: "system" | "light" | "dark") => {
    setSelectedTheme(t);
    setTheme(t);
    setZustandTheme(t as any);
  };

  const handleFinalize = async () => {
    try {
      await fetch("/api/onboarding/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profileData,
          fitnessGoal,
          productivityGoal,
          scheduleData,
          notificationsData,
          theme: selectedTheme,
        }),
      });

      await updateSession({ onboardingCompleted: true });
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      console.error("Finalize onboarding error:", err);
      router.push("/dashboard");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center gap-3 font-display text-sm font-semibold">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-accent border-t-transparent" />
          <span>Loading PTS Personalization Engine...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between p-4 sm:p-8 max-w-3xl mx-auto">
      {/* Header with step progress bar */}
      <ProgressHeader
        currentStep={currentStep}
        totalSteps={9}
        onBack={handleBack}
        canBack={currentStep < 9}
      />

      {/* Main Step Container */}
      <div className="my-auto py-4">
        <StepContainer stepKey={currentStep}>
          <OnboardingCard>
            {/* ================= STEP 1: WELCOME ================= */}
            {currentStep === 1 && (
              <div className="text-center space-y-6 py-4">
                <div className="inline-flex items-center gap-2 rounded-full border bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent shadow-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Welcome to PTS 0.5.0</span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight leading-tight">
                    Welcome to Your Personal Operating System
                  </h1>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
                    PTS unifies daily task management, fitness tracking, markdown notes, habit goals, and visual analytics into one fast, private workspace.
                  </p>
                </div>

                {/* Graphical Feature Preview Badge Grid */}
                <div className="grid grid-cols-3 gap-3 pt-4 max-w-md mx-auto">
                  <div className="p-3 rounded-2xl border bg-card/60 space-y-1">
                    <CheckCircle2 className="h-5 w-5 text-accent mx-auto" />
                    <span className="text-[11px] font-semibold block">Tasks & Focus</span>
                  </div>
                  <div className="p-3 rounded-2xl border bg-card/60 space-y-1">
                    <Dumbbell className="h-5 w-5 text-emerald-500 mx-auto" />
                    <span className="text-[11px] font-semibold block">Fitness Sync</span>
                  </div>
                  <div className="p-3 rounded-2xl border bg-card/60 space-y-1">
                    <Target className="h-5 w-5 text-indigo-500 mx-auto" />
                    <span className="text-[11px] font-semibold block">Goal Streaks</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    onClick={handleNext}
                    variant="accent"
                    size="lg"
                    className="w-full sm:w-auto h-12 px-8 rounded-xl font-semibold shadow-glow text-sm"
                  >
                    Let&apos;s Begin Personalization
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* ================= STEP 2: PROFILE ================= */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold font-display tracking-tight">Setup Your Profile</h2>
                  <p className="text-xs text-muted-foreground">How should PTS address you across your workspace?</p>
                </div>

                <AvatarUploader
                  name={profileData.fullName || "User"}
                  value={profileData.avatar}
                  onChange={(url) => setProfileData((p) => ({ ...p, avatar: url }))}
                />

                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground">Display Name</label>
                    <Input
                      type="text"
                      placeholder="Alex Morgan"
                      value={profileData.fullName}
                      onChange={(e) => setProfileData((p) => ({ ...p, fullName: e.target.value }))}
                      className="h-10 rounded-xl"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-foreground">Country</label>
                      <Input
                        type="text"
                        value={profileData.country}
                        onChange={(e) => setProfileData((p) => ({ ...p, country: e.target.value }))}
                        className="h-10 rounded-xl"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-foreground">Timezone</label>
                      <Input
                        type="text"
                        value={profileData.timezone}
                        onChange={(e) => setProfileData((p) => ({ ...p, timezone: e.target.value }))}
                        className="h-10 rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!profileData.fullName.trim()}
                  variant="accent"
                  className="w-full h-10 rounded-xl font-semibold shadow-md text-sm mt-4"
                >
                  Continue to Fitness Goals
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}

            {/* ================= STEP 3: FITNESS GOALS ================= */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold font-display tracking-tight">Select Fitness Goal</h2>
                  <p className="text-xs text-muted-foreground">What is your primary physical wellness objective?</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { id: "Build Muscle", title: "Build Muscle", desc: "Hypertrophy & strength progression", icon: <Dumbbell className="h-5 w-5" /> },
                    { id: "Lose Weight", title: "Lose Weight", desc: "Caloric burn & endurance cardio", icon: <Flame className="h-5 w-5" /> },
                    { id: "Improve Cardio", title: "Improve Cardio", desc: "Stamina, running & heart health", icon: <Sparkles className="h-5 w-5" /> },
                    { id: "Stay Active", title: "Stay Active", desc: "Daily mobility & habit tracking", icon: <UserCheck className="h-5 w-5" /> },
                    { id: "General Fitness", title: "General Fitness", desc: "Balanced strength & mobility", icon: <Target className="h-5 w-5" /> },
                    { id: "Custom", title: "Custom Routine", desc: "Tailored workout metrics", icon: <Globe className="h-5 w-5" /> },
                  ].map((goal) => (
                    <AnimatedOptionCard
                      key={goal.id}
                      id={goal.id}
                      title={goal.title}
                      description={goal.desc}
                      icon={goal.icon}
                      selected={fitnessGoal === goal.id}
                      onSelect={(id) => setFitnessGoal(id)}
                    />
                  ))}
                </div>

                <Button
                  onClick={handleNext}
                  variant="accent"
                  className="w-full h-10 rounded-xl font-semibold shadow-md text-sm mt-4"
                >
                  Continue to Productivity Goals
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}

            {/* ================= STEP 4: PRODUCTIVITY GOALS ================= */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold font-display tracking-tight">Select Productivity Goal</h2>
                  <p className="text-xs text-muted-foreground">What is your primary professional or study focus?</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { id: "Student", title: "Student Focus", desc: "Coursework, exam prep & study notes", icon: <Globe className="h-5 w-5" /> },
                    { id: "Professional", title: "Software & Engineering", desc: "Project deadlines, coding tasks & docs", icon: <Briefcase className="h-5 w-5" /> },
                    { id: "Business", title: "Founder & Business", desc: "Strategy, milestones & growth goals", icon: <Sparkles className="h-5 w-5" /> },
                    { id: "Personal Growth", title: "Personal Growth", desc: "Reading, habits & daily discipline", icon: <Target className="h-5 w-5" /> },
                    { id: "Custom", title: "Custom Focus", desc: "Tailored productivity metrics", icon: <Clock className="h-5 w-5" /> },
                  ].map((p) => (
                    <AnimatedOptionCard
                      key={p.id}
                      id={p.id}
                      title={p.title}
                      description={p.desc}
                      icon={p.icon}
                      selected={productivityGoal === p.id}
                      onSelect={(id) => setProductivityGoal(id)}
                    />
                  ))}
                </div>

                <Button
                  onClick={handleNext}
                  variant="accent"
                  className="w-full h-10 rounded-xl font-semibold shadow-md text-sm mt-4"
                >
                  Continue to Daily Schedule
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}

            {/* ================= STEP 5: DAILY SCHEDULE ================= */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold font-display tracking-tight">Configure Daily Schedule</h2>
                  <p className="text-xs text-muted-foreground">Set your optimal hours to generate smart reminder recommendations.</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <TimeSelector
                    label="Wake Up Time"
                    value={scheduleData.wakeTime}
                    onChange={(val) => setScheduleData((s) => ({ ...s, wakeTime: val }))}
                  />
                  <TimeSelector
                    label="Sleep Time"
                    value={scheduleData.sleepTime}
                    onChange={(val) => setScheduleData((s) => ({ ...s, sleepTime: val }))}
                  />
                  <TimeSelector
                    label="Preferred Workout Time"
                    value={scheduleData.workoutTime}
                    onChange={(val) => setScheduleData((s) => ({ ...s, workoutTime: val }))}
                  />
                  <TimeSelector
                    label="Work Hours Start"
                    value={scheduleData.workStart}
                    onChange={(val) => setScheduleData((s) => ({ ...s, workStart: val }))}
                  />
                </div>

                <Button
                  onClick={handleNext}
                  variant="accent"
                  className="w-full h-10 rounded-xl font-semibold shadow-md text-sm mt-4"
                >
                  Continue to Notifications
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}

            {/* ================= STEP 6: NOTIFICATIONS ================= */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold font-display tracking-tight">Notification Preferences</h2>
                  <p className="text-xs text-muted-foreground">Choose which automated notifications and digests you would like to receive.</p>
                </div>

                <div className="space-y-2.5">
                  <PreferenceToggle
                    label="Workout Reminders"
                    description="Get scheduled alerts before your target exercise time."
                    checked={notificationsData.workoutReminders}
                    onChange={(val) => setNotificationsData((n) => ({ ...n, workoutReminders: val }))}
                    icon={<Dumbbell className="h-4 w-4" />}
                  />
                  <PreferenceToggle
                    label="Task Due Alerts"
                    description="Notifications for urgent high-priority focus tasks."
                    checked={notificationsData.taskReminders}
                    onChange={(val) => setNotificationsData((n) => ({ ...n, taskReminders: val }))}
                    icon={<Bell className="h-4 w-4" />}
                  />
                  <PreferenceToggle
                    label="Weekly Summary Digest"
                    description="Receive a weekly report of completed goals and analytics."
                    checked={notificationsData.weeklyReports}
                    onChange={(val) => setNotificationsData((n) => ({ ...n, weeklyReports: val }))}
                    icon={<Sparkles className="h-4 w-4" />}
                  />
                </div>

                <Button
                  onClick={handleNext}
                  variant="accent"
                  className="w-full h-10 rounded-xl font-semibold shadow-md text-sm mt-4"
                >
                  Continue to Appearance
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}

            {/* ================= STEP 7: APPEARANCE ================= */}
            {currentStep === 7 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold font-display tracking-tight">Workspace Appearance</h2>
                  <p className="text-xs text-muted-foreground">Choose your preferred visual theme. Updates in real-time.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { id: "system" as const, title: "System Theme", icon: <Monitor className="h-6 w-6" />, desc: "Syncs with device mode" },
                    { id: "light" as const, title: "Light Theme", icon: <Sun className="h-6 w-6 text-amber-500" />, desc: "Clean high-contrast light" },
                    { id: "dark" as const, title: "Dark Mode", icon: <Moon className="h-6 w-6 text-indigo-400" />, desc: "Sleek glassmorphism dark" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => handleThemeSelect(t.id)}
                      className={`p-5 rounded-2xl border text-center space-y-2 transition-all ${
                        selectedTheme === t.id
                          ? "border-accent bg-accent/10 ring-2 ring-accent shadow-md"
                          : "border-border bg-card/60 hover:bg-card"
                      }`}
                    >
                      <div className="mx-auto flex justify-center">{t.icon}</div>
                      <span className="font-bold text-xs sm:text-sm font-display block">{t.title}</span>
                      <p className="text-[11px] text-muted-foreground leading-tight">{t.desc}</p>
                    </button>
                  ))}
                </div>

                <Button
                  onClick={handleNext}
                  variant="accent"
                  className="w-full h-10 rounded-xl font-semibold shadow-md text-sm mt-4"
                >
                  Review Final Setup
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}

            {/* ================= STEP 8: REVIEW ================= */}
            {currentStep === 8 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold font-display tracking-tight">Review Your Settings</h2>
                  <p className="text-xs text-muted-foreground">Double check your personalization details before launching.</p>
                </div>

                <ReviewCard
                  profileData={profileData}
                  fitnessGoal={fitnessGoal}
                  productivityGoal={productivityGoal}
                  scheduleData={scheduleData}
                  theme={selectedTheme}
                  onJumpToStep={(step) => setCurrentStep(step)}
                />

                <Button
                  onClick={handleNext}
                  variant="accent"
                  className="w-full h-12 rounded-xl font-semibold shadow-glow text-sm mt-4"
                >
                  Confirm & Launch Workspace
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}

            {/* ================= STEP 9: COMPLETION ANIMATION ================= */}
            {currentStep === 9 && (
              <CompletionAnimation onComplete={handleFinalize} />
            )}
          </OnboardingCard>
        </StepContainer>
      </div>

      {/* Footer Info */}
      <div className="text-center text-[11px] text-muted-foreground py-2 font-mono">
        PTS Personalization Engine • Progress autosaved to cloud database
      </div>
    </div>
  );
}
