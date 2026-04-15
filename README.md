# studio-demo

A game studio portfolio built with React, TypeScript, Vite, Tailwind CSS v4, and Three.js.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

## Getting started

Install dependencies:

```bash
npm install
```

## Development

Start the local dev server with hot module replacement:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

## Build

Compile TypeScript and bundle for production:

```bash
npm run build
```

Output is written to `dist/`.

## Preview production build

Serve the production build locally to verify it before deploying:

```bash
npm run preview
```

## Configuration

All site content (studio name, hero text, games, blog posts, footer links, etc.) lives in a single file:

```
src/Config.ts
```

Edit that file to customise the site without touching any component code.

## Credits

- 3D model by [TomaszCGB](http://www.turbosquid.com/Search/Artists/TomaszCGB) via TurboSquid
- Built by [@Cheeteau](https://github.com/chteau)
