# patchpilot-sandbox

Throwaway repo for testing patchpilot end to end. Same shape as web-desktop: the app lives in `frontend/`
(React + Vite + pnpm). There is no backend here.

## Code style
- Colors, spacing, radius and font sizes come from `frontend/src/styles/tokens.css` (CSS variables). Never hard-code them.
- Buttons use `frontend/src/components/ui/Button.tsx` with `variant="primary"` for the main action of a screen.
- No real patient data anywhere, including tests.

## patchpilot: Figma -> code map
| Figma page / frame prefix | Code |
| --- | --- |
| `Auth / Login` | `frontend/src/features/auth/LoginForm.tsx` |
| `Patient / Profile` | `frontend/src/features/patient/ProfilePage.tsx` |
| Component `Button/*` | `frontend/src/components/ui/Button.tsx` |

Design tokens: `frontend/src/styles/tokens.css`.

Commands (run from the repo root):
- `pnpm -C frontend lint`, `pnpm -C frontend typecheck`, `pnpm -C frontend test`, `pnpm -C frontend build`

patchpilot branches are `patchpilot/gh-<issue>-<slug>`; PRs are drafts into `main` with `Closes #<issue>`.
