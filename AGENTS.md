# Repository Guidelines

## Project Structure & Module Organization

This repository is a React single-page site built with Create React App. Application routing and shared layout live in `src/App.js`; route-level pages and features live in `src/components/`. Global and page styles are in `src/Styles/`. Keep reusable images and icons in `src/` or `public/` according to whether they are imported by code or served as static files. Resume data is in `src/data/resume.json`. Tests are colocated in `src/` (currently `src/App.test.js`).

## Build, Test, and Development Commands

- `npm install` installs dependencies from `package-lock.json`.
- `npm start` runs the local development server with hot reload.
- `npm test -- --watchAll=false` runs the Jest/React Testing Library test runner once (the existing test is a render smoke test).
- `npm run build` creates the optimized static site in `build/`.
- `npm run deploy` builds and publishes `build/` using `gh-pages`; use this only when publishing is intended.

## Coding Style & Naming Conventions

Follow the existing JavaScript and JSX style: two-space indentation, semicolons, single quotes for imports/strings where practical, and React components named in `PascalCase`. Use descriptive `PascalCase.js` filenames for components and `camelCase` for variables and functions. Keep styles in the corresponding CSS files under `src/Styles/`. ESLint configuration extends the React app rules plus recommended React, import, and accessibility checks; avoid disabling rules without a clear reason.

## Testing Guidelines

Use the Create React App Jest setup. Name tests `*.test.js` and place them near the code they cover. Add or update tests for routing and visible behavior when changing components; keep tests deterministic and independent of network access. Run `npm test -- --watchAll=false` before submitting changes.

## Commit & Pull Request Guidelines

Recent commits use short, informal subject lines (for example, `Initial Commit`). Prefer concise imperative subjects that explain the change. Pull requests should describe user-visible changes, list relevant validation commands and results, link related issues when applicable, and include screenshots for visual changes. Keep generated `build/` output and unrelated local edits out of review unless deployment specifically requires them.

## Configuration & Deployment

The public site URL and package scripts are configured in `package.json`; static entry and metadata are in `public/`. Do not commit credentials or machine-specific configuration. Deployment targets GitHub Pages through the configured `gh-pages` script.
