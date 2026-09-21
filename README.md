# tools

Browser tools suite for [kakronayan.github.io/tools](https://kakronayan.github.io/tools/).

Local-first utilities for encoding, decoding, formatting, and hashing in the browser.

## Local-first behavior

All processing happens in the browser with native web APIs where possible. The app does not include a backend, server API, database, or analytics integration. After the static assets load, your input remains on your device and transformations run locally.

## Available tools

- **Base64 encode/decode**: Converts UTF-8 text to and from Base64.
- **JWT decode/inspect**: Decodes JWT headers and payloads for inspection without verifying signatures.
- **URL encode/decode**: Encodes and decodes URL component strings.
- **JSON formatter/minifier**: Pretty-prints or compacts valid JSON.
- **SHA-256 hash generator**: Uses the Web Crypto API to generate SHA-256 hashes.

## Development commands

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## GitHub Pages deployment

This project is configured for a repository GitHub Pages site at `/tools/` via `base: '/tools/'` in `vite.config.ts`.

## Contributors

- [kakronayan](https://github.com/kakronayan)

Deployment is handled by the GitHub Actions workflow in `.github/workflows/deploy.yml`. On pushes to the default branch (`main`), the workflow installs dependencies, runs `npm run build`, uploads the generated `dist/` directory, and deploys it with the official GitHub Pages actions.

To enable deployment in GitHub:

1. Open the repository **Settings** tab.
2. Go to **Pages**.
3. Set **Build and deployment** → **Source** to **GitHub Actions**.
4. Push changes to `main` or manually run the **Deploy to GitHub Pages** workflow.
