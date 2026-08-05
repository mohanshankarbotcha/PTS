# Architecture Overview - Personal Tracking System (PTS)

PTS is designed as an enterprise-grade Personal Operating System combining productivity, fitness tracking, reminders, notes, goals, and analytics into a unified, scalable web application.

---

## 1. High-Level System Architecture

```
                               ┌─────────────────────────┐
                               │   Next.js App Router    │
                               │  (React 18 + Tailwind)  │
                               └───────────┬─────────────┘
                                           │
                        ┌──────────────────┴──────────────────┐
                        ▼                                     ▼
             ┌─────────────────────┐               ┌─────────────────────┐
             │ Client State Engine │               │ Route Handlers / API│
             │   (Zustand Stores)  │               │   (Next.js Server)  │
             └─────────────────────┘               └───────────┬─────────┘
                                                               │
                                                               ▼
                                                   ┌─────────────────────┐
                                                   │     Prisma ORM      │
                                                   └───────────┬─────────┘
                                                               │
                                                               ▼
                                                   ┌─────────────────────┐
                                                   │ PostgreSQL Database │
                                                   └─────────────────────┘
```

---

## 2. Directory Structure Conventions

* `app/`: Next.js App Router routes, layouts, server components, and API route handlers.
  * `/`: Standalone public marketing landing page website.
  * `/auth/*`: Sign in, sign up, forgot password, reset password pages.
  * `/onboarding`: 9-step FTUE multi-step personalization engine.
  * `/dashboard`, `/tasks`, `/workouts`, `/notes`, `/calendar`, `/analytics`, `/goals`, `/settings`: Authenticated application shell routes.
* `components/`: UI components organized into:
  * `ui/`: Primitive reusable components (button, card, input, skeletons, etc.).
  * `layout/`: Global Application Shell components (AppShell, Navbar, Sidebar, CommandPalette, NotificationPanel, UserDropdown, ThemeToggle).
  * `landing/`: Standalone public landing page components.
  * `auth/`: Reusable authentication components (AuthLayout, AuthCard, PasswordInput, PasswordStrength, OAuthButton, FormError, FormSuccess, LoadingButton).
  * `onboarding/`: FTUE personalization components (ProgressHeader, OnboardingCard, StepContainer, AnimatedOptionCard, TimeSelector, PreferenceToggle, AvatarUploader, ReviewCard, CompletionAnimation).
* `lib/`: System infrastructure (`db.ts`, `auth.ts`, `storage.ts`, `notifications.ts`).
* `store/`: Zustand state stores (`useAppStore.ts`, `useThemeStore.ts`).
* `types/`: Global TypeScript definitions (`next-auth.d.ts`).
* `prisma/`: Prisma schema (`schema.prisma`) with Auth, UserProfile, UserPreferences, UserGoals, OnboardingProgress, and PTS Core models.
* `docs/`: Complete documentation (`CHANGELOG.md`, `ARCHITECTURE.md`, `DECISIONS.md`, `ROADMAP.md`).

---

## 3. Core Subsystems

### 3.1 Design System & Theme Engine
* Built with `ui-ux-pro-max` design intelligence.
* Color tokens defined via CSS custom properties in `app/globals.css`.
* Supports `light`, `dark`, and `system` modes with seamless persistence via `next-themes` and `store/useThemeStore.ts`.

### 3.2 Database Layer
* **ORM**: Prisma ORM v5.
* **Database**: PostgreSQL.
* Dedicated models: `User`, `Account`, `Session`, `UserProfile`, `UserPreferences`, `UserGoals`, `OnboardingProgress`, `Task`, `Workout`, `Reminder`, `Note`, `Goal`, `Streak`, `Achievement`, `Analytics`.

### 3.3 Authentication & Security
* NextAuth v4 + Credentials Provider + Google OAuth.
* Password hashing with 12-round salted `bcryptjs`.
* Route Protection via `middleware.ts` inspecting JWT tokens and enforcing `onboardingCompleted` redirect flows.

### 3.4 First-Time User Experience (FTUE) & Personalization Engine
* 9-step conversational onboarding workflow collecting profile details, fitness goals, productivity goals, daily schedule, notification preferences, and workspace appearance.
* Real-time cloud progress autosave & step restoration.
