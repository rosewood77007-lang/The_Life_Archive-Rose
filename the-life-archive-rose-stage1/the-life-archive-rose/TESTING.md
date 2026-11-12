# Testing

## Current checks
- Source files were created and inspected.
- Runtime inventory: Node.js 22.16.0, npm 10.9.2, Chromium 144, Git available.
- Next.js dependencies are not installed; npm cache is empty.
- No Next.js build, typecheck, lint, automated tests or browser test has passed yet.

## Commands after dependencies are installed
```bash
npm run typecheck
npm run lint
npm run build
npm run dev
```

## Required test layers
- Unit tests for domain logic and validation.
- Integration tests for server actions and database behavior.
- Browser tests for navigation, forms and responsive behavior.
- Auth/session tests.
- Two-user authorization/isolation tests.
- Persistence tests across refresh and devices.
- Upload authorization and validation tests.
- Accessibility and keyboard-navigation checks.

Do not treat a successful page render as proof of backend security or data persistence.
