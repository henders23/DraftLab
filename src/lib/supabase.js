import { createClient } from '@supabase/supabase-js';

// The publishable key is safe to ship in client code; row-level security
// governs all data access. Override via env for other environments.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://hmwljgfkmlpvqmhmqrsw.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY || 'sb_publishable_QHoYR424Lh3TyZujc69DWA_HmPQkQ7p';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export function initialsOf(name) {
  if (!name) return '';
  return name.trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
}

// Deterministic avatar colour variant per user id
export function variantOf(id) {
  if (!id) return 0;
  let h = 0;
  for (const c of String(id)) h = (h * 31 + c.charCodeAt(0)) % 5;
  return h;
}

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const DOWS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Derive the display fields the event cards expect from a timestamptz
export function eventLabels(startsAt) {
  const d = new Date(startsAt);
  return {
    mon: MONTHS[d.getMonth()],
    day: String(d.getDate()).padStart(2, '0'),
    dow: DOWS[d.getDay()],
    time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
    dateLabel: `${DOWS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()].charAt(0) + MONTHS[d.getMonth()].slice(1).toLowerCase()}`,
  };
}

export function timeAgo(iso) {
  const s = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86400) return `${Math.floor(s / 3600)} hour${s >= 7200 ? 's' : ''} ago`;
  if (s < 172800) return 'yesterday';
  return `${Math.floor(s / 86400)} days ago`;
}
