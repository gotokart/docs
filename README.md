# GoToKart documentation

Official documentation site for [GoToKart](https://github.com/gotokart), built with [Next.js](https://nextjs.org/) + [Nextra](https://nextra.site/).

The repository contains product docs for architecture, backend APIs, frontend behavior, infrastructure, and commit activity, with automatic deployment to GitHub Pages.

## Features

- **Premium docs UI:** dark-first layout, branded hero/CTA cards, repository cards, and improved architecture presentation.
- **Backend API docs:** endpoint summaries plus expanded usage examples and practical notes.
- **Commit activity timeline:** grouped-by-day history generated from `git log`, with full commit list and GitHub links.
- **CI/CD deployment:** GitHub Actions builds static output (`out/`) and deploys to GitHub Pages.
- **Edit/feedback ready:** page-level edit links and feedback entry points in docs theme.

## Live project

- Live storefront: [https://gotokart.github.io/frontend/#](https://gotokart.github.io/frontend/#)
- Docs repository: [https://github.com/gotokart/docs](https://github.com/gotokart/docs)
- Organization: [https://github.com/gotokart](https://github.com/gotokart)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static files are written to `out/`.

## Content map

- `pages/index.mdx` - landing page, architecture overview, quick navigation
- `pages/backend.mdx` - API coverage and endpoint details
- `pages/frontend.mdx` - frontend behavior and integration
- `pages/infrastructure.mdx` - infra and deployment model
- `pages/activity.mdx` - commit timeline and full list view

## GitHub Pages setup

1. In the **docs** repository on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. The workflow sets `BASE_PATH=/docs` so the site works at **`https://gotokart.github.io/docs/`** (repository name `docs` under the `gotokart` organization).
3. If your repository name or Pages URL differs, change the `BASE_PATH` env in `.github/workflows/deploy-docs.yml` and update the `homepage` field in `package.json` to match.

## Repository layout

| Path | Purpose |
|------|---------|
| `pages/` | MDX documentation (not copied from external projects) |
| `components/ActivityTimeline.tsx` | Commit timeline UI |
| `scripts/generate-activity.mjs` | Writes `generated/activity.json` from git history |
| `theme.config.tsx` | Logo, footer, theme colors |
| `styles/docs-ui.css` | Shared custom UI styles for docs cards and sections |

## License

Content and configuration in this repository are provided for the GoToKart project. Third-party dependencies retain their respective licenses.
