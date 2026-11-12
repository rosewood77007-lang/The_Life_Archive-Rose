# Database

No database is connected and no migrations are active in this milestone.

## Planned first entities (subject to Blueprint v1.0 reconciliation)
- profiles
- workspaces
- workspace_members
- departments
- folders
- pages

Later feature tables will cover tasks, projects, goals, calendar events, notes, diary entries, resources, file metadata and AI consent/audit records.

## Required invariants
- Explicit ownership and workspace membership.
- Foreign keys and useful uniqueness constraints.
- Row Level Security on user-owned tables.
- Private-by-default diary, health and financial records.
- Version-controlled SQL migrations.

No personal data should be entered until authentication and RLS are implemented and tested.
