# The Life Archive — Rose

A staged, multi-user personal operating system. This repository is the initial foundation and design-shell milestone, not a production-ready application.

## Current implementation

- Next.js App Router + React + TypeScript project scaffold.
- Centralized Dark Academia / Light Parchment CSS tokens.
- Responsive navigation shell with eight department destinations.
- Dashboard and department workspace shell.
- Theme toggle, collapsible desktop sidebar, responsive mobile navigation.
- Search/navigation dialog and Quick Capture interaction.
- Quick Capture is currently in-memory for this browser session only. It is not persisted or synchronized.
- Explicit empty states for modules that are not implemented.

## Requirements and missing input

Version 1.1 was available and reviewed in full. The separate Blueprint v1.0 was not present in the uploaded files or the accessible Library search. The original requirements pasted in the conversation are retained as context, but the missing v1.0 must be supplied before the full requirements can be reconciled.

## Prerequisites

- Node.js 20.9 or newer (Node 22 recommended)
- npm
- A Supabase project is required only when authentication/database work is started.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

The current execution environment had Node.js and npm, but no cached Next.js dependencies and no confirmed network access for package installation. The Next.js runtime has therefore not yet been verified here.

## Environment variables

No environment variables are required for the current shell preview. `.env.example` lists the future Supabase variables as comments only. Do not add credentials until a Supabase project is created and the integration is implemented.

## Security status

Authentication, authorization, PostgreSQL persistence, Row Level Security, cloud file storage, backups and account isolation are not implemented yet. Do not store sensitive personal data in this prototype.
