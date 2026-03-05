<p align="center">
  <img src="public/logo.png" alt="Debuxel" width="80" />
</p>

<h1 align="center">Debuxel</h1>

<p align="center">
  Free AI-powered developer toolkit — debug, explain, document, and design APIs instantly.
</p>

<p align="center">
  <a href="https://debuxel.com">Website</a> · 
  <a href="https://discord.gg/99UtsJ4n">Discord</a> · 
  <a href="https://debuxel.com/blog">Blog</a>
</p>

---

## Features

| Tool | Description |
|------|-------------|
| **AI Bug Fixer** | Paste error messages or stack traces → get explanations and fixes |
| **Code Explainer** | Paste code → get step-by-step breakdowns |
| **README Generator** | Describe your project → get professional README markdown |
| **API Generator** | Describe endpoints → get full OpenAPI spec |
| **Stack Recommender** | Describe your project → get a tailored tech stack |
| **Reverse Engineer** | Paste code → get architecture analysis |
| **Architecture Generator** | Describe goals → get system design diagrams |

All tools are **100% free** — no credit card, no limits.

---

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org) (App Router)
- **Styling** — [Tailwind CSS 4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- **Auth & Database** — [Supabase](https://supabase.com) (PostgreSQL + Auth)
- **AI** — [Google Gemini](https://ai.google.dev) via Vercel AI SDK
- **Deployment** — [Vercel](https://vercel.com)

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project
- A [Google AI Studio](https://aistudio.google.com) API key (free tier available)

### Setup

```bash
# Clone the repo
git clone https://github.com/deb001-bit/debuxel.git
cd debuxel

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# → Fill in your Supabase URL, anon key, and Gemini API key

# Run the database migration
# Copy the contents of supabase/migrations/20260304_initial_schema.sql
# and run it in your Supabase SQL Editor

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/                # API routes (AI tools, feedback)
│   ├── auth/               # Login, signup, OAuth callback
│   ├── dashboard/          # Authenticated dashboard + tool pages
│   ├── blog/               # Blog index and posts
│   ├── tools/[slug]/       # Public tool detail pages
│   └── ...                 # About, contact, privacy, products
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── layout/             # Navbar, Footer, ThemeToggle
│   ├── dashboard/          # AIToolLayout (shared tool UI)
│   ├── ads/                # AdContainer (AdSense placeholder)
│   ├── FAQSection.tsx      # Expandable FAQ accordion
│   └── RecommendedTools.tsx # Affiliate recommendations
├── lib/
│   ├── supabase/           # Supabase client + middleware helpers
│   ├── tools-data.ts       # Tool registry (metadata, icons, features)
│   ├── recommended-tools.ts # Affiliate partner data
│   └── utils.ts            # Utility functions
└── middleware.ts            # Auth route protection
```

---

## Environment Variables

See [`.env.example`](.env.example) for the full list. Required:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google AI Studio API key |

Optional (for contact form):

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP port |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP app password |
| `FEEDBACK_EMAIL` | Inbox for feedback emails |

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## License

MIT © [Debuxel](https://debuxel.com)
