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
* `components/`: UI components organized into:
  * `ui/`: Primitive reusable components (button, card, input, etc.).
  * `layout/`: Global layout components (Navbar, Sidebar, ModalContainer, etc.).
  * `shared/`: Generic multi-purpose widgets and helpers.
* `features/`: Business-logic domain modules (Tasks, Workouts, Notes, Analytics).
* `hooks/`: Custom React client hooks.
* `lib/`: System infrastructure (Prisma DB client, Auth options, Storage abstraction, Notification manager).
* `services/`: API communication wrappers and microservices integration layer.
* `store/`: Zustand state management stores with persistence where appropriate.
* `styles/`: CSS design system tokens and styling variables.
* `types/`: Global TypeScript interface and type declarations.
* `prisma/`: Prisma database schema and migration scripts.
* `docs/`: Comprehensive project documentation.

---

## 3. Core Subsystems

### 3.1 Design System & Theme Engine
* Built with `ui-ux-pro-max` design intelligence.
* Color tokens defined via CSS custom properties in `app/globals.css`.
* Supports `light`, `dark`, and `system` modes with seamless persistence via `next-themes` and `store/useThemeStore.ts`.

### 3.2 Database Layer
* **ORM**: Prisma ORM v5.
* **Database**: PostgreSQL.
* Direct mapping between Prisma Client models and domain entities.

### 3.3 Authentication & Security
* Auth.js (NextAuth v4) with JWT session strategy.
* Supports OAuth (Google) and email/password credentials infrastructure.
* Strict CORS, TypeScript strict mode, and type safety declarations in `types/next-auth.d.ts`.
