# LendSqr Frontend Assessment

LendSqr is a responsive loan management dashboard built with modern frontend technologies, simulating a lender’s admin panel that handles user profiles, loan data, and transactional details. It demonstrates a clean UI, smooth interactions, and real-world patterns to support core lending workflows.

## Table of Contents

1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Architecture & Structure](#architecture-structure)

### Overview

This project was developed as part of the LendSqr Frontend Engineering Assessment. It was inspired by publicly shared LendSqr FE projects and includes:

- Login authentication,

- Dashboard with paginated user lists,

- Drill-down user details with loan and savings info,

### Key Features

- Authentication: Supabase auth for session-based login & logout flows.

- Dashboard Widgets: Live counts of users, active users, loans, and savings.

- Paginated User Table: Mantine’s usePagination, ellipsis-based pagination, and responsive table with filters.

- User Profiles: Detailed pages with personal info, employment, guarantor data, and quick actions.

- Form Handling: Reactive with React Hook Form, validation via Zod, and helper UI resolvers.

- Type safety: Full TypeScript coverage for props, component interfaces, utility types.

### Tech Stack

- React & TypeScript

- Sass (SCSS)

- React Hook Form + Zod

- Mantine Hooks (usePagination)

- Supabase Auth for login/logout flows

- Local Storage to seed/mock data

### Architecture & Structure

- components/ – Reusable UI elements (Table, Pagination, Widget)

- pages/ – Route-based screens (Login, Dashboard, UserDetails)

- hooks/ – Custom hooks

- utilities/ – Helpers (formatting)

- types/ – Central type definitions for domain objects

- sass/ – Sass styles files for different sections
