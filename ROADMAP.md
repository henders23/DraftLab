# DraftLab Roadmap

Turning DraftLab into a **very attractive, social, and productive app for
international PhD students**.

## The thesis

International PhD students share three acute pains:

1. **Writing in academic English** as a second language
2. **Isolation** — working alone, often far from home
3. **Staying productive** without the structure of a job

These map directly onto our three goals — _attractive, social, productive_ —
and the "international" angle (ESL + timezones + cross-cultural academic norms)
is the wedge no generic writing tool serves well. **Lead with it.**

---

## Phase 0 — Foundation ✅ (in progress)

Real backend so multi-user and social features become possible.

- [x] Supabase project + Postgres schema with row-level security
- [x] `profiles` (auto-created on signup) with streak tracking
- [x] `documents`, `writing_goals`, `writing_sessions`, `learning_progress`
- [x] Server-side streak trigger on logged writing sessions
- [x] `@supabase/supabase-js` client + `AuthContext`
- [x] Email/password login & signup screen
- [x] Public/private route split + guarded app shell
- [x] Real user in sidebar/dashboard (replaced hardcoded "Elena R.")
- [x] Learning progress persisted in Supabase (migrates off localStorage)
- [ ] CI (lint + build) on PRs
- [ ] A handful of tests around auth + data hooks

## Phase 1 — Make it SOCIAL (retention engine)

- [x] Rich profiles: country, native language, discipline, university, stage, timezone
- [x] Onboarding prompt to complete your profile
- [x] Community directory with matching by discipline / language / country
- [ ] Real peer-review loop: request → accept → review → rating (credits system)
- [ ] Accountability partners / writing buddies
- [ ] Live co-working rooms with presence ("who's writing now")
- [ ] Lightweight messaging / comments on reviews

## Phase 2 — Make it PRODUCTIVE (daily habit)

- [ ] In-app document editor (replace the `/docs` placeholder) with autosave
- [ ] Writing goals + streaks + word-count tracking (schema already in place)
- [ ] Pomodoro co-working timer tied to events
- [ ] Real AI feedback via the Claude API (replace the mock), aimed at ESL needs

## Phase 3 — Make it INTERNATIONAL (the differentiator)

- [ ] ESL-focused AI feedback: idiom, hedging/register, article (a/the) errors
- [ ] Timezone-aware events (replace hardcoded GMT) + localized times
- [ ] Cross-cultural academic-norms content (supervisor comms, Western conventions)
- [ ] Country / discipline community cohorts

## Phase 4 — Make it ATTRACTIVE (polish + growth)

- [ ] Onboarding flow + empty states
- [ ] Working search (drafts, events, lessons)
- [ ] Real notifications
- [ ] Mobile polish
- [ ] Gamification: badges, leaderboards for streaks & reviews given

---

## Recommended sequencing

Phase 0 first (nothing social works without it) → **Phase 1 (social)**, because
community is what makes the app sticky and drives word-of-mouth within
international cohorts. AI feedback is exciting but many tools have it; the
**community + ESL angle is the moat.**
