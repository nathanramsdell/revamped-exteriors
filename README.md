# Revamped Exteriors

Website for Revamped Exteriors — professional exterior renovation and home improvement services.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (component library)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start dev server with Turbopack  |
| `npm run build`        | Build for production             |
| `npm run start`        | Start production server          |
| `npm run lint`         | Run ESLint                       |
| `npm run format`       | Format code with Prettier        |
| `npm run format:check` | Check formatting without changes |

## Project Structure

```
src/
├── app/              # Pages and layouts (App Router)
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Landing page
│   └── globals.css   # Global styles + Tailwind + shadcn theme
├── components/
│   └── ui/           # shadcn/ui components
└── lib/
    └── utils.ts      # Shared utilities (cn helper, etc.)
```

## Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Browse available components at [ui.shadcn.com](https://ui.shadcn.com/docs/components).
