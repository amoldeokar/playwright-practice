# Copilot instructions for this repository

## Project overview

This repository is a Playwright TypeScript test project generated with `npm init playwright@latest`. The current app structure is intentionally small and conventional for browser automation work:

- `playwright.config.ts` defines the browser matrix and runtime settings.
- `tests/` contains the actual end-to-end scenarios.
- `.github/workflows/playwright.yml` runs the suite in CI with browser installation and artifact upload.

The default test suite currently exercises the public Playwright docs site (`https://playwright.dev/`) and checks a title and a "Get started" navigation flow.

## Build, test, and lint commands

There are no custom npm scripts yet in `package.json`, so the canonical commands are the direct Playwright commands and the package manager install step.

Use these commands from the repository root:

- Install dependencies: `npm install`
- Run the full suite: `npx playwright test`
- Run one test file: `npx playwright test tests/example.spec.ts`
- Run one test by name: `npx playwright test -g "has title"`
- Run a single project/browser: `npx playwright test --project=chromium`
- Open the HTML report: `npx playwright show-report`
- Open the UI mode: `npx playwright test --ui`
- Debug a failing test: `npx playwright test --debug`
- Install browser binaries and OS deps: `npx playwright install --with-deps`

If a project script is added later, prefer `npm run <script>` over invoking the tool directly.

## High-level architecture

The important architecture is the separation between Playwright configuration and test logic:

- `playwright.config.ts` is the source of truth for browser targets, reporters, retries, parallelism, and test discovery.
- `tests/*.spec.ts` files contain scenario-level browser automation and assertions.
- CI is defined in `.github/workflows/playwright.yml` and mirrors the local workflow: install dependencies, install browser binaries, run tests, and publish the report artifact.

The repo is not structured around an application server or business-domain code; it is organized around reliability and clarity for browser-driven verification.

## Key conventions

These are the conventions that matter in this codebase and are not obvious from a single file:

- Prefer Playwright's own `@playwright/test` APIs (`test`, `expect`, `page`, `locator`, `request`) instead of custom wrappers.
- Keep each test focused on one user-visible behavior and use descriptive names such as `has title` or `get started link`.
- Prefer user-facing selectors (`getByRole`, `getByLabel`, `getByText`) over brittle CSS selectors or positional logic.
- Let Playwright manage waits and retries; avoid arbitrary sleeps unless there is a true external timing dependency.
- Use project-specific browser choices from `playwright.config.ts` rather than hard-coding browser assumptions inside tests.
- Keep assertions explicit and business-facing (`toHaveTitle`, `toBeVisible`, `toContainText`) rather than asserting on implementation details.
- Use the generated HTML reporter and CI artifact output as the default way to inspect failures.

## Existing repo guidance

There is no README, CONTRIBUTING guide, or additional AI instruction file in this repository at the moment; this file captures the actual state of the project and the conventions implied by the generated Playwright configuration.
