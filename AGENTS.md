# Jurado-App Coding Standards

## General
REJECT if:
- Hardcoded secrets, API keys, or connection strings (use `.env`).
- Missing error handling in async operations (try/catch or `.catch()`).
- Console logs left in production-ready code.
- Duplicated business logic between `api` and `web`.

## Frontend (React/Web)
REJECT if:
- Using `var`. Prefer `const`, then `let`.
- Direct DOM manipulation (use React refs or state).
- Hex colors or inline styles where Tailwind classes should be used.
- Large components (> 250 lines). Break them into smaller, reusable components.
- Props drilling beyond 3 levels. Use Context or State Management.
- Missing `key` prop in lists.

PREFER:
- Functional components with Hooks.
- Axios for API calls (configured in a central instance).
- Material Tailwind components for UI consistency.

## Backend (Express/API)
REJECT if:
- Routes defined directly in `app.js` (use a router structure).
- Direct database calls in routes (use Controllers/Services).
- Missing validation for request bodies (use a validation middleware).
- Sending plain 500 errors to the client without specific messages.
- Storing passwords in plain text (use `bcryptjs`).

PREFER:
- Standardized response format: `{ success: boolean, data?: any, error?: string }`.
- Using `http-errors` for consistent error handling.
- Environment-based logging (Morgan in dev, something else or filtered in prod).

## Response Format for GGA
The first line of the review must be:
STATUS: PASSED
or
STATUS: FAILED

If FAILED, provide a bulleted list:
- `path/to/file:line` - Rule violated - Brief explanation.
