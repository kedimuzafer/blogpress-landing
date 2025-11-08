# BlogPress Landing Page

Modern, bağımsız landing page for BlogPress platform.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components
- **TypeScript** - Type safety
- **Biome** - Fast linter and formatter

## Features

- ✨ Modern, responsive design
- 🚀 Optimized performance
- 🎨 Beautiful gradients and animations
- 📱 Mobile-first approach
- ♿ Accessible components
- 🔍 SEO optimized

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build for production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (landing)
│   └── globals.css         # Global styles
├── components/
│   ├── landing/            # Landing page components
│   │   ├── index.tsx       # Main landing component
│   │   ├── hero.tsx        # Hero section
│   │   ├── features.tsx    # Features section
│   │   ├── automation.tsx  # Automation section
│   │   ├── cta.tsx         # Call-to-action section
│   │   ├── floating-header.tsx
│   │   └── modern-footer.tsx
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       └── input.tsx
├── hooks/
│   ├── useDomainCheck.ts   # Domain availability check
│   └── useDebounce.ts      # Debounce hook
└── lib/
    └── utils.ts            # Utility functions

```

## Components

### Landing Page Sections

1. **Hero** - Main hero section with site creation form
2. **Features** - Key features showcase
3. **Automation** - Automation capabilities
4. **CTA** - Final call-to-action
5. **Header** - Sticky floating header
6. **Footer** - Modern footer with links

### UI Components

- `Button` - Versatile button component with variants
- `Input` - Form input component

## Customization

### Colors

Edit color variables in `app/globals.css`:

```css
:root {
  --primary: oklch(0.75 0.2 45);
  --secondary: oklch(0.5360 0.0398 196.0280);
  /* ... */
}
```

### Content

Edit text content in component files:
- Hero: `components/landing/hero.tsx`
- Features: `components/landing/features.tsx`
- Automation: `components/landing/automation.tsx`

## License

MIT
