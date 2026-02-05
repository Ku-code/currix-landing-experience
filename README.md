# Currix – Landing Experience

Landing page for **Currix Currywurst** – Food Culture, Not Fast Food.

**Live site**: [currix.nl](https://currix.nl)

## Tech stack

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS

## Local development

```sh
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment (GitHub Pages + currix.nl)

The site is deployed to GitHub Pages via GitHub Actions. The workflow:

1. Triggers on push to `main`
2. Builds the project with Vite
3. Deploys to GitHub Pages
4. Uses `CNAME` (currix.nl) for custom domain

To deploy, push to `main`. Ensure **Settings → Pages → Build and deployment** is set to **GitHub Actions**.
