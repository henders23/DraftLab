# DraftLab — Scholarly Voice

The academic writing workspace and community for **international PhD students**.
Write with clarity, argue with confidence — backed by AI feedback, peer review,
a structured curriculum, live co-working, and a community of doctoral writers.

## Tech stack

- **React 18** + **React Router 7** + **Vite**
- **Tailwind CSS** (black/white editorial theme)
- **Supabase** — Postgres, auth, and row-level security

## Getting started

```bash
npm install
cp .env.example .env   # fill in your Supabase URL + publishable key
npm run dev
```

### Environment variables

The app needs a Supabase project. Set these in `.env` (see `.env.example`):

| Variable                 | Where to find it                                  |
| ------------------------ | ------------------------------------------------- |
| `VITE_SUPABASE_URL`      | Supabase dashboard → Project Settings → API → URL |
| `VITE_SUPABASE_ANON_KEY` | Project Settings → API → publishable / anon key   |

The anon/publishable key is safe to expose client-side; access is governed by
row-level security policies in the database.

## Database

The schema lives in Supabase migrations (`phase0_foundation`, `phase0_harden_functions`):

- `profiles` — one per auth user (auto-created on signup), incl. streak tracking
- `documents` — drafts (title, content, status, word count)
- `writing_goals` / `writing_sessions` — productivity tracking; a trigger keeps
  each user's writing streak up to date as sessions are logged
- `learning_progress` — Learning Zone completion, per user

Every table has row-level security so users only ever see their own data.

## Project structure

```
src/
  lib/supabase.js          Supabase client
  context/AuthContext.jsx  session + profile + auth methods
  context/ProgressContext  learning progress (Supabase-backed)
  views/                   page-level screens (Landing, Auth, Dashboard, ...)
  components/              shell (Sidebar, Header) + dashboard widgets
  data/                    curriculum content + lessons
```

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for the phased plan toward an attractive, social,
and productive app for international PhD students.
