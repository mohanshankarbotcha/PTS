# Changelog - Personal Tracking System (PTS)

All notable changes to the PTS project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2026-08-06

### Added
- **Public Landing Page Website (`app/page.tsx`)**: Premium SaaS landing page with SEO OpenGraph & Twitter metadata.
- **Sticky Glassmorphic Public Navbar (`LandingNavbar.tsx`)**: Sticky header with brand logo, smooth section links, ThemeToggle, GitHub repository shortcut, and mobile drawer menu.
- **Stunning Hero Section (`HeroSection.tsx`)**: Release announcement badge, "Your Personal Operating System" headline, animated gradient background, floating blurred shapes, grid overlay, CTA buttons, and interactive Mac-style preview card.
- **Engineered Capabilities Feature Grid (`FeaturesSection.tsx`)**: 8 detailed feature cards with Lucide icons, hover glow, border animation, and domain descriptions (Tasks, Workouts, Notes, Calendar, Goals, Reminders, Analytics, AI Reports).
- **Visual Analytics Showcase (`AnalyticsShowcase.tsx`)**: Interactive circular progress SVG ring, activity volume bar charts, and key performance metric cards.
- **Interactive App Preview Showcase (`AppPreviewSection.tsx`)**: Tabbed mock interface switcher previewing Dashboard, Task Manager, Workout Tracker, Knowledge Notes, and Analytics.
- **Why PTS Value Pillars (`WhyPtsSection.tsx`)**: Grid showcasing all-in-one architecture, fitness-productivity synergies, AI insights, privacy, and sub-100ms speed.
- **Evolution Roadmap Timeline (`RoadmapSection.tsx`)**: Interactive timeline displaying development milestones from Phase 1 through Phase 5.
- **Interactive FAQ Accordion (`FaqSection.tsx`)**: Animated expandable FAQ component answering common questions about PTS.
- **Final CTA & Landing Footer (`FinalCtaSection.tsx`, `LandingFooter.tsx`)**: High-converting call-to-action banner and full-site footer with links, socials, and copyright.

## [0.2.0] - 2026-08-06

### Added
- **Application Shell & Layout Engine**: Implemented `AppShell` with desktop & mobile responsive layout boundaries.
- **Collapsible Sidebar**: Desktop collapsible sidebar (240px expanded vs 72px collapsed) and mobile drawer overlay.
- **Top Navigation Bar**: Sticky header (`Navbar.tsx`) with auto-generated route breadcrumbs, global search trigger, unread notification counter badge, animated theme toggle, and user avatar dropdown.
- **Command Palette (`Cmd + K`)**: Modal command palette (`CommandPalette.tsx`) with keyboard navigation.
- **Slide-Over Notification Panel**: Right-hand slide-over drawer (`NotificationPanel.tsx`).
- **Page Shell Placeholders**: Created `/dashboard`, `/tasks`, `/workouts`, `/notes`, `/calendar`, `/goals`, `/analytics`, and `/settings`.
- **Reusable Skeleton Loader Components**: Created skeleton primitives (`CardSkeleton`, `TableSkeleton`, `ListSkeleton`, `ChartSkeleton`, `PageSkeleton`).

## [0.1.0] - 2026-08-06

### Added
- **Project Initialization**: Next.js 14 App Router with TypeScript strict mode, Tailwind CSS, ESLint, and Prettier.
- **Design System**: Integrated `ui-ux-pro-max` design tokens, Barlow Condensed & Barlow Google Fonts.
- **Database Schema**: Configured Prisma ORM schema with PostgreSQL datasource, NextAuth models, and PTS core models.
- **Documentation**: Created `docs/` directory with `CHANGELOG.md`, `ARCHITECTURE.md`, `DECISIONS.md`, and `ROADMAP.md`.
