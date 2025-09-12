# Repository Guidelines

## Project Structure & Module Organization

- Source: `worker.tsx` (entry), UI in `components/`, routes in `pages/`, static assets in `public/`.
- Tooling/config: `vite.config.ts`, `tsconfig.json`, `.prettierrc`, `wrangler.jsonc`, `tailwind.css`.
- Types: Cloudflare Worker types in `worker-configuration.d.ts`.

## Build, Test, and Development Commands

- `bun install`: install dependencies.
- `bun dev`: start Vite dev server on host for local iteration.
- `bun run build`: production build via Vite (outputs to `.wrangler`/dist for Worker deploys).
- `bun types`: generate Wrangler types for the Worker environment.
- `bun format`: format sources with Prettier and plugins.

## Coding Style & Naming Conventions

- Language: TypeScript with ESM (`type: module`). Indent 2 spaces.
- Components: KebabCase files in `components/` (e.g., `hero-banner.tsx`).
- Pages/routes: kebab-case in `pages/` (e.g., `about.tsx`).
- Imports: organize automatically; Prettier with `prettier-plugin-organize-imports` and `prettier-plugin-tailwindcss`.
- CSS: Tailwind v4 in `tailwind.css`; prefer utility classes over custom CSS.

## Testing Guidelines

- No test framework is configured yet. If adding tests, prefer Vitest and place files as `*.test.ts` adjacent to sources.
- Keep units small and deterministic; avoid network calls in unit tests.

## Commit & Pull Request Guidelines

- Commits: concise, imperative subject (max ~72 chars). Group related changes; run `npm run format` before committing.
- Example: "build: configure Wrangler types" or "feat(components): add HeroBanner".
- PRs: include summary, motivation, screenshots for UI, and deployment notes. Link issues and list manual test steps.

## Security & Configuration Tips

- Secrets/config: manage via Cloudflare Wrangler; do not commit secrets. Use `wrangler secret put NAME`.
- Verify Worker compatibility; avoid Node-only APIs at runtime.
- CI/CD: if adding, run build and type checks; fail on formatting drift.
