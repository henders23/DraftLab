// Community data. These arrays are empty until real member data is wired in
// (Supabase project: DraftLab). Views render honest empty states in the meantime.

export const PEOPLE = [];

export const EVENTS = [
  { id: 'ev-method',  mon: 'AUG', day: '06', dow: 'Thu', time: '14:00', len: '60 min',
    title: 'Structuring a methodology chapter', type: 'Workshop',
    host: 'PGR Commons team', going: 0, circle: 0, cover: 'workshop photo' },
  { id: 'ev-sprint',  mon: 'AUG', day: '08', dow: 'Sat', time: '10:00', len: '90 min',
    title: 'Silent writing sprint', type: 'Writing sprint',
    host: 'Peer-led', going: 0, circle: 0, cover: 'people writing' },
  { id: 'ev-stance',  mon: 'AUG', day: '12', dow: 'Wed', time: '16:00', len: '45 min',
    title: 'Hedging & stance in academic English', type: 'Language',
    host: 'PGR Commons team', going: 0, circle: 0, cover: 'seminar photo' },
  { id: 'ev-cowrite', mon: 'AUG', day: '13', dow: 'Thu', time: '09:00', len: 'Drop-in',
    title: 'Coffee & co-writing', type: 'Drop-in',
    host: 'Open to all', going: 0, circle: 0, cover: 'cafe co-writing' },
  { id: 'ev-revise',  mon: 'AUG', day: '15', dow: 'Sat', time: '13:00', len: '50 min',
    title: 'From feedback to a revision plan', type: 'Talk',
    host: 'PGR Commons team', going: 0, circle: 0, cover: 'talk photo' },
  { id: 'ev-present', mon: 'AUG', day: '18', dow: 'Tue', time: '15:00', len: '75 min',
    title: 'Presenting research with confidence', type: 'Workshop',
    host: 'PGR Commons team', going: 0, circle: 0, cover: 'presentation photo' },
];

export const FEED = [];

export const NOTIFICATIONS = [];

export const FEEDBACK = [];

export const PLANS = [
  { id: 'free',     name: 'Free',     price: '£0',   per: 'always free',  tagline: 'For getting started',
    cta: 'Join free', highlight: false,
    features: ['Join the Commons', 'Your circle + disciplinary community', 'Feed, notifications & feedback exchange', 'Up to 2 events a month'] },
  { id: 'standard', name: 'Standard', price: '£39',  per: 'per month',    tagline: 'For the regular attender',
    cta: 'Start free week', highlight: true, badge: '1 week free',
    features: ['Everything in Free', 'Unlimited workshops & events', 'Priority booking', 'Event recordings & resources', 'Open writing-sprint rooms anytime'] },
  { id: 'premium',  name: 'Premium',  price: '£89',  per: 'per month',    tagline: 'For dedicated momentum',
    cta: 'Start free week', premium: true, badge: '1 week free',
    features: ['Everything in Standard', 'Fortnightly 1-to-1 with a mentor', 'Expert feedback on your writing', 'Personal milestone planning', 'Priority in every queue'] },
];

// Mentor matching happens after a member joins Premium; no mentor is assigned yet.
export const MENTOR = null;

export const SLOTS = [];

export const SESSIONS = [];
