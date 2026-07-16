# drawtoit.github.io

Portfolio — pixel art & indie game dev. React + Vite + Tailwind CSS + Framer Motion.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## Contenido

Todo el texto, enlaces e imágenes se editan en `src/data/content.js`.
Imágenes propias: colócalas en `src/assets/` y asigna su ruta al campo `src` de cada item.

## Deploy

Push a `main` → GitHub Actions (`.github/workflows/deploy.yml`) compila y publica en GitHub Pages automáticamente.
Requisito único: en el repo, **Settings → Pages → Source: GitHub Actions**.
