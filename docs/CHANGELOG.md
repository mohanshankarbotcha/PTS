# Changelog - Personal Tracking System (PTS)

All notable changes to the PTS project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-08-06

### Added
- **Project Initialization**: Next.js 14 App Router with TypeScript strict mode, Tailwind CSS, ESLint, and Prettier.
- **Design System**: Integrated `ui-ux-pro-max` design tokens, Barlow Condensed & Barlow Google Fonts, CSS variables, and light/dark theme persistence.
- **Database Schema**: Configured Prisma ORM schema with PostgreSQL datasource, NextAuth models (`User`, `Account`, `Session`, `VerificationToken`), and PTS core placeholder models (`Task`, `Workout`, `Reminder`, `Note`, `Goal`, `Streak`, `Achievement`, `Analytics`).
- **Authentication Infrastructure**: Auth.js / NextAuth infrastructure setup in `lib/auth.ts` and API route handler `app/api/auth/[...nextauth]/route.ts`.
- **System Abstractions**: Storage abstraction layer (`lib/storage.ts`), browser notification engine prep (`lib/notifications.ts`), microservices fetch wrapper (`services/apiService.ts`).
- **State Stores**: Zustand stores configured in `store/` (`useUserStore`, `useThemeStore`, `useTaskStore`, `useWorkoutStore`, `useNotificationStore`, `useNoteStore`, `useAnalyticsStore`).
- **Responsive Layout**: Root application layout with responsive placeholders for `Sidebar`, `Navbar`, `GlobalNotificationContainer`, `ModalContainer`, and `LoadingOverlay`.
- **Documentation**: Created `docs/` directory with `CHANGELOG.md`, `ARCHITECTURE.md`, `DECISIONS.md`, and `ROADMAP.md`.
