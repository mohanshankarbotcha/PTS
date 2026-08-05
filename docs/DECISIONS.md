# Architectural Decision Records (ADR) - PTS

This log captures key architectural and design decisions made throughout the lifecycle of the PTS project.

---

## ADR 001: Adopt Next.js App Router & TypeScript Strict Mode

* **Status**: Accepted
* **Context**: Need a modern, production-grade full-stack framework with React Server Components capability, fast routing, and strict type safety.
* **Decision**: Selected Next.js 14 App Router paired with TypeScript in `strict: true` mode.
* **Consequences**: Enables server rendering, API route handlers, and bulletproof compile-time safety.

---

## ADR 002: Dual Color-Token System with UI/UX Pro Max Intelligence

* **Status**: Accepted
* **Context**: Need a visual design system that feels premium, highly responsive, and accessible in both light and dark modes.
* **Decision**: Integrated `ui-ux-pro-max` search script, generating CSS custom variables in `app/globals.css` mapped to Tailwind configuration tokens.
* **Consequences**: Ensures WCAG-compliant contrast ratios, consistent typography hierarchy (Barlow Condensed + Barlow + Inter), and seamless theme switching.

---

## ADR 003: Storage & Microservices Abstraction Layers

* **Status**: Accepted
* **Context**: The project will initially run on Next.js route handlers but may migrate to a dedicated backend (Express/NestJS) or cloud storage (S3/Cloudinary) in the future.
* **Decision**: Implemented abstract TypeScript interfaces in `lib/storage.ts` and `services/apiService.ts`.
* **Consequences**: Future prompts can swap underlying storage providers or API endpoints without refactoring component UI code.

---

## ADR 004: Zustand for Lightweight Client State Management

* **Status**: Accepted
* **Context**: Need modular, decoupled state stores for user profile, theme preference, task lists, workout logs, notes, and notifications.
* **Decision**: Selected Zustand with selective `persist` middleware for theme state.
* **Consequences**: Zero boilerplate, clean selector subscriptions, and seamless React state synchronization.
