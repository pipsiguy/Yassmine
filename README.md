# Yassmine Ramadan — Portfolio

Personal site for Yassmine Ramadan, Research Technician in the Schwer Lab at Weill Cornell Medicine.

Built on Next.js 16 (static export) and deployed to GitHub Pages at [yassmineramadan.com](https://yassmineramadan.com).

## Getting Started

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Static output lands in `./out/` and is published by `.github/workflows/nextjs.yml` on push to `main`.

## Configuration

- `src/resources/config.ts` — `baseURL`, schema, social links, theme
- `src/resources/content.tsx` — bio, research, experience, FAQ, blog/work metadata
- `src/resources/icons.ts` — icon map

Blog posts live in `src/app/blog/posts/*.mdx`; work entries in `src/app/work/projects/*.mdx`.

## License

This project is derived from the `salat-mahenoor-ai-creative-developer` template by [Salat Mahenoor](https://github.com/mahenoorsalat/salat-mahenoor-ai-creative-developer), used under CC BY-NC 4.0 (attribution, non-commercial). See `LICENSE` for the full text.
