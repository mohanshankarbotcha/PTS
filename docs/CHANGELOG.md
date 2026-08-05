# Changelog - Personal Tracking System (PTS)

All notable changes to the PTS project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2026-08-06

### Added
- **First-Time User Experience (FTUE) & Personalization Engine**: 9-step animated onboarding workflow (`/onboarding`).
- **Prisma Database Architecture Extensions**:
  - `UserProfile`: Dedicated model storing `fullName`, `avatar`, `bio`, `timezone`, `country`, and `language`.
  - `UserPreferences`: Dedicated model storing `theme`, `notificationsEnabled`, `reminderTime`, `preferredWorkoutTime`, `preferredWorkHoursStart`, `preferredWorkHoursEnd`, `preferredStudyHoursStart`, `preferredStudyHoursEnd`, `weekStartsOn`, and `onboardingCompleted`.
  - `UserGoals`: Dedicated model storing `fitnessGoal`, `productivityGoal`, `targetWorkoutDays`, `dailyTaskTarget`, and `weeklyFocus`.
  - `OnboardingProgress`: Dedicated model tracking `currentStep` and `stepData` for cloud progress autosave and session recovery.
- **9-Step Multi-Step Interactive Onboarding Experience**:
  - **Step 1 (Welcome)**: Introduction to PTS operating system features.
  - **Step 2 (Profile)**: Full Name, preset/custom avatar URL uploader, Country, Timezone, Language.
  - **Step 3 (Fitness Goals)**: Animated option cards (Build Muscle, Lose Weight, Improve Cardio, Stay Active, General Fitness, Custom).
  - **Step 4 (Productivity Goals)**: Animated option cards (Student, Professional, Business, Personal Growth, Custom).
  - **Step 5 (Daily Schedule)**: Time pickers for Wake Time, Sleep Time, Preferred Workout Time, Work Hours, and Study Hours.
  - **Step 6 (Notifications)**: Animated preference toggles for Workout reminders, Task alerts, and Weekly digests.
  - **Step 7 (Appearance)**: Live interactive theme selection (System, Light, Dark) with instant `useTheme()` updates.
  - **Step 8 (Review)**: Summary card of all selected preferences with Edit shortcuts.
  - **Step 9 (Workspace Preparation)**: Animated workspace initialization loading sequence updating `onboardingCompleted = true` and redirecting to `/dashboard`.
- **Onboarding Middleware Guards (`middleware.ts`)**: Enforced automatic redirect to `/onboarding` for un-onboarded authenticated users, and redirect to `/dashboard` for onboarded users.
- **API Endpoints**:
  - `GET /api/onboarding`: Progress & state restoration for seamless refresh recovery.
  - `POST /api/onboarding`: Autosave step progress.
  - `POST /api/onboarding/complete`: Finalizes personalization data in `UserProfile`, `UserPreferences`, and `UserGoals`.

## [0.4.0] - 2026-08-06

### Added
- **Production Authentication System**: NextAuth v4 + Credentials Provider + Google OAuth.
- **Bcrypt Hashing**: 12-round salted password verification.
- **Authentication Pages**: `/auth/signin`, `/auth/signup`, `/auth/forgot-password`, `/auth/reset-password`.
- **Reusable Auth UI Primitives**: `AuthLayout`, `AuthCard`, `PasswordInput`, `PasswordStrength`, `OAuthButton`, `Divider`, `FormError`, `FormSuccess`, `LoadingButton`.
- **Route Protection Middleware**: JWT session inspection guarding private routes.

## [0.3.0] - 2026-08-06

### Added
- **Public Landing Page Website (`app/page.tsx`)**: Premium SaaS landing page with SEO metadata.

## [0.2.0] - 2026-08-06

### Added
- **Application Shell & Layout Engine**: Implemented `AppShell` with desktop & mobile responsive layout boundaries.

## [0.1.0] - 2026-08-06

### Added
- **Project Initialization**: Next.js 14 App Router with TypeScript strict mode, Tailwind CSS, ESLint, and Prettier.
