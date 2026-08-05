# Changelog - Personal Tracking System (PTS)

All notable changes to the PTS project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-08-06

### Added
- **Application Shell & Layout Engine**: Implemented `AppShell` with desktop & mobile responsive layout boundaries, backdrop blurs, and Framer Motion page transitions.
- **Collapsible Sidebar**: Desktop collapsible sidebar (240px expanded vs 72px collapsed) with spring animations, and mobile slide-over drawer overlay (`Sidebar.tsx`).
- **Top Navigation Bar**: Sticky header (`Navbar.tsx`) with auto-generated route breadcrumbs (`Breadcrumbs.tsx`), global search trigger, unread notification counter badge, animated theme toggle (`ThemeToggle.tsx`), and user avatar dropdown (`UserDropdown.tsx`).
- **Command Palette (`Cmd + K` / `Ctrl + K`)**: Modal command palette (`CommandPalette.tsx`) with keyboard navigation (`ArrowUp`, `ArrowDown`, `Enter`, `Escape`), search filtering, backdrop blur, and category grouping.
- **Slide-Over Notification Panel**: Right-hand slide-over drawer (`NotificationPanel.tsx`) with tab filters (All, Unread), unread counter badges, empty state, and placeholder notifications.
- **Page Shell Placeholders**: Created responsive placeholder pages with `PageHeader`, `EmptyState`, and `ComingSoonCard` widgets for `/dashboard`, `/tasks`, `/workouts`, `/notes`, `/calendar`, `/goals`, `/analytics`, and `/settings`.
- **Reusable Skeleton Loader Components**: Created skeleton primitives (`CardSkeleton`, `TableSkeleton`, `ListSkeleton`, `ChartSkeleton`, `PageSkeleton`) under `components/ui/skeletons/`.
- **Error Boundaries & System Pages**: Added `app/not-found.tsx` (404), `app/loading.tsx` (Suspense skeleton), `app/error.tsx` (Boundary with logging & retry button), and `app/global-error.tsx`.

## [0.1.0] - 2026-08-06

### Added
- **Project Initialization**: Next.js 14 App Router with TypeScript strict mode, Tailwind CSS, ESLint, and Prettier.
- **Design System**: Integrated `ui-ux-pro-max` design tokens, Barlow Condensed & Barlow Google Fonts, CSS variables, and light/dark theme persistence.
- **Database Schema**: Configured Prisma ORM schema with PostgreSQL datasource, NextAuth models, and PTS core placeholder models.
- **Authentication Infrastructure**: Auth.js / NextAuth infrastructure setup in `lib/auth.ts` and API route handler.
- **Documentation**: Created `docs/` directory with `CHANGELOG.md`, `ARCHITECTURE.md`, `DECISIONS.md`, and `ROADMAP.md`.
