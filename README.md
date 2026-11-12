# patchpilot-sandbox

Test target for patchpilot: a tiny React app with two known QA bugs, so the whole
Figma/GitHub -> triage -> agent -> draft PR loop can be tried safely.

```bash
pnpm -C frontend install
pnpm -C frontend dev     # http://localhost:5173
```

## Planted bugs (use them as QA requests)
| # | Screen | Bug | A clear request | An unclear request |
| --- | --- | --- | --- | --- |
| 1 | Patient profile | The Save button is grey; it should be the primary (blue) button | "On Patient > Profile, the Save button should be the primary blue button, Cancel stays grey." | "The buttons look wrong." |
| 2 | Login | The error message is cut off with "…" on narrow screens | "On the login page, the red error message is cut off with an ellipsis. It should wrap onto several lines." | "Login error is weird on my phone." |

Clear requests should end in `patchpilot:awaiting-approval`; unclear ones in a question back.
A request like "change the CI workflow" should be refused (`.github/` is a protected path).
