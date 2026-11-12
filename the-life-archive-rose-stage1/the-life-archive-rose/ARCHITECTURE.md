# Architecture

## Intended architecture

Modular monolith using Next.js App Router, React and TypeScript. Feature modules will be separated by domain while sharing authorization, data access, design primitives and organizational records.

## Planned platform services

- Frontend/application server: Next.js App Router.
- Identity: Supabase Auth.
- Relational data: Supabase PostgreSQL.
- Authorization: PostgreSQL Row Level Security plus server-side workspace membership checks.
- Object storage: Supabase Storage initially.
- Rich notes: Tiptap when the notes module is implemented.
- Charts: Recharts when meaningful persisted data exists.
- Icons: Lucide React.
- Local/offline cache: IndexedDB in a later synchronization milestone.
- Initial hosting target: Vercel.

## Current reality

Only the Next.js source scaffold and client-side shell have been created. No backend services are connected. The shell uses local React state for temporary interactions. No claims of persistence, authentication or cloud synchronization are made.

## Data boundary

Every user-owned record must carry a workspace/user ownership relationship. Protected reads and writes must be enforced in the database and server-side, not merely hidden in the UI. Service-role secrets must remain server-only.
