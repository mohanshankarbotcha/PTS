# Changelog - Personal Tracking System (PTS)

All notable changes to the PTS project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2026-08-06

### Added
- **Production Authentication System**: NextAuth v4 + Credentials Provider + Google OAuth.
- **Bcrypt Password Hashing**: Integrated `bcryptjs` 12-round salted hashing for email/password user credentials.
- **Extended Prisma User Model**: Extended schema with `provider`, `lastLogin`, `onboardingCompleted` (default false), `resetToken`, and `resetTokenExpires` fields.
- **Authentication Pages**:
  - `/auth/signin`: Split layout glassmorphism Sign In page with email & password validation, Google OAuth button, loading indicators, and error handling.
  - `/auth/signup`: Full registration form with live strength meter, duplicate email detection, password match confirmation, and automatic sign-in redirect.
  - `/auth/forgot-password`: Password reset request page with email abstraction and token creation.
  - `/auth/reset-password`: Token verification page with new password reset confirmation.
- **Reusable Auth UI Primitives**: Created `AuthLayout`, `AuthCard`, `PasswordInput` (with eye toggle), `PasswordStrength` (5-criterion live strength meter), `OAuthButton`, `Divider`, `FormError` (with error shake animation), `FormSuccess`, and `LoadingButton`.
- **API Route Handlers**:
  - `/api/auth/register`: Zod-validated registration endpoint with duplicate check and bcrypt hashing.
  - `/api/auth/forgot-password`: Secure 32-byte crypto token generation with 1-hour expiration.
  - `/api/auth/reset-password`: Token verification and password update handler.
- **Route Protection Middleware (`middleware.ts`)**: Automatic JWT session inspection protecting all `/dashboard`, `/tasks`, `/workouts`, `/notes`, `/calendar`, `/analytics`, `/goals`, and `/settings` routes, with prepared onboarding redirect logic.

## [0.3.0] - 2026-08-06

### Added
- **Public Landing Page Website (`app/page.tsx`)**: Premium SaaS landing page with SEO OpenGraph & Twitter metadata.
- **Sticky Glassmorphic Public Navbar (`LandingNavbar.tsx`)**: Header with logo, section links, ThemeToggle, GitHub shortcut, and mobile drawer.
- **Sections**: Hero, Features, Analytics Showcase, App Preview, Why PTS, Roadmap, FAQ, Final CTA, and Footer.

## [0.2.0] - 2026-08-06

### Added
- **Application Shell & Layout Engine**: Implemented `AppShell` with desktop & mobile responsive layout boundaries.
- **Collapsible Sidebar**: Desktop collapsible sidebar and mobile drawer overlay.

## [0.1.0] - 2026-08-06

### Added
- **Project Initialization**: Next.js 14 App Router with TypeScript strict mode, Tailwind CSS, ESLint, and Prettier.
