export interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: string;
  description?: string;
}

export const APP_CONFIG = {
  name: "PTS",
  fullName: "Personal Tracking System",
  description: "Enterprise-grade Personal Operating System combining productivity, fitness, notes, and analytics.",
  version: "1.0.0",
  author: "PTS Team",
  navItems: [
    { label: "Home", href: "/dashboard", icon: "Home", description: "Central operating hub" },
    { label: "Tasks", href: "/tasks", icon: "CheckSquare", description: "Manage tasks & todos" },
    { label: "Workout", href: "/workouts", icon: "Dumbbell", description: "Track exercises & routines" },
    { label: "Notes", href: "/notes", icon: "FileText", description: "Knowledge base & notes" },
    { label: "Calendar", href: "/calendar", icon: "Calendar", description: "Schedule & events" },
    { label: "Goals", href: "/goals", icon: "Target", description: "Track targets & progress" },
    { label: "Analytics", href: "/analytics", icon: "LineChart", description: "Performance insights" },
    { label: "Settings", href: "/settings", icon: "Settings", description: "App preferences & account" },
  ] as NavItem[],
};
