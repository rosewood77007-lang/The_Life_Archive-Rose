# Security

## Current status

Security foundation is not yet implemented. This shell has no login, database, storage, or server API. It is not suitable for storing sensitive information.

## Required before real user data
- Supabase Auth with verified session handling.
- Database Row Level Security for every user-owned table.
- Workspace membership checks on every protected operation.
- Server-only service-role secret.
- Validation and safe error handling.
- Rate limits and secure session configuration.
- Private storage buckets and signed access where appropriate.
- Upload type/size validation and malware-risk controls.
- Cross-account authorization tests.
- Data export and account deletion workflows.
- Backup and restore procedure.

Private health, diary and financial records must not be sent to AI unless the user explicitly approves the exact data/context being shared.
