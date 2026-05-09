# GoToKart documentation

Official documentation site for [GoToKart](https://github.com/gotokart) — a small e-commerce platform deployed on AWS EC2 at **[https://gotokart.xyz](https://gotokart.xyz)**.

Built with [Next.js](https://nextjs.org/) + [Nextra](https://nextra.site/) and statically exported. Deployed automatically to GitHub Pages.

## What's covered

- **Architecture** — annotated swimlane diagram (Client → Source → CI/CD → Runtime → AWS managed → Deploy).
- **Backend API** — endpoint reference including the new S3 image-upload routes (`POST /image-upload-url`, `PATCH /image`).
- **Frontend** — vanilla JS storefront, JWT session, and the three-step S3 presigned-URL upload flow.
- **Infrastructure** — Docker Compose layout, nginx + Let's Encrypt (webroot mode), certbot systemd timer, S3 bucket + CORS, IAM role, runbook.
- **Commit activity** — generated timeline grouped by day from `git log`, with full commit list and GitHub links.

## Live links

- Storefront: <https://gotokart.xyz>
- API: <https://gotokart.xyz/api/>
- Docs (this site): <https://gotokart.github.io/docs/>
- Organization: <https://github.com/gotokart>

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
```

Static files are written to `out/`.

## Content map

| Path | Purpose |
|------|---------|
| `pages/index.mdx` | Landing page, architecture overview, quick navigation |
| `pages/getting-started.mdx` | Local + EC2 onboarding, AWS credentials, image upload flow |
| `pages/backend.mdx` | API reference: auth, users, products, **product images (S3)**, cart, orders |
| `pages/frontend.mdx` | UI behavior, JWT session, three-step S3 upload flow |
| `pages/infrastructure.mdx` | EC2, Docker, TLS via Let's Encrypt, S3 + IAM, CI/CD, runbook |
| `pages/activity.mdx` | Commit timeline + full commit list |
| `components/ArchitectureDiagram.tsx` | The end-to-end swimlane diagram |
| `components/ActivityTimeline.tsx` | Commit timeline UI |
| `scripts/generate-activity.mjs` | Writes `generated/activity.json` from git history |
| `theme.config.tsx` | Logo, footer, theme colors |
| `styles/docs-ui.css` | Shared custom UI styles for hero / cards / API blocks |

## GitHub Pages setup

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. The workflow sets `BASE_PATH=/docs` so the site works at <https://gotokart.github.io/docs/> (the repo is `docs` under the `gotokart` org).
3. If your repository name or Pages URL differs, change the `BASE_PATH` env in `.github/workflows/deploy-docs.yml` and update the `homepage` field in `package.json` to match.

## License

Content and configuration in this repository are provided for the GoToKart project. Third-party dependencies retain their respective licenses.
